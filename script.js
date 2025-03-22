const button = document.getElementById("color-button");

button.addEventListener("click", (e) => {
    button.parentElement.classList.toggle("change-bg")
})