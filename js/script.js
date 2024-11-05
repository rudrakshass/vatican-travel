const places = document.querySelectorAll(".place");

function addHoverEffect(event) {
    event.currentTarget.style.transform = "scale(1.05)";
    event.currentTarget.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
}

function removeHoverEffect(event) {
    event.currentTarget.style.transform = "scale(1)";
    event.currentTarget.style.boxShadow = "none";
}

places.forEach((place) => {
    place.addEventListener("mouseover", addHoverEffect);
    place.addEventListener("mouseout", removeHoverEffect);
});
