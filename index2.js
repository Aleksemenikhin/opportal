let currentAudio = 0;
let currentDiv = 19;
let sequenceNumber = 0;
const myButton = document.getElementById('myButton');


let video1 = document.querySelector("#video1");
let video2 = document.querySelector("#video2");
let video3 = document.querySelector("#video3");
let video4 = document.querySelector("#video4");
let video5 = document.querySelector("#video5");
let video6 = document.querySelector("#video6");

let audio1 = document.querySelector("#audio1");
let audio2 = document.querySelector("#audio2");
let audio3 = new Audio("/img/1.3 аудио.mp3");
let audio4 = new Audio("/img/1.4 аудио.mp3");
let audio5 = new Audio("/img/2.1 аудио.mp3");
let audio6 = document.querySelector("#audio6");
let audio7 = document.querySelector("#audio7");
let audio8 = new Audio("/img/2.4 аудио.mp3");
let audio9 = new Audio("/img/2.5 аудио.mp3");
let audio10 = document.querySelector("#audio10");
let audio11 = new Audio("/img/5.2 аудио.mp3");


let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");
let div4 = document.querySelector("#div4");
let div5 = document.querySelector("#div5");
let div6 = document.querySelector("#div6");
let div7 = document.querySelector("#div7");
let div8 = document.querySelector("#div8");
let div9 = document.querySelector("#div9");
let div10 = document.querySelector("#div10");
let div11 = document.querySelector("#div11");
let div12 = document.querySelector("#div12");
let div13 = document.querySelector("#div13");
let div14 = document.querySelector("#div14");
let div15 = document.querySelector("#div15");
let div16 = document.querySelector("#div16");
let div17 = document.querySelector("#div17");
let div18 = document.querySelector("#div18");
let div19 = document.querySelector("#div19");
let div20 = document.querySelector("#div20");

//это массив с аудио, копируешь, вставляешь и меняешь название файла
//var audios = [
  //new Audio("/img/1 аудио.mp3"),
  //new Audio("/img/1.2 аудио.mp3"),
  //new Audio("/img/1.3 аудио.mp3"),
  //new Audio("/img/1.4 аудио.mp3"),
  //new Audio("/img/2.1 аудио.mp3"),
  //new Audio("/img/2.2 аудио.mp3"),
  //new Audio("/img/2.3 аудио.mp3"),
  //new Audio("/img/2.4 аудио.mp3"),
  //new Audio("/img/2.5 аудио.mp3"),
  //new Audio("/img/5.1 аудио.mp3"),
  //new Audio("/img/5.2 аудио.mp3"),
  
//];
//var divs = document.getElementsByTagName("div");
//console.log(divs)
//function nextAudio () {
  
  //audios[currentAudio].pause();
  //divs[currentDiv].style.display = "none";
  
  
  //currentAudio++;
  //currentDiv++;
  //if (currentAudio >= audios.length) {
   //currentAudio = 0;
  //}
  //if (currentDiv >= divs.length) {
    //currentDiv = 0;
  //}
  
  
  //audios[currentAudio].play();
  
  //divs[currentDiv].style.display = "block";
  
//}



myButton.addEventListener('click', () => {
sequenceNumber++;
console.log(sequenceNumber)
  if (sequenceNumber === 1) {
    video1.play();
    video1.style.display="block"
    audio1.play();
    div1.style.display="block"
  } else if (sequenceNumber === 2) {
    audio1.pause();
    audio2.play();
    div1.style.display="none"
    div2.style.display="block"
  } else if (sequenceNumber === 3) {
    audio2.pause();
    audio3.play();
    div2.style.display="none"
    div3.style.display="block"
  } else if (sequenceNumber === 4) {
    audio3.pause();
    audio4.play();
    div3.style.display="none"
    div4.style.display="block"
  } else if (sequenceNumber === 5) {
    audio4.pause();
    audio5.play();
    div4.style.display="none"
    div5.style.display="block"
    video1.pause();
    video1.style.display="none"
    video2.play();
    video2.style.display="block"
  } else if (sequenceNumber === 6) {
    audio5.pause();
    audio6.play();
    div5.style.display="none"
    div6.style.display="block"
    
  } else if (sequenceNumber === 7) {
    audio6.pause();
    audio7.play();
    div6.style.display="none"
    div7.style.display="block"
    
  } else if (sequenceNumber === 8) {
    audio7.pause();
    audio8.play();
    div7.style.display="none"
    div8.style.display="block"
    
  } else if (sequenceNumber === 9) {
    audio8.pause();
    audio9.play();
    div8.style.display="none"
    div9.style.display="block"
    
  } else if (sequenceNumber === 10) {
    audio9.pause();
    div9.style.display="none"
    div10.style.display="block"
    video2.pause();
    video2.style.display="none"
    video3.play();
    video3.style.display="block"
  } else if (sequenceNumber === 11) {
    div10.style.display="none"
    div11.style.display="block"
    video3.pause();
    video3.style.display="none"
    video4.play();
    video4.style.display="block"
  } else if (sequenceNumber === 12) {
    audio10.play();
    div11.style.display="none"
    div12.style.display="block"
    video4.pause();
    video4.style.display="none"
    video5.play();
    video5.style.display="block"
  } else if (sequenceNumber === 13) {
    audio10.pause();
    audio11.play();
    div12.style.display="none"
    div13.style.display="block"
  } else if (sequenceNumber === 14) {
    audio11.pause();
    div13.style.display="none"
    div14.style.display="block"
  } else if (sequenceNumber === 15) {
    div14.style.display="none"
    div15.style.display="block"
  } else if (sequenceNumber === 16) {
    div15.style.display="none"
    div16.style.display="block"
    video5.pause();
    video5.style.display="none"
    video6.play();
    video6.style.display="block"
  } else if (sequenceNumber === 17) {
    div16.style.display="none"
    div17.style.display="block"
  } else if (sequenceNumber === 18) {
    div17.style.display="none"
    div18.style.display="block"
  } else if (sequenceNumber === 19) {
    div18.style.display="none"
    div19.style.display="block"
  } else if (sequenceNumber === 20) {
    div19.style.display="none"
    div20.style.display="block"
  }
});


// console.log(video)
//video.addEventListener ("load data", function(){
 //   video.play();
//})
