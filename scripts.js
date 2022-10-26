var myNav = document.getElementById('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 200 ) {
        myNav.classList.add("nav-scrolled");
        myNav.classList.remove("nav-top");
    } 
    else {
        myNav.classList.add("nav-top");
        myNav.classList.remove("nav-scrolled");
    }
};