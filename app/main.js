document.addEventListener("DOMContentLoaded", function() {

  //preloader
  const load = document.getElementsByClassName("loader-wrapper");
  const body = document.querySelector("body");
  const navBar = document.querySelector(".hamburger_menu");
  const catPrint = document.getElementsByClassName("print_wrapper");

  setTimeout(function() {
    load[0].style.display="none";
    catPrint[0].style.opacity="1";
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
       hamburger.style.top = scrollTop + "px";
       menu.style.top = scrollTopItems + "px";
    }

    //reveal cat prints

    const catPrints = document.getElementsByClassName("print_wrapper");
    console.log(catPrints);

    const prints = document.querySelectorAll(".cat_print");
    console.log(prints);

    var rect = prints[0].getBoundingClientRect();  //nie użyte test

    //console.log(rect);

    window.onscroll = function() {
      console.log("works");
      let scroll = window.pageYOffset;

      for (let i = 0; i < prints.length; i++) {
        if (scroll > i*5) {
          prints[i].style.opacity="1";
          prints[17].style.opacity="0";
        } else if (scroll <= i) {
          prints[i].style.opacity="0";
        }
      }
    }


  //tool tips
  const toolTips = document.querySelectorAll("#tooltip");
  console.log(toolTips);

  const cat = document.querySelectorAll("#cat_tip");

  for (let i = 0; i < cat.length; i++) {
    cat[i].addEventListener("mouseover", function(e){
      for (let i = 0; i < toolTips.length; i++) {
          toolTips[i].style.display="block";
          console.log("fsdf")
      }

    });

    cat[i].addEventListener("mouseout", function(e){
      for (let i = 0; i < toolTips.length; i++) {
          toolTips[i].style.display="none";
          console.log("fhduf");
      }
    });
  }




});
