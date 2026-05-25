const filterButtons = document.querySelectorAll(".filterBtn");
const recipeCards = document.querySelectorAll(".recipeCard");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    recipeCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
});
