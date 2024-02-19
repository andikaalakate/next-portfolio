const Skills = () => {
  const skillsData = [
    {
      title: "HTML",
      description:
        "Pengalaman dalam membuat struktur dan konten halaman web menggunakan HTML.",
      image: "./img/logo/html.jpg",
    },
    {
      title: "CSS",
      description:
        "Pengalaman dalam mendesain tata letak dan tampilan halaman web menggunakan CSS.",
      image: "./img/logo/css.png",
    },
    {
      title: "JavaScript",
      description:
        "Pengalaman dalam mengembangkan fungsionalitas dinamis pada halaman web menggunakan JavaScript.",
      image: "./img/logo/js.jpg",
    },
    {
      title: "PHP",
      description:
        "Pengalaman dalam pengembangan aplikasi web berbasis server menggunakan PHP.",
      image: "./img/logo/php-1.png",
    },
    {
      title: "PHP & MySQL",
      description:
        "Pengalaman dalam mengintegrasikan PHP dengan basis data MySQL untuk aplikasi web.",
      image: "./img/logo/php-mysql.jpg",
    },
    {
      title: "NodeJS",
      description:
        "Pengalaman dalam pengembangan aplikasi web menggunakan platform Node.js.",
      image: "./img/logo/node-js.png",
    },
    {
      title: "ReactJS",
      description:
        "Pengalaman dalam pengembangan aplikasi web interaktif menggunakan ReactJS.",
      image: "./img/logo/react.png",
    },
    {
      title: "NextJS",
      description:
        "Pengalaman dalam pengembangan aplikasi web fullstack menggunakan NextJS yang merupakan Framework dari ReactJS.",
      image: "./img/logo/nextjs.png",
    },
    {
      title: "Laravel",
      description:
        "Pengalaman dalam pengembangan aplikasi web Fullstack menggunakan Laravel sebagai Backend yang merupakan Framework PHP dan ReactJS sebagai Frontend nya.",
      image: "./img/logo/laravel.png",
    },
    {
      title: "TailwindCSS",
      description:
        "Pengalaman dalam pengembangan aplikasi web yang variatif dan modern menggunakan TailwindCSS yang merupakan Framework CSS.",
      image: "./img/logo/tailwind.jpg",
    },
    {
      title: "PostgreSQL",
      description:
        "Pengalaman dalam pengembangan aplikasi web yang berbasis database PostgreSQL.",
      image: "./img/logo/postgressql.jpg",
    },
  ];

  return (
    <>
      <section id="skills" className="px-1 w-full">
        <div
          className="container shadow-md py-16"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="max-w-xl mx-auto text-center pt-10 px-4">
            <h4 className="font-bold uppercase text-primary text-lg mb-3 text-center">
              Kemampuan
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Apa Yang Saya Bisa?
            </h2>
            <p className="font-medium text-md text-dark_sec md:text-lg">
              Saya memiliki berbagai kemampuan dalam bidang pengembangan web.
              Berikut adalah beberapa diantaranya:
            </p>
          </div>
          <div className="flex p-4 flex-wrap mx-auto flex-1 gap-6 justify-center">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="max-w-full sm:w-full md:max-w-2xl lg:max-w-md xl:w-1/4 bg-white shadow-lg rounded-xl"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                <div className="rounded-t-xl shadow-md overflow-hidden">
                  {/* Apply the object-cover class to the image */}
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full lg:h-48 object-cover"
                  />
                </div>
                <div className="w-full py-8 px-6">
                  <h3 className="font-semibold text-xl mb-3">{skill.title}</h3>
                  <p className="font-medium text-base text-dark_sec pb-4">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
