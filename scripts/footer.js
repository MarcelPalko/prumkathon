const FOOTER_CONTENT = `
    <div></div>
    <div class="footer__content">
        <div class="footer__content-column">
          <div class="footer__content-title">Kontakt</div>
          <div>
            <i class="fontawesome-icon fas fa-phone-alt"></i>111 222 333
          </div>
          <div>
            <i class="fontawesome-icon fas fa-envelope"></i>student@exaple.cz
          </div>
        <div><i class="fontawesome-icon fas fa-download"></i>Ke stažení</div>
    </div>
    <div class="footer__content-column">
        <div class="footer__content-title">Social Media</div>
          <div><i class="fontawesome-icon fab fa-facebook-f"></i>Aces</div>
          <div><i class="fontawesome-icon fab fa-twitter"></i>Aces</div>
          <div><i class="fontawesome-icon fab fa-instagram"></i>Aces</div>
        </div>
    <div class="footer__content-column">
        <div class="footer__content-title">About</div>
          <div>prvni</div>
          <div>druhe</div>
          <div>treti</div>
        </div>
    </div>
    <div><img class="footer__logo" /></div>
`;

document.querySelector("#footer").innerHTML += FOOTER_CONTENT;

// FOOTER
const footerLogo = document.querySelector(".footer__logo");
footerLogo.src = getTree() + LOGO;
