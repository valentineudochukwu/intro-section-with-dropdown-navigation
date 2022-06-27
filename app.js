const toogle = document.querySelector(".toogle");
const navUl = document.querySelector("nav ul");

toogle.addEventListener("click", () => {
  if (navUl.classList.contains("hide")) {
    console.log("clicked");
    toogle.classList.add("menu");
    navUl.classList.remove("hide");
    navUl.classList.add("open");
  } else {
    toogle.classList.remove("menu");
    navUl.classList.remove("open");
    navUl.classList.add("hide");
  }
});