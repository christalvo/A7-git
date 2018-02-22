'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function goToDetail(e) {
	e.preventDefault();
	var projectID = $(this).closest('.items').attr('id');
	console.log(projectID);
	window.location.href = "./index_itemDetail?id=" + projectID;
}

function order(e) {
	e.preventDefault();
	var projectID = window.location.href.substring(window.location.href.indexOf('?'));
	console.log(projectID);
	window.location.href = "./order" + projectID;
}

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset - 0.0001 >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".items").click(goToDetail);
	$("#placeOrder").click(order);
}
