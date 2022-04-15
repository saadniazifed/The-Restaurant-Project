import createElement from "./createHTMLElements";

const headerBottom = () => {
  // Selecting DOM Elements
  const container = document.querySelector(".container");
  const content = document.querySelector("#content");

  //Header bottom div being created in the Home page
  const headerBottom = createElement("div", ["headerBottom"], {});
  const taglineTextDiv = createElement("div", ["taglineTextDiv"], {});
  const subContainer = createElement("div", ["subContainer"], {});
  const subContainerGrid = createElement("div", ["subContainerGrid"], {});

  const taglineText = createElement("h1", ["taglineText"], {});
  taglineText.textContent = "The Only Thing We Love More Than Food, is YOU!";

  taglineTextDiv.appendChild(taglineText);
  headerBottom.appendChild(taglineTextDiv);
  subContainer.appendChild(headerBottom);
  subContainerGrid.appendChild(subContainer);
  container.appendChild(subContainerGrid);
  content.appendChild(container);

  document.body.appendChild(content);
};

export default headerBottom;
