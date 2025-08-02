// feedbackForm
// nameInput
// feedbackInput
// feedbackList

const form = document.getElementById("feedbackForm")
const feedbackList = document.getElementById("feedbackList");


try {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

    const nameInput = document.getElementById("nameInput").value.trim();
    const feedbackInput = document.getElementById("feedbackInput").value.trim();

    const li = document.createElement("li");
    li.innerText = `${nameInput}: ${feedbackInput}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "❌";
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    feedbackList.appendChild(li);

    form.reset(); // Clear the form inputs

})

} catch (error) {
    console.error("An error occurred:", error);
}