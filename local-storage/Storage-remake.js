// Show all items
function doShowAll() {
	var key = ""
	var list = "<tr><th>Item</th>\n<th>Quantity</th></tr>\n"
	for (var i = 0; i < localStorage.length; i++) {
		key = localStorage.key(i)
		if (localStorage.getItem(key) === '0') {
			localStorage.removeItem(key)
		} else {
			list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</td></tr>\n"
		}
	}

	if (list == "<tr><th>Item</th>\n<th>Quantity</th></tr>\n") {
		list += "<tr><td>empty</td>\n<td>empty</td></tr>\n"
	} 

	document.getElementById('list').innerHTML = list
}

// Add new item
function SaveItem() {
	let message = document.getElementById('message')
	let name = document.forms.ShoppingList.name.value
	let data = document.forms.ShoppingList.data.value
	if (localStorage.getItem(name) === null) {
		if (data === '0') {
			message.innerText = 'Invalid quantity.'
		} else {
			localStorage.setItem(name, data)
			message.innerText = 'Item saved successfully.'
		}
	} else {
		message.innerText = 'Item already exists.'
	}
	doShowAll()
}

function ModifyItem() {
	let message = document.getElementById('message')
	let name = document.forms.ShoppingList.name.value
	let data = document.forms.ShoppingList.data.value
	
	if (localStorage.getItem(name) !== null) {
		if (data === '0') {
			localStorage.removeItem(name)
			message.innerText = 'Item removed.'
		} else {
			localStorage.setItem(name, data)
			message.innerText = 'Updated successfully.'
		}
	} else {
		message.innerText= 'Item not found.'
	}
	doShowAll()
}

function RemoveItem() {
	let name = document.forms.ShoppingList.name.value
	let message = document.getElementById('message')

	if (localStorage.getItem(name) !== null) {
		localStorage.removeItem(name)
		message.innerText = 'Item removed.'
	} else {
		message.innerText = 'Item not found.'
	}
	doShowAll()
}

function ClearAll() {
	let message = document.getElementById('message')
	localStorage.clear()
	message.innerText = 'All items cleared.'
	doShowAll()
}