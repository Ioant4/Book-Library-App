const button = document.getElementById("add-book-btn");
const overlay = document.getElementById("search-overlay");
const homebtn = document.getElementById("home-btn");

button.addEventListener("click", function(){
    overlay.style.display = "flex";
});

homebtn.addEventListener("click", function(){
    overlay.style.display = "none";
})
