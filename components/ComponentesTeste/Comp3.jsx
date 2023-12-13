import React from 'react'

const Comp3 = () => {
  return (
    <div>
        <div className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-8 mx-auto" data-aos="fade-in" data-aos-duration="2000">
    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
      Conheça nossos planos Mensais
    </h1>
    <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
    Estamos aqui para fortalecer sua presença digital e garantir que sua marca seja acessível a todos, mantendo-se atualizada e impactante
    </p>
    <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
      <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700" data-aos="fade-down" data-aos-duration="2000">
        <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
          Prata
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
          R$99,90
        </h2>
        <p className="font-medium text-gray-500 dark:text-gray-300">
          Plano Mensal
        </p>
        <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Saiba Mais
        </button>
      </div>
      <div className="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg" data-aos="fade-up" data-aos-duration="2000">
        <p className="font-medium text-gray-200 uppercase">Premium</p>
        <h2 className="text-5xl font-bold text-white uppercase dark:text-gray-100">
          R$199,90
        </h2>
        <p className="font-medium text-gray-200">Plano Mensal</p>
        <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
          Saiba Mais
        </button>
      </div>
      <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700" data-aos="fade-down" data-aos-duration="2000">
        <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
          Avançado
        </p>
        <h2 className="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
          R$299,90
        </h2>
        <p className="font-medium text-gray-500 dark:text-gray-300">
        Plano Mensal
        </p>
        <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Saiba Mais
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Comp3