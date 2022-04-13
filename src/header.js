import { menuBtn, homeBtn, contactBtn } from "./createButtons";
import createElement from "./createHTMLElements";
const content = document.querySelector("#content");

const headerTop = () => {
  //Main Container Div
  const container = createElement("div", ["container"], {});
  content.appendChild(container);

  //Div for the Heading Text and Buttons
  const headerTop = createElement("div", ["headerTop"], {});
  container.appendChild(headerTop);
  content.appendChild(container);

  //Creating the title for the header
  const headerText = createElement("h1", ["headerText"], {});
  headerText.textContent = "Steakhouse de Saad";
  headerTop.appendChild(headerText);
  container.appendChild(headerTop);
  content.appendChild(container);

  //Appending the buttons to the button wrapper div
  const buttonWrapper = createElement("div", ["buttonWrapper"], {});
  buttonWrapper.appendChild(homeBtn);
  buttonWrapper.appendChild(menuBtn);
  buttonWrapper.appendChild(contactBtn);

  headerTop.appendChild(buttonWrapper);
  container.appendChild(headerTop);
  content.appendChild(container);

  document.body.appendChild(content);
};

export default headerTop;
