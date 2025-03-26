const backgroundColor = document.getElementById("color-button");

backgroundColor.addEventListener("click", (e) => {
    backgroundColor.parentElement.classList.toggle("change-bg");
});

setTimeout(() => {
    console.log(backgroundColor)
<<<<<<< Updated upstream
}, 4000);
=======
}, 3000);

const helloJavaScript = () => {
    console.log("Learn JavaScript")
};
helloJavaScript();
>>>>>>> Stashed changes
