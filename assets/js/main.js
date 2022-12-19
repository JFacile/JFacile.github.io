const githubBtn = document.getElementById("githubBtn");
const npmBtn = document.getElementById("npmBtn");
const issusBtn = document.getElementById("issusBtn");

const getStartedBtn = document.getElementById("get-started");
const docsBtn = document.getElementById("docs");

githubBtn.addEventListener("click", () => {
  window.open("https://github.com/JFacile/JFacile");
});
npmBtn.addEventListener("click", () => {
  window.open("https://www.npmjs.com/package/jfacile");
});
issusBtn.addEventListener("click", () => {
  window.open("https://github.com/JFacile/JFacile/issues");
});

getStartedBtn.addEventListener("click", () => {
  window.open("./docs/documentation.html");
});
