const escalationButton = document.querySelector(".escalation-open-button");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("close-modal");

escalationButton.addEventListener("click", (e) => {
    modal.classList.add("open-modal");
});

closeModal.addEventListener("click", (e) => {
    modal.classList.remove("open-modal");
})