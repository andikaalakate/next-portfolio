const Clients = () => {
  return (
    <>
      <section id="clients" className="px-1 w-full">
        <div
          className="container shadow-md bg-slate-800 py-16"
          data-aos="zoom-in-up"
        >
          <div className="w-full px-4 pb-4">
            <div className="max-w-5xl mx-auto text-center pt-8">
              <h4 className="font-semibold text-lg text-primary mb-2">
                Clients
              </h4>
              <h2 className="font-bold text-slate-200 text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Yang Pernah Bekerjasama
              </h2>
              <p className="font-medium text-md text-dark_sec md:text-lg">
                Berikut adalah beberapa klien yang pernah kami layani dengan
                baik.
              </p>
            </div>
          </div>

          <div className="w-full px-4 pb-8">
            <div className="flex flex-wrap items-center justify-center">
              <a href="" className="flex items-center">
                <img
                  src="./img/gadak-studio.webp"
                  className="rounded-full w-10 h-10"
                  alt=""
                />
                <span className="ml-4 font-bold text-slate-200 text-lg">
                  GADAK STUDIO
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
