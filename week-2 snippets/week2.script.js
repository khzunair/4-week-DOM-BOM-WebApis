// Example: Using window.alert()
window.alert("Welcome to our website!");

// Example: Using window.confirm()
let userConfirmed = window.confirm("Do you want to proceed?");
if (userConfirmed) {
 console.log("User confirmed.");
} else {
 console.log("User cancelled.");
}

// Example: Using window.prompt()
let userName = window.prompt("Please enter your name:", "Guest");
if (userName !== null && userName !== "") {
 console.log("Hello, " + userName + "!");
} else {
 console.log("No name entered.");
}



navigator.userAgent
navigator.appName
navigator.appVersion
navigator.platform
navigator.onLine

//  Full URL
window.location.href
//  Reloads the page
window.location.reload()
// : Navigates to a new URL
window.location.assign('new-url')
// History API
window.history.back()
// : Navigates back
window.history.forward()
// : Navigates forward
window.history.pushState()
// : Adds a new history entry without reloading (require: Arguments) 



// Example: Delayed message
setTimeout(() => {
 console.log("This message appears after 3 seconds.");
}, 3000);

// Example: Repeated counter
let count = 0;
const intervalId = setInterval(() => {
 count++;
 console.log("Count:", count);
 if (count >= 5) {
 clearInterval(intervalId); // Stop the interval after 5 counts
 console.log("Interval stopped.");
 }
}, 1000);


// Screen properties
screen.width
// Screen Height
screen.height

screen.colorDepth
// : Number of bits used to display one color. Higher values mean more colors
screen.pixelDepth
// : Similar to color depth, but specifically for device pixels.