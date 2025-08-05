import { navigate } from "./routes";
import { mountHeader } from "./components/header";

const rootheaderDiv = document.getElementById("header");

const header = mountHeader();

rootheaderDiv.appendChild(header);

const route = window.location.pathname;
const relativeRoute = route.split("/")?.[1];

navigate(relativeRoute);
