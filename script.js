//   Get the form and the feedback list container
const form = document.getElementById("feedbackForm");
const feedbackUl = document.getElementById("feedbackList"); 

//   Get feedback from localStorage or empty array
let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];

//   Save feedback array to localStorage
function saveFeedbackToLocalStorage() {
    localStorage.setItem("feedbackList", JSON.stringify(feedbackList));
}

//   Add a new feedback entry and re-render
function addFeedback(feedback) {
    feedbackList.push(feedback);
    saveFeedbackToLocalStorage();
    renderFeedback();
}

//   Delete a feedback entry by index
function deleteFeedback(index) {
    feedbackList.splice(index, 1);
    saveFeedbackToLocalStorage();
    renderFeedback();
}

//   Display all feedbacjk items
function renderFeedback() {
    feedbackUl.innerHTML = ""; // Clear old list before re-render
    feedbackList.forEach((feedback, index) => {
        const li = document.createElement("li");
        li.innerText = `${feedback.name}: ${feedback.message}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.addEventListener("click", function () {
            const confirmation = confirm("Are you sure you want to delete this feedback?");
            if (confirmation) {
                deleteFeedback(index);
            }
        });

        li.appendChild(deleteBtn);
        feedbackUl.appendChild(li);
    });
}

//   Handle form submission
try {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("nameInput").value.trim();
        const feedbackInput = document.getElementById("feedbackInput").value.trim();

        if (!nameInput || !feedbackInput) {
            alert("Please fill in all fields.");
            return;
        }

        // Add to feedback list
        addFeedback({ name: nameInput, message: feedbackInput });

        // Reset form
        form.reset();
        alert("Feedback submitted successfully!");
    });

    //   Render feedback from localStorage on page load
    renderFeedback();

} catch (error) {
    console.error("An error occurred:", error);
}
