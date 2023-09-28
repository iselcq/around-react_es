const year = new Date();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year.getFullYear()} Alrededor de los EEUU
      </p>
    </footer>
  );
}

export default Footer;
