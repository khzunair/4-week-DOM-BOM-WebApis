# 4-Week DOM, BOM & Web APIs Plan

## 📋 Overview

This repo series covers a **4-week intensive journey** through **DOM (Document Object Model)**, **BOM (Browser Object Model)**, and **Web APIs**. Each week builds upon the previous, creating a complete understanding of frontend web development fundamentals and advanced browser capabilities.

**Current Focus**: This repository now contains **till Week 3** implementations, demonstrating BOM manipulation, Window objects, Web APIs, storage solutions, and network requests through interactive applications.

## 📅 Complete 4-Week Curriculum

### **📅 Week 1: Introduction to DOM (Document Object Model)** ✅ 

📌 **Concepts Covered:**
- Understanding the DOM tree (Nodes & Elements)
- Selecting Elements (`getElementById`, `querySelectorAll`)
- Modifying Elements (`innerText`, `innerHTML`, `style`)
- Handling Events (`addEventListener`, Event Delegation)
- Creating & Removing Elements (`createElement`, `appendChild`, `removeChild`)

💻 **Practice Tasks:**
1. **To-Do List App** – Add, remove, and mark tasks as completed
2. **Dynamic Theme Switcher** – Toggle between light and dark mode

📖 **Resources:**
- [MDN DOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [JavaScript.info – DOM](https://javascript.info/dom-nodes)

---

### **📅 Week 2: BOM (Browser Object Model) & Window Manipulation** 🎯 **(Current Week)**

📌 **Concepts Covered:**
- Window Object (`window.alert`, `window.confirm`, `window.prompt`)
- `navigator` API (Detect browser & OS)
- `location` & `history` APIs (URL manipulation & navigation)
- `setTimeout` and `setInterval` (Delays & Repeating actions)
- `screen` API (Screen width, height, and resolution)

💻 **Practice Tasks:**
1. **Interactive Feedback Form** – Comprehensive BOM implementation with user interaction
2. **Browser Environment Detection** – Using `navigator` and window methods

📖 **Resources:**
- [MDN BOM Guide](https://developer.mozilla.org/en-US/docs/Web/API/Window)
- [JavaScript.info – BOM](https://javascript.info/browser-environment)

---

### **📅 Week 3: Web APIs (Storage, Fetching Data & Network Requests)** ✅ **(Completed)**

📌 **Concepts Covered:**
- **LocalStorage & SessionStorage** - Storing user data persistently and temporarily
- **Fetch API** - Modern way to make HTTP requests (`fetch()`, handling JSON responses)
- **XMLHttpRequest** - Legacy AJAX method for network requests
- **Promises & Async/Await** - Making API calls easier and more readable
- **WebSockets** - Real-time bidirectional communication

💻 **Practice Tasks:**
1. **Live User Dashboard** – Comprehensive Web APIs implementation
2. **Storage Comparison App** - LocalStorage vs SessionStorage demonstration
3. **Random Joke Fetcher** - API integration using both Fetch and XHR
4. **WebSocket Messenger** - Real-time communication example

📖 **Resources:**
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info – Fetch](https://javascript.info/fetch)
- [MDN WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

---

### **📅 Week 4: Advanced Web APIs & Real-World Usage** 🔮 **(Coming Soon)**

📌 **Concepts to Cover:**
- **Geolocation API** – Access user's location
- **Clipboard API** – Copy & paste programmatically  
- **Notifications API** – Show browser notifications
- **Drag & Drop API** – Implement file uploads
- **Intersection Observer API** – Detect element visibility (Lazy Loading)
- **Mutation Observer API** – Observe DOM changes

💻 **Upcoming Projects:**
1. **Geolocation Map** – Show user's location using the Geolocation API
2. **Lazy Loading Images** – Use Intersection Observer API for efficient loading

📖 **Resources:**
- [MDN Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
- [MDN Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API)

## 🎯 Learning Objectives (Current Implementation)

This repository demonstrates concepts from **Week 2** and **Week 3**, covering:

### Week 2: BOM (Browser Object Model) Implementation

### Window Object Methods
- `window.alert()` - Display alert messages
- `window.confirm()` - Show confirmation dialogs  
- `window.prompt()` - Get user input through prompts

### Navigator Object
- `navigator.userAgent` - Browser information
- `navigator.appName` - Application name
- `navigator.appVersion` - Application version
- `navigator.platform` - Operating system platform
- `navigator.onLine` - Network connectivity status

### Location Object & Navigation
- `window.location.href` - Full URL manipulation
- `window.location.reload()` - Page reloading
- `window.location.assign()` - URL navigation
- `window.history.back()` - Browser history navigation
- `window.history.forward()` - Forward navigation
- `window.history.pushState()` - History API manipulation

### Timing Functions
- `setTimeout()` - Delayed execution
- `setInterval()` - Repeated execution
- `clearInterval()` - Stop intervals

### Screen Object
- `screen.width` & `screen.height` - Screen dimensions
- `screen.colorDepth` - Color information
- `screen.pixelDepth` - Pixel depth details

### Week 3: Web APIs Implementation

### Storage APIs
- `localStorage.setItem()` & `localStorage.getItem()` - Persistent local storage
- `sessionStorage.setItem()` & `sessionStorage.getItem()` - Session-based storage
- Storage event handling and data persistence

### Network APIs
- **Fetch API** - Modern HTTP requests with promises
- **XMLHttpRequest** - Traditional AJAX implementation
- **JSON parsing** - `response.json()` and `JSON.parse()`
- **Error handling** - Try-catch blocks and response validation

### WebSocket API
- **Real-time Communication** - Bidirectional client-server messaging
- **WebSocket Events** - `open`, `message`, `close`, `error` event handling
- **Message Broadcasting** - Sending and receiving live data

## 🚀 Features

### Week 2: Interactive Feedback Form
- **Real-time form validation** with required fields
- **Dynamic feedback display** using DOM manipulation
- **Delete functionality** with confirmation dialogs
- **LocalStorage integration** for persistent feedback storage
- **Responsive design** that works on all devices
- **Smooth animations** and modern UI/UX

### Week 3: Live User Dashboard
- **Storage Comparison** - Side-by-side LocalStorage vs SessionStorage demonstration
- **API Integration** - Chuck Norris jokes fetched from external API
- **Dual Request Methods** - Both modern Fetch API and legacy XMLHttpRequest
- **Real-time WebSocket** - Live messaging with echo server
- **Error Handling** - Comprehensive try-catch blocks and user feedback
- **Clean Modern UI** - Responsive design with intuitive user experience

### Technical Implementation
- **Pure JavaScript (Vanilla JS)** - No frameworks or libraries
- **Modern Web APIs** - Storage, Fetch, WebSockets implementation
- **CSS3 with modern features** - Grid, Flexbox, Animations
- **HTML5 semantic structure** - Accessible and semantic markup
- **Event handling and DOM manipulation** - Interactive user interfaces
- **Error handling** - Comprehensive try-catch blocks
- **Asynchronous Programming** - Promises, async/await, and callbacks

## 📁 Project Structure

```
DOM-BOM-WEB-APIs/
├── index.html              # Week 2: Main feedback form HTML
├── script.js               # Week 2: DOM manipulation & form handling
├── styles.css              # Week 2: Modern CSS styling
├── week-2 snippets/
│   └── week2.script.js     # Week 2: BOM/Window object examples
├── week-3 example/
│   ├── index.html          # Week 3: Web APIs dashboard HTML
│   ├── script.js           # Week 3: Storage, Fetch, WebSocket implementation
│   └── style.css           # Week 3: Dashboard styling
└── README.md               # Project documentation
```

## 🔧 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Basic understanding of HTML, CSS, and JavaScript

### Clone & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/khzunair/Week-2-DOM-BOM-Window-Manipulation.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd Week-2-DOM-BOM-Window-Manipulation
   ```

3. **Open in browser:**
   - Open `index.html` directly in your browser, or
   - Use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     # Right-click on index.html → "Open with Live Server"
     ```

4. **Access the application:**
   - Direct file: `file:///path/to/index.html`
   - Local server: `http://localhost:8000`

## 🎮 How to Use

### Week 2: Feedback Form Application

1. **Fill out the feedback form:**
   - Enter your name in the first field
   - Type your feedback in the textarea
   - Click "Submit" to add your feedback

2. **Interact with feedback:**
   - View all submitted feedback in the list below
   - All feedback is automatically saved to LocalStorage
   - Click the ❌ button to delete any feedback item
   - Confirm deletion in the popup dialog

3. **Explore BOM examples:**
   - Open browser console (F12)
   - Check `week-2 snippets/week2.script.js` for window object demonstrations
   - See alerts, prompts, and timing functions in action

### Week 3: Web APIs Dashboard

1. **Test Storage APIs:**
   - Navigate to `week-3 example/index.html`
   - Enter your name in the input field
   - Click "Save to LocalStorage" or "Save to SessionStorage"
   - Observe the differences in data persistence

2. **Fetch API Demonstrations:**
   - Click "Get Joke (Fetch API)" to see modern HTTP requests
   - Click "Get Joke (XHR)" to compare with legacy XMLHttpRequest
   - Both buttons fetch random jokes from Chuck Norris API

3. **WebSocket Communication:**
   - Observe real-time messages appearing in the WebSocket section
   - Messages are sent automatically on connection
   - See live bidirectional communication in action

## 📚 Learning Resources

### Primary Roadmap
🎯 **Follow our comprehensive JavaScript learning path:**
[JavaScript Frontend/Backend Development Roadmaps](https://www.notion.so/JavaScript-FrontEnd-BackEnd-development-Roadmaps-1c9a203779d98069a43df62516355564?pvs=18)

### Week 2 Study Guide
📖 **Detailed guide for this week's concepts:**
[Week 2: BOM (Browser Object Model) & Window Manipulation](https://mastering-the-browser-d3eadl0.gamma.site/#bom-basics)

## 🛠️ Technologies Used

- **HTML5** - Semantic structure and forms
- **CSS3** - Modern styling, animations, and responsive design
- **JavaScript (ES6+)** - DOM/BOM manipulation and event handling
- **Browser APIs** - Window, Navigator, Location, Screen objects

## 🎨 Key Features Demonstrated

### Week 2: DOM Manipulation & BOM
```javascript
// Creating and appending elements
const li = document.createElement("li");
li.innerText = `${nameInput}: ${feedbackInput}`;
feedbackList.appendChild(li);

// LocalStorage integration
let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
```

### Event Handling
```javascript
// Form submission with validation
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Handle form data with comprehensive validation
});
```

### Browser Object Model
```javascript
// Window methods
window.alert("Welcome!");
window.confirm("Continue?");
window.prompt("Enter name:");

// Navigation
window.location.reload();
window.history.back();
```

### Week 3: Web APIs Implementation

### Storage APIs
```javascript
// LocalStorage - Persistent storage
localStorage.setItem("username", name);
const local = localStorage.getItem("username");

// SessionStorage - Session-based storage
sessionStorage.setItem("username", name);
const session = sessionStorage.getItem("username");
```

### Modern Fetch API
```javascript
// Async/await with error handling
const res = await fetch("https://api.chucknorris.io/jokes/random");
const data = await res.json();
document.getElementById("jokeDisplay").textContent = data.value;
```

### Legacy XMLHttpRequest
```javascript
// Traditional AJAX implementation
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.chucknorris.io/jokes/random");
xhr.onload = function () {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        document.getElementById("jokeDisplay").textContent = data.value;
    }
};
xhr.send();
```

### WebSocket Real-time Communication
```javascript
// WebSocket connection and event handling
const socket = new WebSocket("wss://ws.postman-echo.com/raw");

socket.addEventListener("open", () => {
    socket.send("Hello from Zunair's Class!");
});

socket.addEventListener("message", (event) => {
    const li = document.createElement("li");
    li.textContent = `Server: ${event.data}`;
    document.getElementById("messages").appendChild(li);
});
```

## 🚀 Next Steps in the Curriculum

After mastering **Week 2: BOM & Window Manipulation** and **Week 3: Web APIs & Network Programming**, you'll progress to:

### ** Week 4: Advanced Web APIs**
- **Geolocation API** - Location-based features
- **Clipboard API** - Copy/paste functionality
- **Intersection Observer** - Lazy loading implementation
- **Mutation Observer** - DOM change detection

### **🎯 Beyond the Course**
- **React Fundamentals** - Component-based architecture
- **Backend Development** - Node.js and Express
- **Full-Stack Projects** - Complete web applications

## 🤝 Contributing

This is a learning project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Create a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎓 About This 4-Week Masterclass

This project is part of a comprehensive **4-week DOM, BOM & Web APIs course** covering:
- **Week 1**: DOM Fundamentals & Element Manipulation ✅
- **Week 2**: BOM & Window Object Manipulation ✅
- **Week 3**: Web APIs, Storage & Network Requests ✅
- **Week 4**: Advanced Web APIs & Real-World Implementation �

### 🎯 Course Progression
Each week builds comprehensive understanding:
1. **Foundation** → DOM mastery and element manipulation ✅
2. **Browser APIs** → Window, Navigator, Location objects ✅
3. **Data & Network** → Storage, Fetch API, Async operations ✅
4. **Advanced** → Geolocation, Clipboard, Intersection Observer 🔜

---

### 👨‍💻 Developer Information
**Course**: Hayatian Computing Alumni - Web Development  
**Current Implementation**: Week 2 & 3 (of 4)  
**Focus**: DOM/BOM Manipulation, Window Objects, Web APIs & Network Programming  
**Repository**: Complete Week 2-3 Implementation

**Happy Learning! 🚀**
