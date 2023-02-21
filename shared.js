const primaryNav = document.querySelector(".primary-navigation");
const mobileToggle = document.querySelector(".mobile-nav-toggle");
const backdrop = document.querySelector(".overlay");

mobileToggle.addEventListener("click", function () {
  const visible = primaryNav.getAttribute("data-visible");

  if (visible === "false") {
    mobileToggle.setAttribute("aria-expanded", true);
    primaryNav.setAttribute("data-visible", true);
    backdrop.style.display = "block";
  } else {
    primaryNav.setAttribute("data-visible", false);
    mobileToggle.setAttribute("aria-expanded", false);
    backdrop.style.display = "none";
  }
});

backdrop.addEventListener("click", function () {
  primaryNav.setAttribute("data-visible", false);
  mobileToggle.setAttribute("aria-expanded", false);
  backdrop.style.display = "none";
});
