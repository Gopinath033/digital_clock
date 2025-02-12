setInterval(()=>{
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let hr = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let ap = hr < 12 ? "AM" : "PM";

hr = hr>12 ? hr-12 : hr;
hr = hr<10 ? `0${hr}` : hr;
min = min<10 ? `0${min}` : min;
sec = sec<10 ? `0${sec}` : sec;

hh.style.strokeDashoffset = 440 - (440*hr)/12;
mm.style.strokeDashoffset = 440 - (440*min)/60;
ss.style.strokeDashoffset = 440 - (440*sec)/60;

hr_dot.style.transform = `rotate(${hr * 30}deg)`;
// 360 / 12 = 30
min_dot.style.transform = `rotate(${min * 6}deg)`;
// 360 / 60 = 6
sec_dot.style.transform = `rotate(${sec * 6}deg)`;
// 360 / 60 = 6

hours.innerHTML = hr + "</br><span>Hours<span>";
minutes.innerHTML = min + "</br><span>Minutes<span>";
seconds.innerHTML = sec + "</br><span>Seconds<span>";
ampm.innerHTML = ap;
})