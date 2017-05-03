document.addEventListener("DOMContentLoaded", function() {

  var load = document.getElementsByClassName("loader-wrapper");
  console.log(load);
  var body = document.querySelector("body");

  setTimeout(function() {
    load[0].style.display="none";
    body.style.overflow="initial"}, 4100);

    //slider on the monitor

  //hamburger menu

  const imgList = document.querySelectorAll("#slider li");
  console.log(imgList);

  const hamburger = document.querySelector(".hamburger");
  console.log(hamburger);
  const lines = document.querySelectorAll(".hamburger span");
  console.log(lines);
  const li = document.querySelectorAll(".menu li");

  hamburger.addEventListener("click", function(e){
  console.log("click");

  lines[0].classList.toggle("hide");
  lines[1].classList.toggle("left");
  lines[2].classList.toggle("right");

  for (var i = 0; i < li.length; i++) {
    li[i].classList.toggle("visible");
  };


});






});
