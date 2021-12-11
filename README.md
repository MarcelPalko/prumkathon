# Průmkathon Projekt
Projekt je zaměřen na jednoduchot znovu použití tedy replikovatelnosti. 

<br />

## Autoři řešení (Aces)
- [Marcel Palko](https://github.com/MarcelPalko)
- [Lukáš Kotoun](https://github.com/LukasKotoun)
- [Petr Novák](https://github.com/PeTroll7)

## Řešení
Celý web lze jednoduše nakonfigurovat přes jeden jediný soubour a to config.js

```
project
│   README.md
│   index.html  
└───config
│     config.js
|
...
```

<br />

## Nastavení configu
Nastavení webu je zcela jednoduché, uložené obrázky, ikony a loga uložíte do /imgs složky a poté zadáte cestu k náležité konstantě tzn. (LOGO = "imgs/logo.png"),\
pokud tak neučiníte nastaví se defaultní logo, toto se týká všech konstant které mají při sobě tyto znaky "||".

<br />

### Funkce
Funkce obsažené v konfigu jsou Námi vytvořené pro lepší abstrakci. Jsou to:
- getTree => zjistí aktuální pozici vnoření na stránce a vrátí daný prefix např. "./" pro první úroveň.
- importScript => vytvoří script element, který zasadí do hlavičky s vlastností defer (tudíž stačí fyzicky naimportovat JEN config do šablony)
- capitalizeFirst =>  u slova/věty nastaví první písmeno na velké

<br />

### Slider
Texty uložené v SLIDER_TEXTS se nemusí rovnat počtu obrázků použité pro slider (opakují se).

<br />

### Menu
V menu jsou dva vyrvořené presety: 
- První odkazuje na první úroveň stránky
- Druhý nabízí rozbalovací menu pro jednu/dvě úrovně

Tedy pokud chcete použít rozbalovací menu tak do MENU_ITEMS vložte EXPAND pokud ne použijte název položky v menu (jestli je zde mezera zaměňte za pomlčku),\
MENU_EXPAND_ITEMS obsahuje strukturu rozbalovacího menu kde maximální vnoření je children na children tedy dvě úrovně.\
viz. kód

<br />

## config.js
```
/** PAGE SETTINGS */
const WEB_NAME = "" || "Průmkathon - ACES";
const ICON = "" || "imgs/default-icon.png";
const LOGO = "" || "imgs/default-logo.png";
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap";
const FONT_NAME = "'Roboto', sans-serif" || "arial";
const COLOR = {
  MENU: "" || "#193c6a",
  MENU_ITEMS: "#fff" || "#fff",
  HEADINGS: "#fff" || "#fff",
};
const SLIDER_TEXTS = [
  "Střední průmyslová<br>škola Třebíč",
  "Máme dokonale<br>vybroušené vzdělání",
  "Výborní učitelé<br>jsou klíčem k úspěchu",
];

const IMAGES_SRC = ["imgs/slider1.png", "imgs/slider2.jpg", "imgs/slider3.jpg"];

const MENU_ITEMS = ["EXPAND", "o-nas", "kontakty"];
const MENU_EXPAND_ITEMS = [
  {
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
      }
    ],
  },

  /** Příklad jedné úrovně rozbalovacího menu */
  {
    title: "menu položka",
    link: `getTree()odkazNaIndexUloženýVPages`
  },
];
```
