/** FUNCTIONS */
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

const capitalizeFirst = ([first, ...other]) => {
  return first.toUpperCase() + other.join("");
};

/** PAGE SETTINGS */
const LOGO = "" || "imgs/default-logo.png";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap";
const FONT_NAME = "'Roboto', sans-serif" || "arial";
const COLOR = {
  MENU: "" || "#193c6a",
  MENU_ITEMS: "#fff" || "#fff",
  HEADINGS: "#fff" || "#fff",
};

const MENU_ITEMS = ["EXPAND", "o-nas", "kontakty"];
const MENU_EXPAND_ITEMS = {
  title: "obory",
  children: [
    {
      title: "obory M",
      children: [
        {
          title: "informační technologie",
          link: "obory/index.html?subject=IT",
        },
        { title: "technické lyceum", link: "obory/index.html?subject=TL" },
        { title: "energetika", link: "obory/index.html?subject=ENE" },
        { title: "strojírenství", link: "obory/index.html?subject=STR" },
        {
          title: "průmyslová automatizace",
          link: "obory/index.html?subject=AUT",
        },
      ],
    },
    {
      title: "Obory L",
      children: [
        {
          title: "Autotronik",
          link: "obory/index.html?subject=AUR",
        },
        {
          title: "Mechanik elektrotechnik",
          link: "obory/index.html?subject=MEL",
        },
        { title: "Mechanik seřizovač", link: "obory/index.html?subject=MSE" },
        {
          title: "Uměleckořemeslné zpracování kovů",
          link: "obory/index.html?subject=OKU",
        },
      ],
    },
    {
      title: "Obory H",
      children: [
        {
          title: "Automechanik",
          link: "obory/index.html?subject=AMA",
        },
        { title: "Autoelektrikář", link: "obory/index.html?subject=AME" },
        { title: "Nástrojař", link: "obory/index.html?subject=NAS" },
        { title: "Karosář", link: "obory/index.html?subject=KAR" },
        {
          title: "Obráběč kovů pro CNC stroje",
          link: "obory/index.html?subject=OKO",
        },
      ],
    },
  ],
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
