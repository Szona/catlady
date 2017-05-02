document.addEventListener("DOMContentLoaded", function() {

  var load = document.getElementsByClassName("loader-wrapper");
  console.log(load);
  var body = document.querySelector("body");

  setTimeout(function() {
    load[0].style.display="none";
    body.style.overflow="initial"}, 4100);

    //slider on the monitor

    const imgList = document.querySelectorAll("#slider li");
    console.log(imgList);





});
