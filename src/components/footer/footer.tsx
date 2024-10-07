import './footer.scss';

export function Footer() {
  return (
    <footer>
      <div className="info-footer">
        <h2>Camilo Isaza Gómez</h2>
        <h3>camiloisazag@hotmail.com</h3>
        <h3>300 7401274</h3>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/camilo-isaza-g%C3%B3mez-36651221a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo_linkedin.png" alt="Logo LinkedIn" />
        </a>
        <a href="mailto:camiloisazag@hotmail.com">
          <img src="/logo_email.png" alt="Logo Email" />
        </a>
        <a
          href="https://wa.me/573007401274"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo_whatsapp.png" alt="Logo WhatsApp" />
        </a>
        <a
          href="https://github.com/camilo83"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github_image.png" alt="Logo GitHub" />
        </a>
        <a
          href="https://www.instagram.com/camiloisaza00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo_instagram.png" alt="Logo Instagram" />
        </a>
      </div>
    </footer>
  );
}
