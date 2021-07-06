const hamBurger = document.querySelector(".ham-burger");
const menu = document.getElementById("menu");
let isOpen = false;
hamBurger.addEventListener("click",()=>{
    if(!isOpen){
        hamBurger.classList.add("open");
        menu.style.top = "0"
        isOpen= true;
    }else{
        hamBurger.classList.remove("open");
        menu.style.top = "-100%"
        isOpen = false;
    }
});
