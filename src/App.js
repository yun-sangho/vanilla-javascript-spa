import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

let contentDiv = document.getElementById("content")
//
const routes = {
  "/": Home,
  "/about": About
};

// figure out which content is rendered.
// const router = async () => {
//   let requestedPath = window.location.pathname;
//   let requestedPage = routes[requestedPath] ? routes[requestedPath] : Error404;
//   console.log("router works")
//   contentDiv.innerHTML = await requestedPage.render();
//   await requestedPage.after_render()
//   history.pushState(null, '', requestedPath);
// };

// window.onpopstate= () => {
//   router()
// }

let requestedPath = window.location.pathname;
let requestedPage = routes[requestedPath] ? routes[requestedPath] : Error404;
contentDiv.innerHTML = requestedPage.render();