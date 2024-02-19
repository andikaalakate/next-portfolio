const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Admin Dashboard",
      image: "./img/portfolio/pfl-1.webp",
      description:
        "Proyek ini menampilkan dashboard admin yang intuitif dengan antarmuka pengguna yang ramah. Dashboard ini dirancang untuk memudahkan visualisasi dan manajemen data.",
      link: "#",
    },
    {
      title: "Website Sekolah Jurusan Rekayasa Perangkat Lunak",
      image: "./img/portfolio/pfl-2.webp",
      description:
        "Website ini didedikasikan untuk mempromosikan Jurusan Rekayasa Perangkat Lunak di sebuah sekolah. Website ini menyediakan informasi tentang program, fakultas, dan sumber daya para siswa.",
      link: "https://gadakstd.my.id/web/andika/project_kessokuband/",
    },
    {
      title: "Undangan Pernikahan",
      image: "./img/portfolio/pfl-3.webp",
      description:
        "Proyek ini merupakan undangan pernikahan digital yang elegan dan personal. Dirancang untuk memberikan pengalaman undangan yang interaktif dengan fitur RSVP dan detail acara.",
      link: "https://andikaalakate.github.io/undangan-pernikahan/",
    },
    {
      title: "Kopi Kenangan",
      image: "./img/portfolio/pfl-4.webp",
      description:
        "Website ini merupakan platform untuk merek kopi yang menampilkan cerita merek, produk, dan promosi. Dibuat untuk memberikan pengalaman menarik bagi para penggemar kopi.",
      link: "https://andikaalakate.github.io/Kopi-Kenangan/",
    },
    {
      title: "Web Novel Reading v0.5",
      image: "./img/portfolio/pfl-5.webp",
      description:
        "Platform ini dikembangkan untuk membaca novel web dengan pengalaman yang mulus. Menawarkan fitur penelusuran, membaca, dan berinteraksi dengan komunitas.",
      link: "https://vantatranslation.site/",
    },
    {
      title: "Web Novel Reading v1.0",
      image: "./img/portfolio/vanta-laract.png",
      description:
        "Platform ini dikembangkan untuk membaca novel web dengan pengalaman yang mulus. Menawarkan fitur penelusuran, membaca, dan berinteraksi dengan komunitas. Note: Menggunakan Laravel dan React",
      link: "#",
    },
    {
      title: "Landing Page (Portfolio)",
      image: "./img/portfolio/portfolio.png",
      description:
        "Halaman landing ini merupakan showcase portofolio yang dirancang untuk memberikan gambaran tentang keterampilan dan proyek yang telah dikerjakan.",
      link: "#",
    },
    {
      title: "VantaNime.",
      image: "./img/portfolio/vantanime.png",
      description:
        "AniMangaList seperti Website MyAnimeList menggunakan API dari Jikan API. Ke depannya akan ada penambahan Fitur Forum serta Penambahan List Light Novel dari API yang berbeda.",
      link: "https://vantanime.vercel.app",
    },
    {
      title: "Alakate Network",
      image: "./img/portfolio/an.png",
      description:
        "Sebuah Landing Page Product / Service Promotion.",
      link: "https://andikaalakate.github.io/an-production",
    },
  ];
  return (
    <>
      <section id="portfolio" className="px-1 w-full">
        <div
          className="container bg-slate-100 shadow-md py-16"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-full px-4 pb-4">
            <div className="max-w-xl mx-auto text-center pt-8">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Portfolio
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Project Terbaru
              </h2>
              <p className="font-medium text-md text-dark_sec md:text-lg">
                Saya senang membagikan beberapa proyek terbaru saya. Setiap
                proyek ini merupakan hasil dari dedikasi dan keahlian saya dalam
                dunia pengembangan web.
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="mb-12 p-4 md:w-1/2"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <div className="rounded-md shadow-md overflow-hidden hover:scale-95 transition-all duration-500 hover:border-primary hover:shadow-xl">
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      width="w-full"
                      className="object-cover hover:scale-110 transition-all duration-500"
                    />
                  </a>
                </div>
                <h3 className="font-semibold text-xl mt-5 mb-3">
                  {item.title}
                </h3>
                <p className="font-medium text-base text-dark_sec">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
