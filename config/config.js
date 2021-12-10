const LOGO = "" || "imgs/default-logo1.png";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap";
const FONT_NAME = "'Roboto', sans-serif" || "arial";
const COLOR = {
  MENU: "" || "#193c6a",
  MENU_ITEMS: "#fff" || "#fff",
  HEADINGS: "#fff" || "#fff",
};
const SLIDER_TEXTS = ['nějaký text 1','nějaký text <br> text text','nějaký text 3'];

const IMAGES_SRC = [
  "imgs/slider1.png",
  "imgs/slider2.jpg",
  "imgs/slider3.jpg",
];
const getTree = () => {
  let tree = "";
  const URL = window.location.pathname.split("/");
  const endLoc = URL.findIndex((item) => item === "pages");
  const startLoc = URL.findIndex((item) => item === "prumkathon");

  switch (endLoc - startLoc) {
    case 0:
      tree = "./";
      break;

    case 1:
      tree = "../../";
      break;
  }

  return tree;
};

const importScript = (src) => {
  const script = document.createElement("script");
  script.src = getTree() + src;
  script.setAttribute("defer", "");
  document.querySelector("head").appendChild(script);
};

/** SCRIPTS IMPORT */
importScript("scripts/drobMenu.js");
importScript("scripts/menu.js");
importScript("scripts/footer.js");
importScript("scripts/slider.js");
importScript("scripts/dynamicContextSubject.js");

// CONFIGURATION OF THE VIEW
const externalFontURL = document.querySelector("#externalFont");
const stylesheet = document.documentElement;

// COLORS
stylesheet.style.setProperty("--menu-background-color", COLOR.MENU);
stylesheet.style.setProperty("--menu-items-color", COLOR.MENU_ITEMS);
stylesheet.style.setProperty("--headings-color", COLOR.HEADINGS);

// FONT
externalFontURL.setAttribute("href", FONT_URL);
document.querySelector("body").style.fontFamily = FONT_NAME;
