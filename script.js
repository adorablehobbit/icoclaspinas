//  July 23, 2025


const icocPhLogo = document.getElementById("icoc-ph-logo-sample");
const headerContainer = document.querySelector(".header-container");
const dropDownItems = document.querySelector(".drop-down-items")
const menuBar = document.getElementById("menu-bar");

document.addEventListener("scroll", event => {

    if(document.documentElement.scrollTop != 0){
        icocPhLogo.classList.add("icoc-ph-logo-sample-shrink");
        headerContainer.classList.add("header-container-shrink");
        dropDownItems.classList.add("drop-down-items-shrink");
        menuBar.classList.add("menu-bar-shrink");
    }else{
        icocPhLogo.classList.remove("icoc-ph-logo-sample-shrink");
        headerContainer.classList.remove("header-container-shrink");
        dropDownItems.classList.remove("drop-down-items-shrink");
        menuBar.classList.remove("menu-bar-shrink");
    }

});


const dropDownMenu = document.getElementById("menu-bar")

dropDownMenu.addEventListener("click", event => {
    dropDownItems.classList.toggle("drop-down-items-hide");
    dropDownItems.classList.toggle("drop-down-items-display");
    console.log(dropDownItems);
});



