// import Error404Screen from "./screens/Error404Screen.js";
// import HomeScreen from "./screens/HomeScreen.js";
// import ProductScreen from "./screens/ProductScreen.js";
var Error404Screen = require("./screens/Error404Screen.js");
var HomeScreen = require("./screens/HomeScreen.js");
var ProductScreen = require("./screens/ProductScreen.js");
import { parseRequestUrl } from "./util/utils.js";

const routes = {
  "/": HomeScreen,
  "/product/:id": ProductScreen,
};

const router = () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("main-container");
  main.innerHTML = screen.render();
};

window.addEventListener("load", router);
window.addEventListener("hashchange", router);
