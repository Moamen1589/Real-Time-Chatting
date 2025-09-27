import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";
const socket = io("http://192.168.1.6:3000");
const input = document.getElementById("input");
const button = document.getElementById("button");
const status = document.getElementById("status");
const recordBtn = document.getElementById("recordBtn");
let mediaRecorder;
let chunks = [];

socket.on("show_typing_status", (msg) => {
  status.innerHTML = msg;
})

socket.on("stop_typing_status", (msg) => {
  setTimeout(() => {
    status.innerHTML = msg;
  }, 3000)
})

socket.on("sent message for all users", (data) => {
  const classType = data.id === socket.id ? "sent" : "received";
  addMessage(data.message, classType);
});

function addMessage(msg, type) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  li.textContent = msg;
  li.classList.add(type);
  div.classList.add(type);
  div.appendChild(li);
  document.getElementById("chat").appendChild(div);
  status.innerHTML = "";
  button.style.display = "none";
  recordBtn.style.display="block"
}
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
})
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("message", input.value);
    input.value = "";
  }
})
input.addEventListener("keydown", (e) => {
  socket.emit("typing", "typing...");
})

input.addEventListener("keyup", (e) => {
  socket.emit("stop_typing", "");
})

input.addEventListener("input", (e) => {
  if (input.value.length == 0) {
    button.style.display = "none";
    recordBtn.style.display = "block";
  } else {
    button.style.display = "block";
    recordBtn.style.display = "none";
  }
})


navigator.mediaDevices.getUserMedia({ audio: true })
  .then((stream) => {
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/webm" });
      chunks = [];
      const reader = new FileReader();
      reader.readAsDataURL(blob); 

      reader.onloadend = () => {
        socket.emit("voice", reader.result); 
        const audio = document.createElement("audio");
        const div = document.createElement("div");
        div.classList.add("sent");
        div.appendChild(audio);
        div.style.marginBottom = "10px";
        audio.controls = true;
        audio.src = reader.result;
        document.getElementById("chat").appendChild(div);
      };
    };
  });

recordBtn.addEventListener("mousedown", () => {
  mediaRecorder.start();
  console.log("Recording started...");
});

recordBtn.addEventListener("mouseup", () => {
  mediaRecorder.stop();
  console.log("Recording stopped...");
});

socket.on("voice", (audioData) => {
  const audio = document.createElement("audio");
  const div = document.createElement("div");
  div.classList.add("received");
  div.appendChild(audio);
  div.style.marginBottom = "10px";
  audio.controls = true;
  audio.src = audioData;
  document.getElementById("chat").appendChild(div);
});