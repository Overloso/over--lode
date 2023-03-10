
const texts = document.querySelector(".texts");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang ='th-TH'

let p = document.createElement("p");

recognition.addEventListener("result", function(event)  {
  const texts = Array.from(event.results)
  .map(result=>result[0])
  .map(result=>result.transcript)
  .join(' ');

  
  console.log(texts);

})
recognition.addEventListener('end',()=>{
  recognition.start();
})
recognition.start();