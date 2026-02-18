// Conversation lines
let lines = [
  "So I just want old us like we chat, call, meet, go out and enjoy our time together happily without worrying about anything 🥺💗",
  "Are you willing to do that with me? 🥺",
  "Also I want our relationship to be healthy, happy and safe like we stay present-focused, don't think about future too much, don't care about anything else rather that staying together and enjoying our time as long as we can 💗",
  "We'll take things slowly and grow together 🥺",
  "I know you said we can chat n call but not meet frequently because there are many ppl who know you in that area 😔",
  "It's fine, I'm not saying we have to meet daily but we can meet a few times a week. And we'll change the meeting area just to be sure 🥺",
  "I just want old us back together in an actual relationship 💗",
  "We already meet in evenings anyway. I'm not saying we have to meet a lot, maybe once or twice a week whenever we both feel comfortable. And we can adjust places too if needed 🥺",
  "I just want us to be comfortable and enjoy our time 💗",
  "So if you have come till this point in site then I guess you accept all the things and thinking about it 🥺",
  "If you have come to this point, just when you msg me on WhatsApp, start with 'I love you' so I will also know that you got to this point 💗",
  "Thank you for reading 💗🥺",
  "I really love you and care about you 🥺 💗"
];

let index = 0;

// Initial popup → Start conversation
function startConversation() {
  document.getElementById("introPopup").classList.remove("show");
  document.getElementById("convBox").classList.add("show");
  showLine();
}

// Typing animation with pause between lines
function showLine() {
  const text = lines[index];
  const convText = document.getElementById("convText");
  convText.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    if(i < text.length) {
      convText.innerHTML += text[i] === " " ? "&nbsp;" : text[i];
      i++;
    } else {
      clearInterval(typing);
      // Small pause before next line
      setTimeout(() => {
        if(index < lines.length - 1) {
          index++;
          showLine();
        } else {
          showHeartBox();
        }
      }, 1500); // 1.5 sec pause
    }
  }, 50);
}

// Show hearts and cartoon at end
function showHeartBox() {
  document.getElementById("convBox").classList.remove("show");
  const box = document.getElementById("heartBox");
  box.classList.add("show");

  for(let i=0; i<30; i++){
    setTimeout(()=>{
      let heart = document.createElement("div");
      heart.innerText = ["💖","💗","🥺"][Math.floor(Math.random()*3)];
      heart.className = "heart";
      heart.style.left = Math.random()*100 + "vw";
      heart.style.fontSize = (Math.random()*30+20) + "px";
      document.body.appendChild(heart);
      setTimeout(()=>heart.remove(), 4000);
    }, i*150);
  }

  document.getElementById("endMsg").innerText = "I just want us to enjoy our time together 🥺💗";
}