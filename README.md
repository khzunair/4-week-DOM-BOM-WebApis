# 4-Week DOM, BOM & Web APIs Plan

## 📋 Overview

This repo series covers a **4-week intensive journey** through **DOM (Document Object Model)**, **BOM (Browser Object Model)**, and **Web APIs**. Each week builds upon the previous, creating a complete understanding of frontend web development fundamentals and advanced browser capabilities.

**Current Focus**: This repository contains the **till Week 2** implementation, demonstrating BOM manipulation and Window objects through an interactive feedback form application.

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

### **📅 Week 3: Web APIs (Storage, Fetching Data & Network Requests)** 🔜 **(Coming Soon)**

📌 **Concepts to Cover:**
- LocalStorage & SessionStorage (Storing user data)
- Fetch API (`fetch()`, handling JSON responses)
- XMLHttpRequest (Legacy AJAX method)
- Promises & Async/Await (Making API calls easier)
- WebSockets (Real-time communication)

💻 **Upcoming Projects:**
1. **Weather App** – Fetch live weather data from an API
2. **Notes App** – Store user notes using LocalStorage

📖 **Resources:**
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info – Fetch](https://javascript.info/fetch)

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

## 🎯 Week 2 Learning Objectives (Current Implementation)

This **Week 2** project specifically demonstrates the following BOM concepts:

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

## 🚀 Features

### Interactive Feedback Form
- **Real-time form validation** with required fields
- **Dynamic feedback display** using DOM manipulation
- **Delete functionality** with confirmation dialogs
- **Responsive design** that works on all devices
- **Smooth animations** and modern UI/UX

### Technical Implementation
- Pure JavaScript (Vanilla JS) - No frameworks
- CSS3 with modern features (Grid, Flexbox, Animations)
- HTML5 semantic structure
- Event handling and DOM manipulation
- Error handling with try-catch blocks

## 📁 Project Structure

```
week1/
├── index.html          # Main HTML structure
├── script.js           # DOM manipulation & form handling
├── week2.script.js     # BOM/Window object examples
├── styles.css          # Modern CSS styling
└── README.md           # Project documentation
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
   cd Week-2-DOM-BOM-Window-Manipulation/week1
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

1. **Fill out the feedback form:**
   - Enter your name in the first field
   - Type your feedback in the textarea
   - Click "Submit" to add your feedback

2. **Interact with feedback:**
   - View all submitted feedback in the list below
   - Click the ❌ button to delete any feedback item
   - Confirm deletion in the popup dialog

3. **Explore BOM examples:**
   - Open browser console (F12)
   - Check `week2.script.js` for window object demonstrations
   - See alerts, prompts, and timing functions in action

## 📚 Learning Resources

### Primary Roadmap
🎯 **Follow our comprehensive JavaScript learning path:**
[JavaScript Frontend/Backend Development Roadmaps](https://www.notion.so/JavaScript-FrontEnd-BackEnd-development-Roadmaps-1c9a203779d98069a43df62516355564?pvs=18)

### Week 2 Study Guide
📖 **Detailed guide for this week's concepts:**
[Week 2: Function Calling & BOM/DOM](https://clumsy-humor-894.notion.site/5-Function-Calling-13554fed51a380999bf1d7d0bf46ec7e)

## 🛠️ Technologies Used

- **HTML5** - Semantic structure and forms
- **CSS3** - Modern styling, animations, and responsive design
- **JavaScript (ES6+)** - DOM/BOM manipulation and event handling
- **Browser APIs** - Window, Navigator, Location, Screen objects

## 🎨 Key Features Demonstrated

### DOM Manipulation
```javascript
// Creating and appending elements
const li = document.createElement("li");
li.innerText = `${nameInput}: ${feedbackInput}`;
feedbackList.appendChild(li);
```

### Event Handling
```javascript
// Form submission with validation
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Handle form data
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

## 🚀 Next Steps in the Curriculum

After mastering this **Week 2: BOM & Window Manipulation**, you'll progress to:

### **🔜 Week 3: Web APIs & Network Programming**
- **LocalStorage & SessionStorage** - Persistent data storage
- **Fetch API & Async/Await** - Modern API communication
- **Weather App Project** - Real API integration
- **Notes App Project** - LocalStorage implementation

### **🔮 Week 4: Advanced Web APIs**
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
- **Week 2**: BOM & Window Object Manipulation *(Current - This Repository)* 🎯
- **Week 3**: Web APIs, Storage & Network Requests 🔜
- **Week 4**: Advanced Web APIs & Real-World Implementation 🔮

### 🎯 Course Progression
Each week builds comprehensive understanding:
1. **Foundation** → DOM mastery and element manipulation
2. **Browser APIs** → Window, Navigator, Location objects *(Current)*
3. **Data & Network** → Storage, Fetch API, Async operations
4. **Advanced** → Geolocation, Clipboard, Intersection Observer

---

### 👨‍💻 Developer Information
**Course**: Hayatian Computing Alumni - Web Development  
**Current Week**: 2 of 4  
**Focus**: DOM/BOM Manipulation & Window Objects  
**Repository**: Week 2 Implementation

**Happy Learning! 🚀**
