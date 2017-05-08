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
     console.log(line);
   }, false);

    function drawLine (container, line) {
      var lenght = 0;
      var pathLength = line.getTotalLength();
      console.log(pathLength);
      var distanceFromTop = container.offset().top - window.scrollTop();
      var percentDone = 1 - (distanceFromTop / window.height());
      length = percentDone * pathLength;
      line.style.strokeDasharray = [length,pathLength].join(' ');
      console.log("strokeDasharray: "+[length,pathLength].join(' '));
}
    window.onscroll = function() {
      drawLine();
    }


    }




});
