const LOGO = "" || "imgs/default-logo.png";
const FONT_URL = "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap";
const FONT_NAME = "'Roboto', sans-serif" || "arial";
const COLOR = {
    MENU: "" || "#193c6a",
    MENU_ITEMS: "#fff" || "#fff",
    HEADINGS: "#fff" || "#fff"
}

const getTree = () => {
    let tree = '';
    const URL = window.location.pathname.split('/');
    const endLoc = URL.findIndex(item => item === "pages");
    const startLoc = URL.findIndex(item => item === "prumkathon");

    switch(endLoc - startLoc) {
        case 0:
            tree = "./";
            break;

        case 1:
            tree = "../../";
            break;
    }

    return tree;
};

// CONFIGURATION OF THE VIEW
const externalFontURL = document.querySelector("#externalFont");
const headerLogo = document.querySelector(".header__logo");
const footerLogo = document.querySelector(".footer__logo");
const stylesheet = document.documentElement;

// LOGO
headerLogo.src = getTree() + LOGO;
footerLogo.src = getTree() + LOGO;

// COLORS
stylesheet.style.setProperty("--menu-background-color", COLOR.MENU);
stylesheet.style.setProperty("--menu-items-color", COLOR.MENU_ITEMS);
stylesheet.style.setProperty("--headings-color", COLOR.HEADINGS);

// FONT
externalFontURL.setAttribute("href", FONT_URL);
document.querySelector("body").style.fontFamily = FONT_NAME;


