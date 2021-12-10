let MENU_CONTENT = `
    <div>
        <img class='header__logo' />
    </div>
    <div class='header__items'>
`;

const generateMenuItem = (NAME) => {
    const titleForm = capitalizeFirst(NAME.split("-").join(" "));

    return `<a class='header__items-item' href='${getTree()}pages/${NAME}/index.html'>${titleForm}</a>`;
};

const generateExpandMenu = (items) => {
    let menu = `<ul><li><div>${capitalizeFirst(items.title)}</div><ul>`;

    items.children.forEach((item) => {
        menu += `<li class="header__items__menu-subject"><a`;

        if (item.children?.length > 0) {
            menu += `>${capitalizeFirst(item.title)} <i class="header__items__menu-subject-arrow"></i></a><ul>`;

            item.children.forEach((item) => {
                menu += `<li><a href='${getTree()}pages/${item.link}'>${capitalizeFirst(
                    item.title
                )}</a></li>`;
            });

            menu += "</ul>";
        } else {
            menu += ` href='${item?.link}'>${capitalizeFirst(item.title)}</a>`;
        }

        menu += "</li>";
    });

    menu += "</ul></li></ul>";

    return menu;
};
let expCount = 0;
MENU_ITEMS.forEach((item) => {
    MENU_CONTENT +=
        item === "EXPAND"
            ? generateExpandMenu(MENU_EXPAND_ITEMS[expCount])
            : generateMenuItem(item);
    if (item === "EXPAND") expCount++;

});

document.querySelector("#menu").innerHTML += MENU_CONTENT + "</div>";

// LOGO
const headerLogo = document.querySelector(".header__logo");
headerLogo.src = getTree() + LOGO;
