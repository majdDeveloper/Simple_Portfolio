let button = document.querySelector(".scroll");
window.onscroll = function() {
    if(window.scrollY >= 600){
        button.style.display = "block";
    }else{
        button.style.display = "none"
    }
}
// scroll up 
button.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}