let clock = document.getElementById("clock");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// 6deg => 1sec
// 6deg => 1min
// 30deg => 1hour

function getTime() {
  let d = new Date();

  //   console.log(d.getSeconds() * 6);
  seconds.style.transform = "rotate(" + d.getSeconds() * 6 + "deg)";
  minutes.style.transform = "rotate(" + d.getMinutes() * 6 + "deg)";
  hours.style.transform = "rotate(" + d.getHours() * 30 + "deg)";
}

setInterval(getTime, 10);
