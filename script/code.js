// Function to clear the form fields
function clearForm() {
    document.getElementById("myForm").reset();
}

// Attach event listener to the clear button
document.getElementById("clearButton").addEventListener("click", clearForm);