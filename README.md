# Real-Time Chat App (Node.js + Socket.IO)

A real-time chat application built with **Node.js** and **WebSockets (Socket.IO)**.  
Users can send instant text messages and voice messages.

---

## 🚀 Features
- Real-time messaging between multiple users.
- "Typing..." indicator.
- Send and receive voice messages.
- WhatsApp-like chat UI.
- Works over local network (LAN).

---

## 📦 Requirements
- [Node.js](https://nodejs.org/) v16 or later
- npm (comes with Node.js)

---

## ⚙️ Installation
1. Clone the project:
   ```bash
   git clone https://github.com/your-username/realtime-chat.git
   cd realtime-chat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## ▶️ Run the app
1. Start the server:
   ```bash
   node server.js
   ```
   The server will run at:
   ```
   http://localhost:3000
   ```

2. Open `index.html` in your browser:
   - Local: `http://localhost:3000`
   - On LAN: `http://<your-local-ip>:3000`

---

## 📁 Project Structure
```
realtime-chat/
│
├── server.js        # Server code (Node.js + Express + Socket.IO)
├── public/
│   ├── index.html   # Frontend page
│   ├── style.css    # Styles
│   └── script.js    # Client-side logic
├── package.json
└── README.md
```

---

## 🛠️ Tech Stack
- **Node.js** — backend runtime
- **Express.js** — HTTP server
- **Socket.IO** — real-time communication
- **HTML5 / CSS3 / JavaScript** — frontend
- **MediaRecorder** — voice recording

---

## 💡 Future Improvements
- User authentication (username or phone number).
- Image and video support.
- Save messages to a database (MongoDB, MySQL, etc.).
- Deploy to the cloud (Heroku, Render, VPS).

---

## 📜 License
This project is open-source under the MIT License.
