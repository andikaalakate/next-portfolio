import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className="px-1 pb-1 md:pb-4 w-full">
        <div className="container shadow-xl bg-dark rounded-b-xl animate__animated animate__slideInUp">
          <div className="flex flex-wrap max-w-5xl mx-auto pt-16 animate__animated animate__slideInUp">
            <div className="w-full p-4 mb-6 sm:w-1/2 md:w-1/2 text-slate-300 font-medium">
              <h2 className="font-bold text-4xl text-white mb-5">ALAKATE</h2>
              <h3 className="font-bold text-2xl text-white mb-2">
                Hubungi Saya
              </h3>
              <p className="text-slate-300">andikaalakate@gmail.com</p>
              <p className="text-slate-300">Medan Tembung</p>
              <p className="text-slate-300">Sumatera Utara, Indonesia</p>
            </div>
            <div className="w-full p-4 mb-6 sm:w-1/2 md:w-1/3 text-slate-300 font-medium">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300 list-none">
                <li className="inline-block mr-4">
                  <Link
                    href="#home"
                    className="inline-block text-base hover:text-primary transition-all duration-500 mb-3 text-slate-300"
                  >
                    Beranda
                  </Link>
                </li>
                <li className="inline-block mr-4">
                  <Link
                    href="#about"
                    className="inline-block text-base hover:text-primary transition-all duration-500 mb-3 text-slate-300"
                  >
                    Tentang
                  </Link>
                </li>
                <li className="inline-block mr-4">
                  <Link
                    href="#skills"
                    className="inline-block text-base hover:text-primary transition-all duration-500 mb-3 text-slate-300"
                  >
                    Kemampuan
                  </Link>
                </li>
                <li className="inline-block mr-4">
                  <Link
                    href="#clients"
                    className="inline-block text-base hover:text-primary transition-all duration-500 mb-3 text-slate-300"
                  >
                    Klien
                  </Link>
                </li>
                <li className="inline-block mr-4">
                  <Link
                    href="#blog"
                    className="inline-block text-base hover:text-primary transition-all duration-500 mb-3 text-slate-300"
                  >
                    Blog
                  </Link>
                </li>
                <li className="inline-block mr-4">
                  <Link
                    href="#contact"
                    className="inline-block text-base hover:text-primary transition-all duration-500 mb-3 text-slate-300"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full py-8 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <Link
                href="https://linkedin.com/in/andika-alakate/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa text-slate-300 fa-linkedin-square" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://github.com/andikaalakate/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa text-slate-300 fa-github" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://www.youtube.com/@andikaalakate/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa text-slate-300 fa-youtube-play" aria-hidden="true"></i>
              </Link>
              <Link
                href="https://www.instagram.com/andika46710_/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa text-slate-300 fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                href="hhttps://twitter.com/Andika46710_/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa text-slate-300 fa-twitter" aria-hidden="true"></i>
              </Link>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan <span className="text-pink-500">❤️</span>, oleh{" "}
              <Link
                href="https://github.com/andikaalakate/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary"
              >
                Andika Alakate
              </Link>
              , menggunakan{" "}
              <Link
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
              >
                TailwindCSS
              </Link>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
