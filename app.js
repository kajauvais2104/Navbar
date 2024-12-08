const icon = document.querySelector(".icon");
const ul = document.querySelector(".nav-menu ul");
const bar = document.getElementById("bar");

icon.addEventListener("click", () =>{
    console.log(ul);
    ul.classList.toggle("showMenu");
    
    if (ul.classList.contains("showMenu")) {
        bar.className = "fa-solid fa-xmark";
    } else {
        bar.className = "fa-solid fa-bars";
    }
} )