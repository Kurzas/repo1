document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

function applyTheme(theme) {
  root.dataset.theme = theme;
  toggle.textContent = theme === "dark" ? "Light mode" : "Dark mode";
}

let saved = null;
try {
  saved = localStorage.getItem("theme");
} catch (e) {}

applyTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

toggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
});
