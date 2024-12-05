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

  // console.log(event);
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
    message.includes("namaste") ||
    message.includes("sat shri akaal")
  ) {
    speak("hello sir,what can i do for you?");
  } else if (message.includes("who are you")) {
    speak("i am virtual assistant, created by Banta Sir ?");
  } else if (message.includes("ki hal hai tere")) {
    speak("kaint a sir tusi sunao tuhade ki haal ne...");
  } else if (message.includes("ki")) {
    speak("bas roti pani sahi chali janda tuhade karke...");
  } else if (message.includes("sukhi sandhi")) {
    speak("ha sir bas tuhadi kirpa bni rhe...");
  } else if (message.includes("good morning")) {
    let hours = new Date().getHours();
    if (hours >= 0 && hours < 12) {
      speak("Good Morning Sir");
    } else {
      speak("It's not morning right now, Sir");
    }
  } else if (message.includes("good afternoon")) {
    let hours = new Date().getHours();
    if (hours >= 12 && hours < 16) {
      speak("Good Afternoon Sir");
    } else {
      speak("It's not afternoon right now, Sir");
    }
  } else if (message.includes("good night")) {
    let hours = new Date().getHours();
    if (hours >= 20 || hours < 6) {
      speak("Good Night Sir");
    } else {
      speak("It's not night right now, Sir");
    }
  } else if (message.includes("bye")) {
    speak("goodbye sir, have a nice day");
    window.close();
  } else if (message.includes("youtube")) {
    speak("opening youtube...");
    window.open("https://youtube.com", "_blank");
  } else if (message.includes("google")) {
    speak("opening google...");
    window.open("https://google.com", "_blank");
  } else if (message.includes("instagram")) {
    speak("opening instagram...");
    window.open("https://instagram.com", "_blank");
  } else if (message.includes("todo app")) {
    speak("opening achiever...");
    window.open("https://to-do-app-banta.vercel.app", "_blank");
  } else if (message.includes("simon says")) {
    speak("opening simon says game...");
    window.open("https://singhbanta.github.io/Simon-Says-Game", "_blank");
  } else if (message.includes("portfolio")) {
    speak("opening portfolio...");
    window.open("https://bantasingh.vercel.app", "_blank");
  } else if (message.includes("weather app")) {
    speak("opening weather app...");
    window.open("https://weather-app-ajo.vercel.app", "_blank");
  } else if (message.includes("linkedin")) {
    speak("opening linkdin...");
    window.open("https://www.linkedin.com/in/banta-singh-04366424b", "_blank");
  } else if (message.includes("whatsapp")) {
    speak("opening whatsapp...");
    window.open("https://web.whatsapp.com/", "_blank");
  } else if (message.includes("github")) {
    speak("opening github...");
    window.open("https://github.com/SinghBanta", "_blank");
  } else if (message.includes("image generator")) {
    speak("opening image generator...");
    window.open("https://image-generator-banta.vercel.app/");
  } else if (message.includes("achiever")) {
    speak("opening achiever...");
  window.open("https://to-do-app-banta.vercel.app/", "_blank");
    } else if (message.includes("fit club")) {
    speak("opening A I powered fitness website...");
  window.open("https://fit-club-banta.vercel.app/","_blank");


    //songs
  } else if (message.includes("brown rang")) {
    speak("playing brown rang...");
    window.open("https://www.youtube.com/watch?v=eizmCZv3aKI", "_blank");
  } else if (message.includes("honey sing")) {
    speak("playing honey singh...");
    window.open("https://www.youtube.com/watch?v=pz6Az06g9-I", "_blank");
  } else if (message.includes("karan aujla")) {
    speak("playing karan aujla...");
    window.open("https://www.youtube.com/watch?v=CgVEDWgEXU0", "_blank");
  } else if (message.includes("begum")) {
    speak("playing begum by mankirat aulakh...");
    window.open("https://www.youtube.com/watch?v=9-fIftd_ISQ", "_blank");
  } else if (message.includes("khauf")) {
    speak("playing khauf by mankirat aulakh...");
    window.open("https://www.youtube.com/watch?v=Zv5zPUtw3Oc", "_blank");
  } else if (message.includes("khan bhaini")) {
    speak("playing khain bhaini...");
    window.open("https://www.youtube.com/watch?v=9Llyump7J0Y", "_blank");
  } else if (message.includes("trump")) {
    speak("playing trump by cheema y...");
    window.open("https://www.youtube.com/watch?v=nSstUsPpRUk", "_blank");
  } else if (message.includes("hair")) {
    speak("playing hair by karan aujla...");
    window.open("https://www.youtube.com/watch?v=z1VxjMem2hc", "_blank");
  } else if (message.includes("on top")) {
    speak("playing on top by Karan aujla...");
    window.open("https://www.youtube.com/watch?v=aFWDOFg7X2A", "_blank");
  } else if (message.includes("difference")) {
    speak("playing difference by amrit maan...");
    window.open("https://www.youtube.com/watch?v=vg0ZfeszGrU", "_blank");
  } else if (message.includes("what we do")) {
    speak("playing what we do...");
    window.open("https://www.youtube.com/watch?v=IdML5RUzx34", "_blank");
  } else if (message.includes("karan randhawa")) {
    speak("playing shehar pattiya...");
    window.open("https://www.youtube.com/watch?v=R1NUCucJkrc", "_blank");
  
 
  
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

//Showing current time
let time = document.querySelector("#time");
function timer() {
  let now = new Date();
  var currentOffset = now.getTimezoneOffset();

  var ISTOffset = 330; // IST offset UTC +5:30

  var ISTTime = new Date(now.getTime() + (ISTOffset + currentOffset) * 60000);

  let hours = ISTTime.getHours();
  let minutes = ISTTime.getMinutes();
  let seconds = ISTTime.getSeconds();

  let ampm;
  if (hours < 12 || hours == 24) {
    ampm = "AM";
  } else ampm = "PM";

  time.innerText = `${hours % 12}:${minutes}:${seconds} ${ampm}`;
}

window.addEventListener("load", () => {
  setInterval(() => {
    timer();
  }, 1000);
});
