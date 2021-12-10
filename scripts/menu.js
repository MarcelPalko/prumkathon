const MENU_CONTENT = `
    <div>
        <img class='header__logo' />
    </div>
    <div class='header__items'>
        <ul>
            <li>
                <div>Obory</div>
                <ul>
                <li class="header__items__menu-subject">
                    <a>Obory M <i class="header__items__menu-subject-arrow"></i></a>
                    <ul>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=IT'
                        >Informační technologie</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=TL'
                        >Technické lyceum</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=ENE'>Energetika</a>
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=STR'
                        >Strojírenství</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=AUT'
                        >Průmyslová automizace</a
                        >
                    </li>
                    </ul>
                </li>
                <li class="header__items__menu-subject">
                    <a  >Obory L <i class="header__items__menu-subject-arrow"></i></a>
                    <ul>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=AUR'>Autotronik</a>
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=MEL'
                        >Mechanik elektrotechnik</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=MSE'
                        >Mechanik seřizovač</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=OKU'
                        >Uměleckořemeslné zpracování kovů</a
                        >
                    </li>
                    </ul>
                </li>
                <li class="header__items__menu-subject">
                    <a  >Obory H <i class="header__items__menu-subject-arrow"></i></a>
                    <ul>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=AMA'
                        >Automechanik</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=AME'
                        >Autoelektrikář</a
                        >
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=NAS'>Nástrojař</a>
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=KAR'>Karosař</a>
                    </li>
                    <li>
                        <a href='${getTree()}pages/obory/index.html?subject=OKO'
                        >Obráběč kovů pro CNC stroje</a
                        >
                    </li>
                    </ul>
                </li>
                </ul>
            </li>
        </ul>

        <a class='header__items-item' href='${getTree()}pages/kontakty/index.html'
        >Kontakty</a
        >
        <a class='header__items-item' href='${getTree()}pages/o-nas/index.html'>O nás</a>
    </div>
`;

document.querySelector("#menu").innerHTML += MENU_CONTENT;

// LOGO
const headerLogo = document.querySelector(".header__logo");
headerLogo.src = getTree() + LOGO;
