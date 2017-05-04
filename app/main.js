document.addEventListener("DOMContentLoaded", function() {

  //preloader
  const load = document.getElementsByClassName("loader-wrapper");
  const body = document.querySelector("body");
  const navBar = document.querySelector(".hamburger_menu");

  setTimeout(function() {
    load[0].style.display="none";
    navBar.style.display="block";
    body.style.overflow="initial";
  }, 4100);




  //hamburger menu
  const hamburger = document.querySelector(".hamburger_menu");
  const lines = document.querySelectorAll(".hamburger_menu span");
  const li = document.querySelectorAll(".menu li");

  hamburger.addEventListener("click", function(e){
    hamburger.classList.toggle("open");
    for (let i = 0; i < li.length; i++) {
      li[i].classList.toggle("visible");
    }
  });

  //sticky menu

    window.onscroll = function() {
      console.log('scrolled');
  	   let scrollTop = window.pageYOffset + 50;
       hamburger.style.top =scrollTop+"px";
    }








});
