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

    //reveal cat prints

    var catPrints = document.getElementsByClassName("print_wrapper");
    console.log(catPrints);


    window.onscroll = function() {
      // drawLines();
    }

    var a = document.getElementById("print");

           // It's important to add an load event listener to the object,
           // as it will load the svg doc asynchronously
           a.addEventListener("load",function(){

               // get the inner DOM of alpha.svg
               var svgDoc = a.contentDocument;
               // get the inner element by id
               var delta = svgDoc.getElementById("draw");
               // add behaviour
               delta.addEventListener("mousedown",function(){
                       alert('hello world!')
               }, false);
           }, false);




});
