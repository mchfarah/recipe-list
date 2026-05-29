const filterButtons = document.querySelectorAll(".filterBtn");
const recipeCards = document.querySelectorAll(".recipeCard");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    recipeCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");

      if (filter === "all" || categories.includes(filter)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
});

const backToTop = document.getElementById("back2Top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
