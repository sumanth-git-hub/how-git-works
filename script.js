const backgroundColor = document.getElementById("color-button");

backgroundColor.addEventListener("click", (e) => {
    backgroundColor.parentElement.classList.toggle("change-bg");
})