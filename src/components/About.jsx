import Link from 'next/link'

const About = () => {
  return (
    <>
      <section id="about" className="px-1 w-full">
        <div className="container shadow-md py-16">
          <div className="flex flex-wrap">
            <div className="w-full pt-10 px-4 mb-10 lg:w-1/2">
              <h4 className="font-bold uppercase text-primary text-lg mb-3">
                Tentang Saya
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-md">
                Yuk, Belajar Web Programming di GADAK!
              </h2>
              <p className="font-medium text-base text-dark_sec max-w-xl">
                Saya percaya bahwa pembelajaran adalah kunci kesuksesan dalam
                dunia web programming. Mari bergabung dan tingkatkan
                keterampilan Anda bersama GADAK, tempat terbaik untuk belajar!
              </p>
            </div>
            <div className="w-full pb-4 px-4 lg:w-1/2 lg:pt-20">
              <h3 className="font-medium text-dark text-2xl mb-5 max-w-md">
                Mari Berteman
              </h3>
              <p className="font-medium text-base text-dark_sec max-w-xl mb-3">
                Saya senang berbagi pengetahuan dan pengalaman dalam dunia web
                programming. Mari kita saling berteman dan berkolaborasi untuk
                mencapai kesuksesan bersama!
              </p>
              <div className="flex items-center">
                <Link
                  href="https://linkedin.com/in/andika-alakate/"
                  className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </Link>
                <Link
                  href="https://github.com/andikaalakate/"
                  className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </Link>
                <Link
                  href="https://www.youtube.com/@andikaalakate/"
                  className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </Link>
                <Link
                  href="https://www.instagram.com/andika46710_/"
                  className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </Link>
                <Link
                  href="hhttps://twitter.com/Andika46710_/"
                  className="w-9 h-9 mr-3 transition-all duration-500 text-slate-300 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About