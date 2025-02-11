setInterval(()=>{
    let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hr = new Date().getHours();
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let ap = hr < 12 ? "AM" : "PM";

hr = hr>12 ? hr-12 : hr;
hr = hr<10 ? `0${hr}` : hr;
min = min<10 ? `0${min}` : min;
sec = sec<10 ? `0${sec}` : sec;

hours.innerHTML = hr;
minutes.innerHTML = min;
seconds.innerHTML = sec;
ampm.innerHTML = ap;
})