import React from 'react';

export default function About() {
  return (
    <div>
      {/* صورة الهيرو */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/photo1.png"
          alt="About IREGO"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            IREGO <span className="text-orange-500">EXPO</span>
          </h1>
        </div>
      </div>

      {/* مقدمة */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-lg md:text-3xl font-semibold">
          IREGO <span className="text-orange-500 uppercase font-bold">EXPO</span>
        </h1>
        <p className="text-gray-700 text-sm md:text-base mb-8">
          Exhibition on Renewable Energy, Oil, Gas, and Climate Change
          <br />
          <span>
            A unique platform connecting companies and institutions in the field of sustainable energy and climate solutions. Join us in shaping the future of energy and environmental sustainability.
          </span>
        </p>
      </div>

      {/* صورة + شرح المعرض */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2">
          <img
            src="/photoo9.png"
            alt="Conference Visual"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-lg md:text-3xl font-semibold">
            ABOUT THE <span className="text-orange-500 uppercase font-bold">EXPO</span>
          </h2>
          <p className="mt-2 text-gray-700 leading-relaxed">
            The IREGO EXPO provides an opportunity to showcase the latest innovations, technologies, and solutions in renewable energy, oil, gas, and climate-related sectors. It encourages interaction and collaboration between industry leaders, startups, and research institutions.
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Our platform serves as a catalyst for meaningful discussions, partnerships, and breakthrough innovations in sustainable energy solutions. Join us in creating a more sustainable future for generations to come.
          </p>
        </div>
      </div>

      {/* أهداف المعرض */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-lg md:text-3xl font-semibold">
          Objectives of <span className="text-orange-500 uppercase font-bold">the Expo</span>
        </h1>
      </div>

      {/* قائمة الأهداف */}
      <div className="transition duration-700 ease-in-out max-w-5xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Innovation Showcase',
            img: '/a1.png',
            role: 'Present the latest innovations in energy and climate solutions',
          },
          {
            name: 'Industry Collaboration',
            img: '/a2.png',
            role: 'Foster partnerships between companies and institutions',
          },
          {
            name: 'Knowledge Sharing',
            img: '/a3.png',
            role: 'Raise awareness and promote dialogue on sustainability',
          },
          {
            name: 'Environmental Impact',
            img: '/a4.png',
            role: 'Support initiatives for clean and sustainable energy',
          },
          {
            name: 'Economic Growth',
            img: '/a5.png',
            role: 'Stimulate green economic growth and innovation',
          },
        ].map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Key Themes & Focus Areas */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-lg md:text-3xl font-semibold">
          Key Themes & <span className="text-orange-500 uppercase font-bold">Focus Areas</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-6">
        {[
          {
            img: '/m1.png',
            title: 'Renewable Energy',
            points: ['Solar, wind, geothermal, and biomass solutions'],
          },
          {
            img: '/m2.png',
            title: 'Oil & Gas',
            points: ['Sustainability strategies and future technologies'],
          },
          {
            img: '/m3.png',
            title: 'Technological Innovation',
            points: ['AI, robotics, and digital monitoring solutions'],
          },
          {
            img: '/m4.png',
            title: 'Climate Change',
            points: ['Mitigation strategies and environmental impact'],
          },
          {
            img: '/m1.png',
            title: 'Environmental Startups',
            points: ['Project ideas for environmental protection'],
          },
        ].map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-4 text-center">
            <img src={section.img} alt={section.title} className="w-66 h-46 mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">{section.title}</h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>



<div className="bg-orange-400  py-16 px-6 text-center">
  <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
    Join the Future of Energy
  </h2>
  <p className="max-w-3xl  mx-auto text-sm md:text-lg mb-8 text-gray-700">
    Be part of the transformation towards a sustainable energy future. Connect with industry leaders, discover innovative solutions, and shape the future of energy.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
    <button className="bg-white text-orange-500 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition">
      Register Now
    </button>
    <button className="bg-orange-500 text-gray-700 font-semibold py-3 px-6 rounded-full hover:bg-orange-700 transition">
      Become an Exhibitor
    </button>
  </div>
</div>







    </div>
  );
}
