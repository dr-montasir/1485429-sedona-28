var iframe = document.querySelector(".iframe");
var mapImage = document.querySelector(".map-image");

var checkOnline = navigator.onLine;

// Check if the internet connection is online or offline
if (checkOnline == true) {
	iframe.classList.add("switch-on");
	mapImage.classList.add("switch-off");
} else {
	iframe.classList.add("switch-off");
	mapImage.classList.add("switch-on");
}