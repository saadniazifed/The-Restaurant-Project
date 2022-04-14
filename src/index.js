import { homeBtn, menuBtn, contactBtn } from "./createButtons";
import headerTop from "./header";
import homePage from "./home";
import menuPage from "./menu";
import "./style.css";

const content = document.querySelector("#content");
const container = document.querySelector(".container");

homePage();

homeBtn.addEventListener("click", () => {
  content.innerHTML = "";
  container.innerHTML = "";
  console.log(1);
  homePage();
});

menuBtn.addEventListener("click", () => {
  content.innerHTML = "";
  container.innerHTML = "";
  headerTop();
  menuPage();
});
