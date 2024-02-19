const Footer = () => {
  return (
    <>
      <footer className="px-1 pb-4 w-full">
        <div className="container shadow-xl bg-dark rounded-b-xl animate__animated animate__slideInUp">
          <div className="flex flex-wrap max-w-5xl mx-auto pt-16 animate__animated animate__slideInUp">
            <div className="w-full p-4 mb-6 sm:w-1/2 md:w-1/3 text-slate-300 font-medium">
              <h2 className="font-bold text-4xl text-white mb-5">ALAKATE</h2>
              <h3 className="font-bold text-2xl text-white mb-2">
                Hubungi Kami
              </h3>
              <p>andikaalakate@gmail.com</p>
              <p>Medan Tembung</p>
              <p>Sumatera Utara, Indonesia</p>
            </div>
            <div className="w-full p-4 mb-6 sm:w-1/2 md:w-1/3 text-slate-300 font-medium">
              <h3 className="font-semibold text-xl text-white mb-5">
                Kategori Tulisan
              </h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Teknologi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Musik
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    AniManga
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full p-4 mb-6 sm:w-1/2 md:w-1/3 text-slate-300 font-medium">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <a
                    href="#home"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Kemampuan
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Klein
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full py-8 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <a
                href="https://linkedin.com/in/andika-alakate/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </a>
              <a
                href="https://github.com/andikaalakate/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.youtube.com/@andikaalakate/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/andika46710_/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a
                href="hhttps://twitter.com/Andika46710_/"
                className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan <span className="text-pink-500">❤️</span>, oleh{" "}
              <a
                href="https://github.com/andikaalakate/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-primary"
              >
                Andika Alakate
              </a>
              , menggunakan{" "}
              <a
                href="https://tailwindcss.com"
                className="text-transparent font-bold bg-gradient-to-br from-blue-400 to-green-300 bg-clip-text"
              >
                TailwindCSS
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
