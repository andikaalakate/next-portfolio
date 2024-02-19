const Blogs = () => {
  const blogsData = [
    {
      title: "Oshi no Ko",
      image: "./img/blog/1311353-min.webp",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dolor odio, animi quidem nesciunt iure tenetur ipsum illum nulla similique inventore autem cumque rerum. Dicta.",
    },
    {
      title: "Rekomendasi PC Gaming",
      image:
        "./img/blog/B200207-Cover-Rekomendasi-PC-Gaming-7-Jutaan-scaled.jpg",
      description:
        "Bagikan rekomendasi PC gaming terbaik dengan spesifikasi yang terjangkau, cocok bagi penggemar game yang ingin merasakan kualitas grafis tinggi tanpa harus mengeluarkan biaya besar.",
    },
    {
      title: "Apakah AI Akan Menggantikan Pekerjaan Manusia?",
      image: "./img/blog/KGHEQUdX_2x.webp",
      description:
        "Telusuri perdebatan tentang dampak kecerdasan buatan terhadap pasar kerja manusia, dengan mempertimbangkan berbagai sudut pandang dan proyeksi masa depan.",
    },
    {
      title: "Kemajuan Teknologi Yang Sangat Pesat",
      image: "./img/blog/PAFzeYNp_4x.webp",
      description:
        "Jelajahi perkembangan teknologi yang sangat cepat dalam beberapa tahun terakhir, dengan menyoroti implikasi sosial dan ekonomi dari perkembangan tersebut.",
    },
    {
      title: "Pembahasan Mengenai Karakter Killua",
      image: "./img/blog/vXiqSDlI_4x.webp",
      description:
        "Gali lebih dalam karakter Killua dari serial anime terkenal, Hunter x Hunter, dengan fokus pada psikologi dan perannya dalam cerita.",
    },
  ];
  return (
    <>
      <section id="blog" className="px-1 w-full">
        <div
          className="container rounded-b-lg bg-slate-100 shadow-md py-16"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="w-full px-4 pb-4">
            <div className="max-w-xl mx-auto text-center pt-8">
              <h4 className="font-semibold text-lg text-primary mb-2">Blog</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-md text-dark_sec md:text-lg">
                Temukan berbagai artikel menarik dan informatif di sini. Dari
                ulasan produk hingga tips dan trik, ada banyak hal menarik yang
                bisa Anda dapatkan.
              </p>
            </div>
          </div>

          <div className="flex p-4 flex-wrap mx-auto flex-1 gap-6 justify-center">
            {blogsData.map((blog, index) => (
              <div
                key={index}
                className="max-w-full sm:w-full md:max-w-2xl lg:max-w-md xl:w-1/4 bg-white shadow-lg rounded-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <div className="rounded-t-xl shadow-md overflow-hidden">
                  {/* Apply the object-cover class to the image */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full lg:h-48 object-cover"
                  />
                </div>
                <div className="w-full py-8 px-6 h-auto">
                  <h3 className="font-semibold text-xl mb-3">{blog.title}</h3>
                  <p className="font-medium text-base text-dark_sec pb-4">
                    {blog.description}
                  </p>
                  <div className="absolute bottom-4 right-4">
                    <a
                      href="#"
                      className="text-sm font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-75 transition-all duration-500 ease-in-out mini:py-2 mini:px-5 self-start hover:underline"
                    >
                      Baca Selengkapnya ...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
