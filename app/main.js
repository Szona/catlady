document.addEventListener("DOMContentLoaded", function() {

  const load = document.getElementsByClassName("loader-wrapper");
  const body = document.querySelector("body");

  setTimeout(function() {
    load[0].style.display="none";
    body.style.overflow="initial"}, 4100);

    //slider on the monitor


  //hamburger menu

  const hamburger = document.querySelector(".hamburger");
  // console.log(hamburger);
  const lines = document.querySelectorAll(".hamburger span");
  // console.log(lines);
  const li = document.querySelectorAll(".menu li");

  hamburger.addEventListener("click", function(e){
  // console.log("click");

  lines[0].classList.toggle("hide");
  lines[1].classList.toggle("left");
  lines[2].classList.toggle("right");

  for (let i = 0; i < li.length; i++) {
    li[i].classList.toggle("visible");
  };


});






});
