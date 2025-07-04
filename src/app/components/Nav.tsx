import logo from "../../../public/logo.png";

const Nav = () => {
  return (
    <section>
      <GlassNavigation />
    </section>
  );
};

const GlassNavigation = () => {


  return (
    <nav>
      <div className="flex items-center justify-between px-5 py-5">
        <Logo />
      </div>
    </nav>
  );
};


const Logo = () => (
  <span className="flex items-center">
    <img src={logo.src} alt="Logo" className="inline-block h-16 object-contain" />
  </span>
);


export default Nav;