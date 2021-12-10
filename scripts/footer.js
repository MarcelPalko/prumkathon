const FOOTER_CONTENT = `
    <div></div>
    <div class="footer__content">
        <div class="footer__content-column">
          <div class="footer__content-title">Kontakt</div>
          <a href="#"><div>
            <i class="fontawesome-icon fas fa-phone-alt"></i>111 222 333
          </div></a>
          <a href="#"><div>
            <i class="fontawesome-icon fas fa-envelope"></i>student@exaple.cz
          </div></a>
          <a href="#"><div><i class="fontawesome-icon fas fa-download"></i>Ke stažení</div></a>
    </div>
    <div class="footer__content-column">
        <div class="footer__content-title">Social Media</div>
          <a href="#"><div><i class="fontawesome-icon fab fa-facebook-f"></i>Aces</div></a>
          <a href="#"><div><i class="fontawesome-icon fab fa-twitter"></i>Aces</div></a>
          <a href="#"><div><i class="fontawesome-icon fab fa-instagram"></i>Aces</div></a>
        </div>
    <div class="footer__content-column">
        <div class="footer__content-title">About</div>
          <a href="#"><div>Blog</div></a>
          <a href="#"><div>Demo</div></a>
          <a href="#"><div>Support</div></a>
        </div>
    </div>
    <div>
      <a href="${getTree()}index.html"><img class="footer__logo" /></a>
    </div>
`;

document.querySelector("#footer").innerHTML += FOOTER_CONTENT;

// FOOTER
const footerLogo = document.querySelector(".footer__logo");
footerLogo.src = getTree() + LOGO;
