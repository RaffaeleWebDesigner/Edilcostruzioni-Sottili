// anno footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// menu mobile
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobile");

if (burger && mobile) {
  burger.addEventListener("click", () => {
    mobile.classList.toggle("show");
  });

  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobile.classList.remove("show"));
  });
}
