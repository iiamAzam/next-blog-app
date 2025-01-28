"use client"

import React, { useEffect } from 'react'
import { Check } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Typed from 'typed.js';

function Home() {
    const animationtext = React.useRef(null)


    useEffect(()=>{
    const ti = new Typed(animationtext.current,{
        strings:['Tailwind CSS'],
        typeSpeed:50
    })
    return(()=>ti.destroy) 
  }
  )

  const blogs = [
    {
      title: 'Web Design Trends 2024',
      excerpt: 'Exploring the latest innovations in modern web design and user experience.',
      date: 'January 15, 2024',
      image: "https://images.pexels.com/photos/7679688/pexels-photo-7679688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: 'AI and Future of Development',
      excerpt: 'How artificial intelligence is transforming software engineering practices.',
      date: 'February 2, 2024',
      image: 'https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Responsive Design Masterclass',
      excerpt: 'Deep dive into creating seamless experiences across all device types.',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];



  const plans = [
    {
      name: 'Starter',
      price: 9.99,
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Limited support'
      ],
      mostPopular: false
    },
    {
      name: 'Pro',
      price: 29.99,
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'Custom integrations'
      ],
      mostPopular: true
    },
    {
      name: 'Enterprise',
      price: 99.99,
      features: [
        'Unlimited users',
        'Full analytics suite',
        '24/7 dedicated support',
        'Advanced security',
        'Custom solutions'
      ],
      mostPopular: false
    }
  ];




  return (
    <div className=''>
      <main className="flex-1 xl:pt-[5.5rem]"><section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center"><div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8" bis_skin_checked="1"><h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
        A <span className="font-semibold">free repository</span> for community  <br className="hidden lg:block" /> components using <span ref={animationtext} className="font-semibold underline decoration-primary"></span></h1> <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!</p> <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20" bis_skin_checked="1"><form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row"></form></div></div> <div className="w-full mt-4 lg:mt-0 lg:w-1/2" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" /></div></section>

        <section className="py-16 ">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold ">Latest Blog Posts</h2>
              <p className="mt-4 ">Insights and thoughts from our team</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <div
                  key={blog.title}
                  className="
                 border rounded-lg overflow-hidden 
                shadow-lg transform transition-all duration-300 
                hover:-translate-y-4 hover:shadow-2xl
                group cursor-pointer
              "
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold  mb-2">{blog.title}</h3>
                    <p className=" mb-4">{blog.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm ">{blog.date}</span>
                      <button
                        className="
                      flex items-center text-blue-600 
                      hover:text-blue-800 transition-colors
                      group-hover:translate-x-2 transform duration-300
                    "
                      >
                        Read More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold ">Pricing Plans</h2>
            <p className="mt-4 text-xl ">Choose the perfect plan for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                 border rounded-lg shadow-lg p-6 
                ${plan.mostPopular ? ' border-2 transform scale-105' : 'border-gray-200'}
                transition-all duration-300 hover:shadow-xl
              `}
              >
                {plan.mostPopular && (
                  <div className="text-center   py-1 mb-4 rounded">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-center  mb-4">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-extrabold ">${plan.price}</span>
                  <span className="text-base font-medium ">/month</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span className="">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`
                  w-full py-3 rounded-md font-semibold transition-colors duration-300
                  ${plan.mostPopular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }
                `}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4 py-10 mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Top creators</h3> <p className="mt-4 text-gray-500 dark:text-gray-400">Meet the foremost  creators within the realm Blog for you.</p> <div className="grid gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" bis_skin_checked="1"><a href="https://www.creative-tim.com/twcomponents/u/creative-tim" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/storage/avatars/TpXC86kLAsEjEFhN5zBp9Q8a8mzO4aigKXwfc5zm.jpg" alt="Creative Tim Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Adrian D'Souza</h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#1</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">200 Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/banny" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.gravatar.com/avatar/6dc5e4950b260687309cb98b1e54a539" alt="banny Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Nigel Fernandez</h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#2</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">123 Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/shehab-coding" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/storage/avatars/WkI7PkGHABCVvWWVtUHrC0XaDCmoUKDN5t5mpAwQ.jpg" alt="Shehab coding Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Keith Roberts
        </h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#3</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">97 Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/khatabwedaa" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/storage/avatars/ckQ2aybMQQJgUPv1HOe9XbpNmQmltLlWyy4CSVuJ.jpg" alt="khatabwedaa Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Gregory Newton</h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#4</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">92 Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/harrishash" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/storage/avatars/ILXgUJYPjEo0P9gYmGhFUpUfK0VaR4l7yAfAUMuS.png" alt="Harrishash Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Clifford Dawson
        </h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#5</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">81 Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/material-tailwind" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/storage/avatars/21ZisJofZDGSjmtcFGoLN7QhbCE6Np1rzwjqUZIN.jpg" alt="Material Tailwind Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Roger D'Mello</h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#6</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">81 Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/zoltanszogyenyi" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.creative-tim.com/twcomponents/storage/avatars/hvDqTaSchLjQZhxZu4Fksqia6vYMKwdv1IScC0vD.jpg" alt="zoltanszogyenyi Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Colin Hendricks
        </h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#7</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">65  Blogs</p></div></div></a> <a href="https://www.creative-tim.com/twcomponents/u/ale-2" className="p-4 transition-colors duration-200 bg-white border border-gray-200 rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-100"><div className="flex items-center gap-x-3" bis_skin_checked="1"><img src="https://www.gravatar.com/avatar/284fdb288be2f2e9668a366fcdd56dbd" alt="ale Profile on Tailwind Components Website" className="object-cover w-12 h-12 rounded-full" /> <div className="flex-1" bis_skin_checked="1"><div className="flex items-center justify-between" bis_skin_checked="1"><h2 className="font-semibold tracking-wide text-gray-800 dark:text-white">Fiona Clarke
        </h2> <p className="mt-1 text-sm font-medium tracking-wide text-gray-600 dark:text-gray-400">#8</p></div> <p className="mt-1 text-sm tracking-wide text-gray-600 dark:text-gray-400">63 Blogs</p></div></div></a></div></section>


    </div>
  )
}

export default Home