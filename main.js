const navbar = document.querySelector(".nav");
tombolmenu = document.querySelectorAll(".menu");
overlay = document.querySelector(".tutupfungsi");
close = document.querySelector(".close");
   
tombolmenu.forEach((menuBtn) => {
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("open");
    });
});

overlay.addEventListener("click", () => {
    navbar.classList.remove("open");
});
 
close.addEventListener("click", () => {
    navbar.classList.remove("open");
});