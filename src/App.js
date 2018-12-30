import Home from "./views/Home";
import About from "./views/About";
import Error404 from "./views/Error404";

//
const routes = {
  "/": Home,
  "/about": About
};

// figure out which content is rendered.
const router = async () => {
  let contentDiv = document.getElementById("content");

  let requestedURL = window.location.pathname;
  let requestedPage = routes[requestedURL] ? routes[requestedURL] : Error404;

  contentDiv.innerHTML = await requestedPage.render();
  await requestedPage.after_render()
  history.pushState({}, '', requestedURL);
};

window.onpopstate = () => {
  router();
};

router()