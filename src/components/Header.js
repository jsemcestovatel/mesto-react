import imgLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={imgLogo} alt="Логотип" className="header__logo" />
    </header>
  );
}

export default Header;