let intervalID;
let is24Hour = true;

const timezones = [7, 9, -5, 0, 11, -3]

function isValidOffset(value) {
    if (value > 14) {
        console.log('larger than 14');
        return false
    } else if (value < -12) {
        console.log('smaller than -12');
        return false
    } else if (!Number.isInteger(parseInt(value))) {
        console.log('not integer');
        return false
    } else if (typeof value === 'number' && isFinite(value)) {
        console.log('not float');
        return false
    }
    return true
}

function addClock() {
    const placeInput = document.getElementById('place-input')
    const utcInput = document.getElementById('utc-input').value
    const inputMsg = document.getElementById('input-msg')

    if (!isValidOffset(utcInput) ) {
        inputMsg.innerText = 'Invalid UTC offset.'
    } else {
        inputMsg.innerText = ''
        timezones.push(parseFloat(utcInput))
        var index = timezones.length
        console.log('added ' + placeInput.value + ' utc ' + utcInput);
    
        const clock = `
        <div class="d-flex flex-column mx-2 my-2" style="width: 260px;">
            <h1 class="text-center fw-bold fs-3">${placeInput.value}</h1>
            <h1 id="clock-${index}" class="py-3 mb-0 text-center rounded-top text-light fw-bold"></h1>
            <h2 id="date-${index}" class="bg-secondary text-light p-2 mb-0 text-center"></h2>
            <h3 id="utc-${index}" class="bg-dark rounded-bottom text-center text-light p-2"></h3>
        </div>`
    
        const div = document.createElement('div')
        div.innerHTML = clock
        const clocks = document.getElementById('clocks')
        clocks.appendChild(div)
    
        updateClock()
    }

}

function updateClock() {
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var count = 0

    for (offset of timezones) {

        if (offset === undefined) {
            continue
        }

        count++;
        const clock = document.getElementById('clock-' + count);
        const date = document.getElementById('date-' + count);
        const utcText = document.getElementById('utc-' + count);

        if (clock && date && utcText) {

            utcText.innerText = offset >= 0 ? 'UTC +' + offset : 'UTC ' + offset; 
            
            var currentTime = new Date(utc + (3600000*offset));
            let hour = currentTime.getHours()
            let period
            
            if (hour >= 7 && hour < 14) {
                clock.classList.add('bg-warning')
                clock.classList.remove('bg-dark')
            } else if (hour >= 14 && hour < 19) {
                clock.classList.add('bg-danger')
                clock.classList.remove('bg-warning')
            } else if (hour >= 19 && hour < 23) {
                clock.classList.add('bg-primary')
                clock.classList.remove('bg-danger')
            } else {
                clock.classList.add('bg-dark')
                clock.classList.remove('bg-primary')
            }
            
            if (is24Hour) {
                hour = ('0' + hour).substr(-2);
                period = '';
            } else {
                period = (hour >= 12) ? ' PM' : ' AM';
                hour = hour % 12 || 12;
                hour = hour >= 10 ? hour : '0' + hour
            }
            
            let minute = ('0' + currentTime.getMinutes()).substr(-2);
            let second = ('0' + currentTime.getSeconds()).substr(-2);
            let day = ('0' + currentTime.getDate()).substr(-2);
            let month = ('0' + (currentTime.getMonth() + 1)).substr(-2);
            let year = currentTime.getFullYear();
            
            clock.innerText = hour + ':' + minute + ':' + second + period;
            date.innerText = day + '/' + month + '/' + year;
        }
    }

}

function startClock() {
    updateClock();
    intervalID = setInterval(updateClock, 1000);
}

function switchTime() {
    clearInterval(intervalID);

    var switchButton = document.querySelector('#switch-btn');

    if (is24Hour) {
        is24Hour = false;
        switchButton.innerText = '24-hour clock';
    } else {
        is24Hour = true;
        switchButton.innerText = '12-hour clock';
    }

    startClock();
}

startClock();
