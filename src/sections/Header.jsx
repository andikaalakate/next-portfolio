import { useEffect, useState } from "react";
import Link from 'next/link'

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const fixedNav = header.offsetTop;

      if (window.pageYOffset > fixedNav) {
        setIsNavbarFixed(true);
        header.classList.add('navbar-fixed');
      } else {
        setIsNavbarFixed(false);
        header.classList.remove('navbar-fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const Hamburger = document.querySelector('#hamburger');
      const navMenu = document.querySelector('#nav-menu');
      if (e.target !== Hamburger && e.target !== navMenu) {
        setIsHamburgerActive(false);
        Hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  function handleHamburgerClick() {
    setIsHamburgerActive((prevState) => !prevState);
    const Hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    Hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
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
                className={`${isHamburgerActive ? "slide-in" : "hidden"
                  } lg:block lg:static lg:bg-transparent lg:max-w-full absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:shadow-none lg:rounded-none lg:right-0 transition-all duration-500 ease-in-out z-[9999]`}
              >
                <ul className="block lg:flex">
                  <li className={`group ${activeLink === '#home' ? 'text-primary' : 'text-dark'}`}>
                    <Link href="#home" className="text-base py-2 mx-8 flex group-hover:text-primary transition-all duration-500">
                      Beranda
                    </Link>
                  </li>
                  <li className={`group ${activeLink === '#about' ? 'text-primary' : 'text-dark'}`}>
                    <Link href="#about" className="text-base py-2 mx-8 flex group-hover:text-primary transition-all duration-500">
                      Tentang
                    </Link>
                  </li>
                  <li className={`group ${activeLink === '#timeline' ? 'text-primary' : 'text-dark'}`}>
                    <Link href="#timeline" className="text-base py-2 mx-8 flex group-hover:text-primary transition-all duration-500">
                      Timeline
                    </Link>
                  </li>
                  <li className={`group ${activeLink === '#skills' ? 'text-primary' : 'text-dark'}`}>
                    <Link href="#skills" className="text-base py-2 mx-8 flex group-hover:text-primary transition-all duration-500">
                      Kemampuan
                    </Link>
                  </li>
                  <li className={`group ${activeLink === '#portfolio' ? 'text-primary' : 'text-dark'}`}>
                    <Link href="#portfolio" className="text-base py-2 mx-8 flex group-hover:text-primary transition-all duration-500">
                      Portfolio
                    </Link>
                  </li>
                  {/* Tambahkan li lainnya di sini */}
                  <li className={`group ${activeLink === '#contact' ? 'text-primary' : 'text-dark'}`}>
                    <Link href="#contact" className="text-base py-2 mx-8 flex group-hover:text-primary transition-all duration-500">
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