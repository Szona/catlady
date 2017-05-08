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




    var mySVG = document.getElementById("print");
    var svgDoc;

    mySVG.addEventListener("load",function() {

     svgDoc = mySVG.contentDocument;
     alert("SVG contentDocument Loaded!");
     var line = svgDoc.getElementById("draw");
     var pathLength = line.getTotalLength();

     line.style.strokeDasharray = pathLength;
     line.style.strokeDashoffset = pathLength;

     window.addEventListener("scroll", myFunction);

     function myFunction() {
       var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

       var draw = pathLength * scrollpercent;

       // Reverse the drawing (when scrolling upwards)
      line.style.strokeDashoffset = pathLength - draw;
      }




   }, false);










});
