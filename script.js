let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}
// window.addEventListener("load",()=>{
//     wishMe()
// });
let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();
recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript;
  takeCommand(transcript.toLowerCase());

  console.log(event);
};

btn.addEventListener("click", () => {
  recognition.start();
  btn.style.display = "none";
  voice.style.display = "block";
});

function takeCommand(message) {
  btn.style.display = "flex";
  voice.style.display = "none";
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("namaste")||
    message.includes("sat shri akaal")
  ) {
    speak("hello sir,what can i do for you?");
  } else if (message.includes("who are you")) {
    speak("i am virtual assistant, created by Banta Sir ?");
  } else if (message.includes("open youtube")) {
    speak("opening youtube...");
    window.open("https://youtube.com", "_blank");
  } else if (message.includes("open google")) {
    speak("opening google...");
    window.open("https://google.com", "_blank");
  } else if (message.includes("open instagram")) {
    speak("opening instagram...");
    window.open("https://instagram.com", "_blank");
  } else if (message.includes("open todo app")) {
    speak("opening achiever...");
    window.open("https://to-do-app-banta.vercel.app", "_blank");
  }else if (message.includes("open todo app")) {
    speak("opening achiever...");
    window.open("https://to-do-app-banta.vercel.app", "_blank");
  }else if (message.includes("open simon says game")) {
    speak("opening simon says game...");
    window.open("https://singhbanta.github.io/Simon-Says-Game", "_blank"); 
  }else if (message.includes("open my portfolio")) {
    speak("opening portfolio...");
    window.open("https://bantasingh.vercel.app", "_blank");

  }else if (message.includes("open weather app")) {
    speak("opening weather app...");
    window.open("https://weather-app-ajo.vercel.app", "_blank"); 
  
  }else if (message.includes("open my linkedin")) {
    speak("opening linkdin...");
    window.open("https://www.linkedin.com/in/banta-singh-04366424b", "_blank"); 
    
  }else if (message.includes("github")) {
    speak("opening github...");
    window.open("https://github.com/SinghBanta", "_blank");
  }else {
    let finalText =
      "this is what i found on internet regarding" +
        message.replace("jiva", "") || message.replace("jeeva", "");
    speak(finalText);
    window.open(
      `https://www.google.com/search?q=${
        message.replace("jiva", "") || message.replace("jeeva", "")
      }`,
      "_blank"
    );
  }
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = event;
  // Show the install button
  const installBtn = document.getElementById("install-btn");
  installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    // Hide the install button
    installBtn.style.display = "none";
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});

// let time=document.querySelector("#time");
// function timer(){

// let now=new Date()
// var currentOffset = now.getTimezoneOffset();

// var ISTOffset = 330;   // IST offset UTC +5:30

// var ISTTime = new Date(now.getTime() + (ISTOffset + currentOffset)*60000);

// let hours=ISTTime.getHours();
// let minutes=ISTTime.getMinutes();
// let seconds=ISTTime.getSeconds();

// let ampm;
// if(hours<12 || hours==24){
// ampm="am"
// }else
// ampm="pm";

// time.innerText=(`${hours%12}:${minutes}:${seconds} ${ampm}`);

// }

// window.addEventListener("load",()=>{
//     setInterval(()=>{
//         timer()
//     },1000)

// })
