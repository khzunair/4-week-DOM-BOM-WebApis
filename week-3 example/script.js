// LocalStorage 
document.getElementById("saveLocal").addEventListener("click", () => {
  const name = document.getElementById("username").value;
  localStorage.setItem("username", name);
  showSavedData();
});

document.getElementById("saveSession").addEventListener("click", () => {
  const name = document.getElementById("username").value;
  sessionStorage.setItem("username", name);
  showSavedData();
});

function showSavedData() {
  const local = localStorage.getItem("username");
  const session = sessionStorage.getItem("username");
  document.getElementById("savedData").textContent =
    `Local: ${local || 'None'} | Session: ${session || 'None'}`;
}

showSavedData();

//   Fetch API  
document.getElementById("fetchJoke").addEventListener("click", async () => {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    document.getElementById("jokeDisplay").textContent = data.value;
  } catch (err) {
    console.error("Fetch Error:", err);
  }
});

//   XMLHttpRequest  
document.getElementById("xhrJoke").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      document.getElementById("jokeDisplay").textContent = data.value;
    }
  };
  xhr.send();
});

//   WebSockets  
const socket = new WebSocket("wss://ws.postman-echo.com/raw");

socket.addEventListener("open", () => {
  socket.send("Hello from Zunair's Class!");
});

socket.addEventListener("message", (event) => {
  const li = document.createElement("li");
  li.textContent = `Server: ${event.data}`;
  document.getElementById("messages").appendChild(li);
});
