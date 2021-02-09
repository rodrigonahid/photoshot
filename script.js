let toggleNavStatus = false;

let toggleNav = function(){
    let getNavbar = document.querySelector(".navbar");
    let getToggler = document.querySelector(".toggler");
    let getNavBtn = document.querySelector(".nav-btn")

    if(toggleNavStatus === true){
        getNavbar.style.height = "6rem";
        getToggler.style.transform = "translateY(-1000%)";
        getNavBtn.style.transform = "translateY(-1000%)";
        toggleNavStatus = false;
    }else if(toggleNavStatus === false){
        getNavbar.style.height = "40vh";
        getToggler.style.transform = "translateY(0%)";
        getNavBtn.style.transform = "translateY(0%)";
        toggleNavStatus = true;
    }
}