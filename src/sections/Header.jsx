import { useEffect, useState } from "react";
import Link from 'next/link'

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleHamburgerClick() {
    setIsHamburgerActive((prevState) => !prevState);
  }

  return (
    <>
      <header
        className={`absolute top-0 left-0 w-full flex items-center ${isNavbarFixed ? "navbar-fixed" : ""
          }`}
      >
        <div className="container px-4">
          <div className="flex items-center justify-between relative">
            <div className="px-4 animate__animated animate__slideInLeft">
              <Link href="#home" className="font-bold text-lg text-primary block py-5">
                Andika Alakate
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
                onClick={handleHamburgerClick}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className={`${isHamburgerActive ? "" : "hidden"
                  } lg:block lg:static lg:bg-transparent lg:max-w-full absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:shadow-none lg:rounded-none lg:right-0 transition-all duration-500 ease-in-out z-[9999]`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link
                      href="#home"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Tentang
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="#timeline"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Timeline
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="#skills"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Kemampuan
                    </Link>
                  </li>
                  <li className="group">
                    <Link
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Portfolio
                    </Link>
                  </li>
                  {/* <li className="group">
                    <Link
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Blog
                    </Link>
                  </li> */}
                  <li className="group">
                    <Link
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary transition-all duration-500"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header