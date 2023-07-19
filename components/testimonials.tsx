import Image from 'next/image'

import TestimonialImage01 from '../public/images/logoAM2.png'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (


 

<section>
<div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      
    <div class="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="text" id="name" name="name" placeholder="Digite o seu nome" />
    </div>
    <div class="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        {/* <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="john@example.com"> */}
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="Digite o seu e-mail" />
    </div>
    <div class="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        {/* <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="john@example.com"> */}
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="email" id="email" name="email" placeholder="Digite o seu e-mail" />
    </div>

    <div class="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">Confirm Password</label>
        {/* <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="password" id="confirm-password" name="confirm-password" placeholder="********"> */}
        {/* <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" type="password" id="confirm-password" name="confirm-password" placeholder="********"> */}
    </div>


    </form>
  </div>
</section>




    

  )
}
