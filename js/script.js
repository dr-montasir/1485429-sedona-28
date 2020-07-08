var searchPopup = document.querySelector(".search-popup");
var hotelSearch = document.querySelector(".hotel-search");
var search = document.querySelector(".hotel-search-form");
var arrivalDate = document.querySelector("[name=arrival-date]");
var departureDate = document.querySelector("[name=departure-date]");
var adults = document.querySelector("[name=adults]");
var children = document.querySelector("[name=children]");
var isStorageSupport = true;
var adultsStorage = "";
var childrenStorage = "";

var iframe = document.querySelector(".iframe");
var mapImage = document.querySelector(".map-image");
var checkOnline = navigator.onLine;

// Check if the internet connection is online or offline
if (checkOnline == true) {
	iframe.classList.remove("visually-hidden");
	mapImage.classList.add("visually-hidden");
} else {
	iframe.classList.add("visually-hidden");
	mapImage.classList.remove("visually-hidden");
}

try {
  adultsStorage = localStorage.getItem("adults");
  childrenStorage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

hotelSearch.classList.add("switch-off");

searchPopup.addEventListener("click", function (evt) {
	evt.preventDefault();

	if (adultsStorage) {
    	adults.value = adultsStorage;
  	}

  	if (childrenStorage) {
    	children.value = childrenStorage;
  	}

	if (hotelSearch.classList.contains("switch-off")) {
        hotelSearch.classList.remove("switch-off");
        hotelSearch.classList.add("switch-on");

        arrivalDate.focus();
	} else {
		hotelSearch.classList.remove("switch-on");
		hotelSearch.classList.add("switch-off");
		search.classList.remove("modal-error");
	}
});

search.addEventListener("submit", function (evt) {
	if (!arrivalDate.value || !departureDate.value || !adults.value || !children.value) {
		evt.preventDefault();
		search.classList.remove("modal-error");
		search.offsetWidth = search.offsetWidth;
		search.classList.add("modal-error");
	} else if (adults.value > 10 || children.value > 10) {
		evt.preventDefault();
		search.classList.remove("modal-error");
		search.offsetWidth = search.offsetWidth;
		search.classList.add("modal-error");
	} else if (adults.value <= 0) {
		evt.preventDefault();
		search.classList.remove("modal-error");
		search.offsetWidth = search.offsetWidth;
		search.classList.add("modal-error");
	} else if (children.value < 0) {
		evt.preventDefault();
		search.classList.remove("modal-error");
		search.offsetWidth = search.offsetWidth;
		search.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
      		localStorage.setItem("adults", adults.value);
      		localStorage.setItem("children", children.value);
    	}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (hotelSearch.classList.contains("switch-on")) {
			evt.preventDefault();
			hotelSearch.classList.remove("switch-on");
			hotelSearch.classList.add("switch-off");
			search.classList.remove("modal-error");
		}
	}
});