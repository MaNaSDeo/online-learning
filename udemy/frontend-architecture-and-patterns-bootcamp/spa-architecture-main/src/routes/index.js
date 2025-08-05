import { renderHomePage } from "../pages/home";
import { renderDetailsPage } from "../pages/detail";

export const ROUTES = {
  "": renderHomePage,
  home: renderHomePage,
  details: renderDetailsPage,
};

export const navigate = (route) => {
  // if (route === "" || route === "home") {
  //   renderHomePage();
  // }
  // if (route === "details") {
  //   renderDetailsPage();
  // }
  console.log("manas navigate", { route });
  const routeToPath = ROUTES[route];

  const rootDiv = document.getElementById("container");
  rootDiv.innerHTML = "";
  routeToPath();
};
