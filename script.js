document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("switchbutton");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode"); 
    });
});