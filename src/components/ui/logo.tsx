import logo from "../../assets/images/logo2.png";
const Logo = () => {
  return (
    <a href="/" className="-m-1.5 p-1.5">
      <span className="sr-only">Beeline</span>
      <img className="h-8 w-auto" src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
