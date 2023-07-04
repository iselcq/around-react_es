import __logo from "../images/__logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={__logo}
        alt="logotipo blanco de Around
The U.S."
        className="logo"
      />
    </header>
  );
}

export default Header;
