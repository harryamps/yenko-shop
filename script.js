// Navigation Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  sideMenu.style.width = "250px";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.width = "0";
});

// SEARCH FUNCTIONALITY
const searchInput = document.querySelector(".search-bar input");
const productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase().trim();

  productCards.forEach(card => {
    const name = card.querySelector(".product-name").textContent.toLowerCase();
    if (name.includes(filter)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
