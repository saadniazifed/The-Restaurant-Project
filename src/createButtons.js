import createElement from "./createHTMLElements";

const homeBtn = createElement("button", ["buttonStyling"], {});
homeBtn.textContent = "Home";
const menuBtn = createElement("button", ["buttonStyling"], {});
menuBtn.textContent = "Menu";
const contactBtn = createElement("button", ["buttonStyling"], {});
contactBtn.textContent = "Contact Us";

export { homeBtn, menuBtn, contactBtn };
