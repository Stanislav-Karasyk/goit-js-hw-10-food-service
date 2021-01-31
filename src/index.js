import "./styles.css";
import menuData from "./menu.json";
import menuTemplate from "./templates/menu.hbs";

const ulMenuRef = document.querySelector(".js-menu");
const inputThemeRef = document.querySelector("#theme-switch-toggle");
const bodyRef = document.querySelector("body");

const markup = menuTemplate(menuData);
ulMenuRef.insertAdjacentHTML("afterbegin", markup);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

bodyRef.classList.toggle(localStorage.getItem("Theme"));

if (bodyRef.classList.contains("dark-theme")) {
  inputThemeRef.checked = true;
}

const switchTheme = () => {
  bodyRef.classList.add("light-theme");

  if (bodyRef.classList.contains("dark-theme")) {
    bodyRef.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("Theme", Theme.LIGHT);
  } else {
    bodyRef.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("Theme", Theme.DARK);
  }
};

inputThemeRef.addEventListener("change", switchTheme);
