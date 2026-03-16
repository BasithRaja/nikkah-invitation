let slides=document.querySelectorAll(".slide")

let current=0

document.addEventListener("click",nextSlide)

function startInvite(){

document.getElementById("startScreen").style.display="none"

document.getElementById("music").play()

slides[0].style.display="flex"

startCountdown()

}

function nextSlide(){

if(current<slides.length-1){

slides[current].style.display="none"

current++

slides[current].style.display="flex"

}

}

function startCountdown(){

let eventDate=new Date("May 3, 2026 10:30:00").getTime()

setInterval(()=>{

let now=new Date().getTime()

let diff=eventDate-now

let d=Math.floor(diff/(1000*60*60*24))
let h=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
let m=Math.floor((diff%(1000*60*60))/(1000*60))
let s=Math.floor((diff%(1000*60))/1000)

document.getElementById("countdown").innerHTML=
d+"d "+h+"h "+m+"m "+s+"s"

},1000)

}
