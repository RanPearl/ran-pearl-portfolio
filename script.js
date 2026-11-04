const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const modal = document.getElementById("certificateModal");
const modalImage = document.getElementById("modalImage");
const modalError = document.getElementById("modalError");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".view-cert").forEach((button) => {
  button.addEventListener("click", () => {
    const imagePath = button.dataset.certificate;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    modalError.classList.remove("show");
    modalImage.style.display = "block";
    modalImage.src = imagePath;
    modalImage.onerror = () => {
      modalImage.style.display = "none";
      modalError.classList.add("show");
    };
  });
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}
modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});
