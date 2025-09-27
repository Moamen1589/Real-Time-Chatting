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

1. Start the server locally:
   ```bash
   node server.js
   ```
   The server will run at:
   ```
   http://localhost:3000
   ```

2. **Optional: Make the backend accessible online (using ngrok)**  
   - Install ngrok if you don’t have it:
     ```bash
     npm install -g ngrok
     ```
   - Start a secure tunnel for port 3000:
     ```bash
     ngrok http 3000
     ```
   - ngrok will give you a HTTPS URL, for example:
     ```
     https://abcd1234.ngrok-free.app
     ```
   - Update `script.js` (or your frontend code) to use the ngrok URL instead of `localhost`:
     ```js
     const socket = io("https://abcd1234.ngrok-free.app");
     ```
   - Now any device with the ngrok link can connect to your backend and use the chat.

3. Open the frontend page:
   - Local: `http://localhost:3000` (if testing locally)
   - Online via ngrok: use the URL you got from ngrok in your frontend code

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

## 📝 License
This project is open-source under the MIT License.

