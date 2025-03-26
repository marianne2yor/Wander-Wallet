import logo from '../assets/LogoTransaparent.png';

function Header() {
  return (
    <>
      <div className="flex-row flex-wrap opacity-75 ">
        <img src={logo} width={80} height={80}  alt="Logo " />
      </div>
    </>
  );
}

export default Header;
