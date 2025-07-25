import { createHeader } from "../components/header.js";

const rootDiv = document.getElementById("root");

const bodyContainer = document.createElement("div");
const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "This is detail page";
bodyContainer.appendChild(pageTitle);
bodyContainer.style.cssText = `
    display: flex;
    justify-content: center;
    height: 60vh;
    align-items: center;
`;

const header = createHeader();

rootDiv.appendChild(header);
rootDiv.appendChild(bodyContainer);
