document.addEventListener("DOMContentLoaded", function() {

  //preloader
  const load = document.getElementsByClassName("loader-wrapper");
  const body = document.querySelector("body");
  const navBar = document.querySelector(".hamburger_menu");
  const catPrint = document.getElementsByClassName("print_wrapper");

  setTimeout(function() {
    load[0].style.display="none";
    catPrint[0].style.display="block";
    navBar.style.display="block";
    body.style.overflow="initial";
  }, 4100);




  //hamburger menu
  const hamburger = document.querySelector(".hamburger_menu");
  const menu = document.querySelector(".menu");
  const li = document.querySelectorAll(".nav_bar .menu li");

  hamburger.addEventListener("click", function(e){
    this.classList.toggle("open");

    for (let i = 0; i < li.length; i++) {
      li[i].classList.toggle("visible");
    }

  });

  //sticky menu

    window.onscroll = function() {
  	   let scrollTop = window.pageYOffset + 50;
       let scrollTopItems = window.pageYOffset + 80;
       hamburger.style.top =scrollTop + "px";
       menu.style.top = scrollTopItems + "px";
    }








});
