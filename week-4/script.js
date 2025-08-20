document.getElementById("getLocation").addEventListener("click", () => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("Current Position:", position);
      document.getElementById("locationOutput").innerText =
        `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    })
  }
})


document.getElementById("copyBtn").addEventListener('click', ()=>{
  const text = document.getElementById("copyText").value;
  navigator.clipboard.writeText(text)
  .then(()=>{
    document.getElementById("copyStatus").innerText= "Copied"
  })
})


// Notification API
document.getElementById("notifyBtn").addEventListener('click', ()=>{
  Notification.permission === 'granted'
  ? new Notification("Your Daily Report", {
    body: "Here is your daily report for today.",
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
  })
  : Notification.requestPermission().then(permission => {
      if(permission === 'granted'){
        new Notification("Your Daily Report", {
          body: "Here is your daily report for today.",
          icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png"
        })
      }
})
})


//  Drag  Drop
let dropZone = document.getElementById("dropZone");



dropZone.addEventListener("dragover", function(event){
  event.preventDefault();
  dropZone.style.backgroundColor = "green"
})

dropZone.addEventListener("dragleave", function(event){
  event.preventDefault();
  dropZone.style.backgroundColor = ""
}
)


dropZone.addEventListener("drop", function(event){
  event.preventDefault();
  dropZone.style.backgroundColor = ""

  let files = event.dataTransfer.files;

  for(let file of files){
    let li = document.createElement("li");
    li.textContent = `File Name: ${file.name}, Size: ${file.size} bytes`;
    document.getElementById("fileList").appendChild(li);
  }
})



// new IntersectionObserver(callback, options);
// observer.observe(element);

// Lazy Load: Intersection MutationObserver
let images = document.querySelectorAll(".lazy");

let observer = new IntersectionObserver(function(entries){
  for(let entry of entries){
    if(entry.isIntersecting){
      entry.target.src  = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  }
})

for (let img of images){
  observer.observe(img);
}









const observeList = document.getElementById("observeList");
const addItem = document.getElementById("addItem");

const mo = new MutationObserver(mutations => {
  console.log("DOM Changed:", mutations);
});

mo.observe(observeList, { childList: true });

addItem.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Item " + (observeList.children.length + 1);
  observeList.appendChild(li);
})