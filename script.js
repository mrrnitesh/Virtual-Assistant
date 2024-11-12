let btn = document.querySelector(".btn");
let para = document.querySelector(".para");
let voice =document.querySelector(".voice");
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good morning Sir")
    }
    else if (hours >= 12 && hours < 16) {
        // else if(hours >= 12  && hours < 4){
        speak("Good Afternoon Sir")
    }
    else {
        speak("Good evening sir")
    }

}
window.addEventListener("load", () => {
    wishMe();
});
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex =event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    para.innerText=transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display= "block"
    

})
function takeCommand(msg) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (msg.toLowerCase().includes("hello") || msg.toLowerCase().includes("hi") || msg.toLowerCase().includes("hey") || msg.toLowerCase().includes("kelly")) {
        speak("Hello sir, how can I help you?");
    } else if (msg.toLowerCase().includes("who are you") || msg.toLowerCase().includes("who r u")) {
        speak("I am a virtual assistant, created by Nitesh.");
    } else if (msg.toLowerCase().includes("open youtube")) {
        speak("Opening YouTube...");
        window.open("https://www.youtube.com/", "_blank");
    } else if (msg.toLowerCase().includes("open google")) {
        speak("Opening Google...");
        window.open("https://www.google.com", "_blank");
    } else if (msg.toLowerCase().includes("open facebook")) {
        speak("Opening Facebook...");
        window.open("https://www.facebook.com", "_blank");
    } else if (msg.toLowerCase().includes("open instagram")) {
        speak("Opening Instagram...");
        window.open("https://www.instagram.com", "_blank");
    } else if (msg.toLowerCase().includes("open calculator")) {
        speak("Opening calculator...");
        window.open("calculator://");
    } else if (msg.toLowerCase().includes("open camera")) {
        speak("Opening camera...");
        window.open("camera://");
    } else if (msg.toLowerCase().includes("time")) {
        let time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"});
        speak(time);
    } else if (msg.toLowerCase().includes("date")) {
        let date = new Date().toLocaleString(undefined, {day: "numeric", month: "short"});
        speak(date);
    } else {
        let finalText = "This is what I found on the internet regarding " + msg.replace(/kelly|hansi/i, "");
        speak(finalText);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(msg.replace(/kelly|hansi/i, ""))}`, "_blank");
    }
}