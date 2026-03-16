let slides=document.querySelectorAll(".slide")
let current=0

function startInvitation(){

document.getElementById("startScreen").style.display="none"

document.getElementById("music").play()

showSlide()

createLanterns()

}

function showSlide(){

slides.forEach(s=>s.style.display="none")

slides[current].style.display="flex"

setTimeout(()=>{

current++

if(current<slides.length){

showSlide()

}

},6000)

}

function createLanterns(){

for(let i=0;i<8;i++){

let lantern=document.createElement("img")

lantern.src="lantern.png"

lantern.className="lantern"

lantern.style.left=Math.random()*100+"%"

lantern.style.animationDuration=8+Math.random()*5+"s"

document.getElementById("lanternContainer").appendChild(lantern)

}

}

function shareWhatsApp(){

let url=window.location.href

let message="You are invited to our Nikkah 💍 "+url

window.open("https://wa.me/?text="+encodeURIComponent(message))

}

let countdown=document.getElementById("countdown")

let weddingDate=new Date("May 3, 2026 10:30:00").getTime()

setInterval(()=>{

let now=new Date().getTime()

let diff=weddingDate-now

let days=Math.floor(diff/(1000*60*60*24))
let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60))
let mins=Math.floor((diff%(1000*60*60))/(1000*60))
let sec=Math.floor((diff%(1000*60))/1000)

countdown.innerHTML=days+"d "+hours+"h "+mins+"m "+sec+"s"

},1000)
