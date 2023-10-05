"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body'); //const layer1 = document.querySelector('.layer1');

  var layer2 = document.querySelector('.layer2');
  var layer3 = document.querySelector('.layer3');
  body.addEventListener('mousemove', function (e) {
    var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    var yAxis = (window.innerHeight / 2 - e.pageY) / 25; //layer1.style.transform = `translate(${xAxis}px, ${yAxis}px)`;

    layer2.style.transform = "translate(".concat(xAxis * 2, "px, ").concat(yAxis * 2, "px)");
    layer3.style.transform = "translate(".concat(xAxis * 3, "px, ").concat(yAxis * 3, "px)");
  });
});