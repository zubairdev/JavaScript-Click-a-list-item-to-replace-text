
var newItemCounter = 1;
// var ourList = document.getElementById("our-list");
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var ourHeadline = document.getElementById("our-headline");
// var listItems = document.getElementById('our-list').getElementsByTagName('li');
var listItems = document.querySelectorAll("#our-list li");

ourList.addEventListener("click", activateItems);

function activateItems(e) {
	if (e.target.nodeName == "LI") {
		ourHeadline.innerHTML = e.target.innerHTML;
	for (i = 0; i < e.target.parentNode.children.length; i++) {
	e.target.parentNode.children[i].classList.remove("active");
};
	e.target.classList.add("active");
	};
}

// ourList.onclick = function() {
// 	activateItems();
// };
ourButton.addEventListener("click", createNewItem);


function createNewItem() {
	ourList.innerHTML += "<li>Something New " + newItemCounter + "</li>";
	newItemCounter++;
}
