// import Error404Screen from "./screens/Error404Screen.js";
// import HomeScreen from "./screens/HomeScreen.js";
// import ProductScreen from "./screens/ProductScreen.js";
// import { parseRequestUrl } from "./util/utils.js";

// const routes = {
//   "/": HomeScreen,
//   "/product/:id": ProductScreen,
// };

// const router = () => {
//   const request = parseRequestUrl();
//   const parseUrl =
//     (request.resource ? `/${request.resource}` : "/") +
//     (request.id ? "/:id" : "") +
//     (request.verb ? `/${request.verb}` : "");
//   const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
//   const main = document.getElementById("main-container");
//   main.innerHTML = screen.render();
// };

// window.addEventListener("load", router);
// window.addEventListener("hashchange", router);

const express = require("express");
// const home = require("./src/screens/HomeScreen");
const path = require("path");

const app = express();
app.use(express.json());

//Routes
app.use("/", express.static(path.join(__dirname + "/src")));
app.use(
  "/navermap",
  express.static(path.join(__dirname + "/src/screens/navermap"))
);

// app.use("/home", home);

//coneection
const port = 5000;
app.listen(port, () => console.log(`listen ${port}`));
