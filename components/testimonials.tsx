import Image from 'next/image'

import TestimonialImage01 from '../public/images/logoAM2.png'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 -mb-20 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-10">
            <h2 className="h2 mb-4 ">Sobre AM Solutions</h2>
            <p className="text-xl text-gray-400">A AM Solutions é uma empresa dedicada à manutenção de computadores, focada em fornecer serviços de qualidade e eficiência. Seu lema é garantir o melhor atendimento aos clientes, oferecendo soluções confiáveis e rápidas para suas necessidades tecnológicas.</p>
          </div>

      
            {/* 1st testimonial */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="flex flex-col h-full p-8 bg-indigo-950" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                  <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                  </svg>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">AM Solutions é altamente qualificada e comprometida com a qualidade. Com uma equipe especializada e um foco no atendimento ao cliente, você busca constantemente superar as expectativas. Está sempre atualizada com as últimas tendências e investe em treinamentos para oferecer soluções inovadoras. Seu objetivo é crescer no mercado, construindo relacionamentos duradouros com os clientes e estabelecendo uma reputação sólida. Com ética, transparência e excelência, sua empresa está pronta para se destacar e se tornar uma referência no setor.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Qualidade e Eficiência</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#sx">AM Solutions</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}
