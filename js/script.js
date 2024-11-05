const button = document.querySelectorAll(".place");

button.addEventListner("mousover",()=>{
    button.style.backgroundColor = "blue"; 
    button.style.color = "white";
    button.style.transform = "scale(1.1)";
})