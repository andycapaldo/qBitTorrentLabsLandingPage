import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import useMeasure from "react-use-measure";
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
    <nav
      className="p-4 shadow-2xl rounded-2xl relative md:fixed left-0 right-0 top-0 z-10 mx-auto max-w-6xl overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6"
    >
      <div className="flex items-center justify-between px-5 py-5">
        {/* <Links /> */}

        <Logo />

        {/* <Buttons setMenuOpen={setMenuOpen} /> */}
      </div>

      {/* <MobileMenu menuOpen={menuOpen} /> */}
    </nav>
  );
};


const Logo = () => (
  <span className="pointer-events-none relative left-0 top-[50%] z-10 text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
    <img src={logo.src} alt="Logo" className="inline-block h-12 object-contain" />
  </span>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
  </div>
);

const GlassLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  );
};

const TextLink = ({ text }: { text: string }) => {
  return (
    <a href="#" className="text-white/90 transition-colors hover:text-white">
      {text}
    </a>
  );
};

const Buttons = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-4">
    <div className="hidden md:block">
      <SignInButton />
    </div>

    <button className="relative scale-100 overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95">
      Try free
    </button>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

const SignInButton = () => {
  return (
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        Sign in
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div ref={ref} className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center gap-4">
          <TextLink text="Products" />
          <TextLink text="History" />
          <TextLink text="Contact" />
        </div>
        <SignInButton />
      </div>
    </motion.div>
  );
};

export default Nav;