document.addEventListener("DOMContentLoaded", function() {

  //preloader
  const load = document.getElementsByClassName("loader-wrapper");
  const body = document.querySelector("body");
  const navBar = document.querySelector(".hamburger_menu");
  const menu = document.querySelector(".menu");
  const catPrint = document.getElementsByClassName("print_wrapper");

  setTimeout(function() {
    load[0].style.display="none";
    catPrint[0].style.opacity="1";
    navBar.style.display="block";
    menu.style.opacity="1";
    body.style.overflow="initial";
  }, 4100);




  //hamburger menu

  const nav = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger_menu");
  const menuItems = document.querySelectorAll(".menu_item");

  hamburger.addEventListener('click', toggleNav);
  function toggleNav() {
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
  for (var i = 0, ii = menuItems.length; i < ii; i++) {
    menuItems[i].classList.toggle('active');
    }
  }
    //reveal cat prints

    const catPrints = document.getElementsByClassName("print_wrapper");
    console.log(catPrints);

    const prints = document.querySelectorAll(".cat_print");
    console.log(prints);

    //var rect = prints[0].getBoundingClientRect();  //nie użyte test

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
//sprawdza po dataset tip z tekstem
  const cat = document.querySelectorAll("#cat_tip");

  for (let i = 0; i < cat.length; i++) {
    cat[i].addEventListener("mouseover", function(e){
      for (let i = 0; i < toolTips.length; i++) {
        if (toolTips[i].dataset.number == cat[i].dataset.number) {
          toolTips[i].style.display="block";
        }
      }

    });

    cat[i].addEventListener("mouseout", function(e){
      for (let i = 0; i < toolTips.length; i++) {
          toolTips[i].style.display="none";
      }
    });
  }

  function slider() {
        const next = document.querySelector(".right");
        const prev = document.querySelector(".left");
        const images = document.querySelectorAll(".carousel li");
        let imageCount = 0;

        images[imageCount].classList.add('visible');

        next.addEventListener("click", function(event) {
          images[imageCount].classList.remove('visible');
          imageCount++;
          if (imageCount >= images.length) {
            imageCount = 0;
          }
          images[imageCount].classList.add('visible');
        });

        prev.addEventListener("click", function(event) {
          images[imageCount].classList.remove('visible');
          imageCount--;
          if (imageCount < 0) {
            imageCount = images.length - 1;
          }
          images[imageCount].classList.add('visible');
        });
      }
      slider();


});
