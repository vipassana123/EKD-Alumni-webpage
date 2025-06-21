
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");

menu.addEventListener("click", () => {
  if (mobileMenu.style.left === "0px") {
    mobileMenu.style.left = "-250px";
  } else {
    mobileMenu.style.left = "0px";
  }
});





const card = document.getElementById("flipCard");
const flipBtn = document.getElementById("flipBtn");
const flipBackBtn = document.getElementById("flipBackBtn");

flipBtn.addEventListener("click", () => {
  card.classList.add("flip");
});

flipBackBtn.addEventListener("click", () => {
  card.classList.remove("flip");
});
