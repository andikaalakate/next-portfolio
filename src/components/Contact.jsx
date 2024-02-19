const Contact = () => {
  return (
    <>
    <section id="contact" className="px-1 w-full">
        <div className="container shadow-md bg-white py-16 animate__animated animate__fadeInUp">
            <div className="w-full px-4 pb-4">
                <div className="max-w-5xl mx-auto text-center pt-8 animate__animated animate__fadeInUp">
                    <h4 className="font-semibold text-lg text-primary mb-2">Kontak</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Hubungi Kami</h2>
                    <p className="font-medium text-md text-dark_sec md:text-lg pb-4">Untuk informasi lebih lanjut atau pertanyaan, jangan ragu untuk menghubungi kami melalui formulir di bawah ini atau melalui kontak yang tersedia. Kami akan dengan senang hati membantu Anda.</p>
                </div>

                <form>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 pb-8">
                            <label htmlFor="name"
                                className="text-base font-bold text-primary animate__animated animate__slideInDown">Nama</label>
                            <input type="text" id="name"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary animate__animated animate__slideInRight" />
                        </div>
                        <div className="w-full px-4 pb-8">
                            <label htmlFor="email"
                                className="text-base font-bold text-primary animate__animated animate__slideInDown">Email</label>
                            <input type="email" id="email"
                                className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary animate__animated animate__slideInRight" />
                        </div>
                        <div className="w-full px-4 pb-4">
                            <label htmlFor="pesan"
                                className="text-base font-bold text-primary animate__animated animate__slideInDown">Pesan</label>
                            <textarea id="pesan"
                                className="w-full bg-slate-200 text-dark rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32 animate__animated animate__slideInRight">
                        </textarea>
                        </div>
                        <div className="w-full px-4 pb-8">
                            <button
                                className="text-sm font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-75 transition-all duration-500 ease-in-out mini:py-2 mini:px-5 animate__animated animate__slideInDown">
                                Kirim
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact