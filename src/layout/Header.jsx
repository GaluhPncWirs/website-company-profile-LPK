import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavFixed, setIsNavFixed] = useState(false);
  const navFixed = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const fixnav = navFixed.current.offsetTop;
      if (window.scrollY > fixnav) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav>
      <div
        className={`bg-transparent fixed shadow-lg h-20 z-10 w-full ${
          isNavFixed && `fixnavbar`
        }`}
        ref={navFixed}
      >
        <div>
          <div className="flex justify-between h-20">
            <div className="flex px-3 w-1/4 bg-[#549DBB] max-[768px]:w-full max-[768px]:justify-start max-[768px]:rounded-none md:w-1/4 md:rounded-r-xl md:justify-center md:items-center">
              <img src="/img/logo-ohayo-nipon.png" alt="logo ohayo nippon" />
            </div>
            <div className="max-[768px]:w-0 md:w-3/4">
              <NavigasiBar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavigasiBar() {
  const navComp = [
    {
      id: 1,
      nameClass: "absolute -top-[17px] left-3",
      name: "House",
      nameLi: "Home",
      to: "/",
    },
    {
      id: 2,
      nameClass: "absolute -top-[17px] max-[768px]:left-6 md:left-6",
      name: "groups",
      nameLi: "About Us",
      to: "/aboutus",
    },
    {
      id: 3,
      nameClass: "absolute -top-[17px] max-[768px]:left-[25px] md:left-[23px]",
      name: "language_japanese_kana",
      nameLi: "Program",
      to: "/program",
    },
    {
      id: 4,
      nameClass: "absolute -top-[17px] max-[768px]:left-4 md:left-4",
      name: "gallery_thumbnail",
      nameLi: "Gallery",
      to: "/gallery",
    },
    {
      id: 5,
      nameClass: "absolute -top-[17px] max-[768px]:left-10 md:left-10",
      name: "app_registration",
      nameLi: "Daftar Online",
      to: "/pendaftaran",
    },
  ];

  const slide = useRef(null);
  const modeHp = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  function toggleNavBar() {
    modeHp.current.classList.toggle("active");
    slide.current.classList.toggle("geser");
    setNavbarOpen(!navbarOpen);
  }

  function handleOutsideClick(tar) {
    if (
      !modeHp.current.contains(tar.target) &&
      !slide.current.contains(tar.target)
    ) {
      modeHp.current.classList.remove("active");
      slide.current.classList.remove("geser");
      setNavbarOpen(false);
    }
  }

  useEffect(() => {
    if (navbarOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
  }, [navbarOpen]);
  return (
    <>
      <ul
        className="h-full flex items-center font-semibold max-[640px]:small sm:small md:all md:text-base md:justify-evenly lg:text-lg"
        ref={slide}
      >
        {navComp.map((clas) => (
          <NavName key={clas.id} compAll={clas} />
        ))}
      </ul>
      <HamburgerBtn toggleNavBar={toggleNavBar} modeHp={modeHp} />
    </>
  );
}

function HamburgerBtn({ toggleNavBar, modeHp }) {
  return (
    <button
      onClick={() => toggleNavBar()}
      name="mode-hp"
      type="button"
      className="md:hidden lg:hidden xl:hidden 2xl:hidden absolute z-50 block right-7 top-0 bottom-0"
      ref={modeHp}
    >
      <span className="hamburger-menu transition duration-500 ease-in-out origin-top-left"></span>
      <span className="hamburger-menu transition duration-500 ease-in-out"></span>
      <span className="hamburger-menu transition duration-500 ease-in-out origin-bottom-left"></span>
    </button>
  );
}

function NavName({ compAll }) {
  return (
    <>
      <Link
        to={compAll.to}
        className="block relative cursor-pointer hover:text-blue-600 transition ease-in-out duration-300"
      >
        <span className={`material-symbols-outlined ${compAll.nameClass}`}>
          {compAll.name}
        </span>
        <li>{compAll.nameLi}</li>
      </Link>
    </>
  );
}
