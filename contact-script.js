const escalationButton = document.querySelector(".escalation-open-button");
const modal = document.querySelector(".modal");
const closeModal = document.getElementById("close-modal");

escalationButton.addEventListener("click", (e) => {
    escalationButton.parentElement.classList.add("change-bg");
    modal.classList.add("open-modal");
});

closeModal.addEventListener("click", (e) => {
    escalationButton.parentElement.classList.remove("change-bg");
    modal.classList.remove("open-modal");
})