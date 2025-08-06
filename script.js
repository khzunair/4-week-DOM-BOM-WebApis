const form = document.getElementById("feedbackForm")
const feedbackList = document.getElementById("feedbackList");


try {
    form.addEventListener("submit" , function (e) {
        e.preventDefault();

    const nameInput = document.getElementById("nameInput").value.trim();
    const feedbackInput = document.getElementById("feedbackInput").value.trim();

    const li = document.createElement("li");
    li.innerText = `${nameInput}: ${feedbackInput}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", function () {
        const confirmation = confirm("Are you sure you want to delete this feedback?");
        if (confirmation){
            li.remove();
        } 
    });

    li.appendChild(deleteBtn);
    feedbackList.appendChild(li);

    form.reset();
    alert("Feedback submitted successfully!");

})

} catch (error) {
    console.error("An error occurred:", error);
}