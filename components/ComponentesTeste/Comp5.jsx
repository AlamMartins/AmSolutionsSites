import React from 'react'


const Comp5 = () => {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900" data-aos="zoom-in-up" data-aos-duration="1500">
  <div className="max-w-6xl px-6 py-10 mx-auto">
    <p className="text-xl font-medium text-blue-500 ">Sobre o AM Solutions</p>
    <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
      Saiba mais sobre nossa Empresa
    </h1>
    <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
      <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl" data-aos="flip-down" data-aos-duration="2500"/>
      <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
        <img
          className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
        //   src="https://i.postimg.cc/Hs4CXkXD/14.jpg"
          src="https://i.postimg.cc/rp4KYwny/11.jpg"
          alt="client photo"
        />
        <div className="mt-2 md:mx-6">
          <div>
            <p className="text-xl font-medium tracking-tight text-white">
             @amsolutionsti
            </p>
            <p className="text-blue-200 ">Qualidade e Eficiência</p>
          </div>
          <p className="mt-4 text-ms leading-relaxed text-white md:text-sm" data-aos="zoom-in" data-aos-duration="2500">
            {" "}
            Bem-vindo à AM Solutions, sua parceira confiável para acessibilidade e inovação. Com mais de 10 anos de experiência sólida no mercado, estamos comprometidos em oferecer soluções digitais e de infraestrutura que impulsionam o sucesso de diversas empresas. Contamos com uma equipe de profissionais altamente capacitados e especializados, prontos para fornecer o melhor suporte para o crescimento do seu negócio. Na AM Solutions, não apenas cumprimos as expectativas, mas as superamos, criando um caminho sólido e acessível para o futuro digital da sua empresa. Junte-se a nós e descubra como podemos transformar suas metas em realidade.
          </p>
          {/* <div className="flex items-center justify-between mt-6 md:justify-start">
            <button
              title="left arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              title="right arrow"
              className="p-2 text-white transition-colors duration-300 border rounded-full rtl:-scale-x-100 md:mx-6 hover:bg-blue-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </main>
  </div>
</section>

    </div>
  )
}

export default Comp5