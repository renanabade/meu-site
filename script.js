document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("change", function () {
    document.body.classList.toggle("light-mode", this.checked);
  });
});
