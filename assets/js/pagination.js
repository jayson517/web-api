$(document).ready(function(){


// const list_items = [
// 	"Item 1",
// 	"Item 2",
// 	"Item 3",
// 	"Item 4",
// 	"Item 5",
// 	"Item 6",
// 	"Item 7",
// 	"Item 8",
// 	"Item 9",
// 	"Item 10",
// 	"Item 11",
// 	"Item 12",
// 	"Item 13",
// 	"Item 14",
// 	"Item 15",
// 	"Item 16",
// 	"Item 17",
// 	"Item 18",
// 	"Item 19",
// 	"Item 20",
// 	"Item 21",
// 	"Item 22",
// 	"Item 23",
// 	"Item 24",
// 	"Item 25",
// 	"Item 26",
// 	"Item 27",
// 	"Item 28",
// 	"Item 29",
// 	"Item 30",
// ];

// const list_element = document.getElementById('list');
// const pagination_element = document.getElementById('pagination');
// const contButton = document.querySelector(".container");

// let current_page = 1;
// let rows = 5;

// console.log(rows);

// function displayList(items, wrapper,rows_per_page, page)
// {
// 	wrapper.innerHTML = "";
// 	page--;
// 	/**
// 	 * 
// 	 * 
// 	 * @type {[type]}
// 	 */
// 	console.log(page);

// 	let start = rows_per_page * page; 
// 	let end = start + rows_per_page;
// 	let paginatedItems = items.slice(start, end);
// 	console.log(paginatedItems);
// 	for(let i=0; i<paginatedItems.length; i++ )
// 	{
// 		console.log(paginatedItems[i]);

// 		let item = paginatedItems[i];
// 		let item_element = document.createElement('div');
// 		item_element.classList.add('item');
// 		item_element.innerText = item;

// 		wrapper.appendChild(item_element);
// 	}

// }

// function setupPagination(items, wrapper, rows_per_page)
// {
// 	wrapper.innerHTML = "";

// 	let page_count = 10;
// 	for(let i = 1; i < page_count; i++)
// 	{

// 		console.log(i);
// 		let btn = paginationButton(i);
// 		wrapper.appendChild(btn);
// 	}
//  }

// function paginationButton(page)
// {
// 	let button = document.createElement('button');
// 	button.innerText = page;

// 	if(current_page == page)
// 	{
// 		button.classList.add('active');
// 		return button;
// 	}
// }

// displayList(list_items, list_element, rows, current_page);
// setupPagination(list_element, pagination_element, rows);

let people = [
		{name : "Jayson", age : 40},
		{name : "Marlon", age : ""},
		{name : "Edward", age : 40},
		{name : "Jocelyn", age : 33},
		{name : "Simon", age : 10},
		{name : "Jhoven", age : 10},
		{name : "Regina", age : 64}
]

const contList = document.querySelector(".list");

const total = people.reduce((acc, element) => {
	console.log(acc);
	console.log(element);
	let contList = document.querySelector(".list");
	let btnElement = document.createElement('button');

	btnElement.innerText = element.age;
	btnElement.classList.add('btn');
	btnElement.classList.add('btn-sm');
	btnElement.classList.add('btn-primary');
	btnElement.classList.add('ml-1');
	contList.appendChild(btnElement);

	return acc + element.age;
}, 0);

	let hr = document.createElement('hr');
	contList.appendChild(hr);


const groupAge = people.reduce((acc, element) => {
	const age = element.age
	if(acc[age] == null)
	{
		acc[age] = [];
	}
	else
	{
		acc[age].push(element);
	}

	return acc;
}, {});




console.log(total);
console.log(groupAge);

})