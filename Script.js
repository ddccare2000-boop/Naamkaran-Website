document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".card").style.opacity = "0";
    document.querySelector(".card").style.transition = "1.5s";
    
    setTimeout(() => {
        document.querySelector(".card").style.opacity = "1";
    }, 300);
});
