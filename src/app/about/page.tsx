// components/About.tsx
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
            About <span className="text-orange-500">IREGO</span>
          </h1>
        </div>
      </div>

      {/* المحتوى تحت الصورة */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row justify-between gap-8 text-gray-800">
        {/* الجهة الشمال */}
        <div className="flex flex-col items-center relative w-max mx-auto">
          <span className="text-4xl font-bold text-black relative" style={{ left: '5%' }}>
            About
          </span>
          <span className="text-4xl font-bold text-orange-500">
            The Conference
          </span>
        </div>

        {/* الجهة اليمين */}
        <p className="max-w-xl text-md leading-relaxed">
          The Renewable Energy, Gas & Oil, and Climate Change Conference will be held in Tripoli, Libya, in November 2025.
          Bringing together global experts, researchers, and policymakers, the event aims to foster collaboration and drive innovative solutions for sustainable energy and climate resilience.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-start gap-8">
        {/* الصورة على اليسار */}
        <div className="w-full md:w-1/2">
          <img
            src="/photo9.jpg"
            alt="Conference Visual"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* النصوص على اليمين */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h3 className="text-orange-500 text-lg font-semibold uppercase">01- Academic Engagement and Research Contributions</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              The conference will feature research paper presentations on renewable energy, oil and gas, and climate change. These contributions will support local and international scientific progress and promote knowledge exchange among experts.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 text-lg font-semibold uppercase">02- Industry Exhibition and Technological Innovation</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              A large exhibition will showcase the latest energy and environmental technologies, offering companies and innovators a chance to present their work and connect with global stakeholders.
            </p>
          </div>

          <div>
            <h3 className="text-orange-500 text-lg font-semibold uppercase">03- Dialogue, Collaboration, and Sustainable Development</h3>
            <p className="mt-2 text-gray-700 leading-relaxed">
              The conference will feature discussions, workshops, and networking to promote sustainable energy, environmental responsibility, and alignment with national goals and the UN SDGs.
            </p>
          </div>
        </div>
      </div>

      {/* مهمتنا */}
      <div className="flex justify-center w-full px-4 py-12">
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">
            OUR <span className="text-orange-500">MISSION</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            To foster the exchange of knowledge and experiences among diverse stakeholders in the energy sector, promoting innovation and driving the development of practical solutions to tackle global environmental and energy challenges.
          </p>
        </div>
      </div>

      {/* رؤيتنا */}
      <div className="flex justify-center w-full px-4 py-12">
        <div className="w-full md:w-1/2 text-center">
          <h2 className="text-3xl font-bold uppercase mb-4">
            OUR <span className="text-orange-500">Vision</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
           To establish the conference as a premier and innovative platform in the energy field, facilitating global dialogue and spearheading the transition to sustainable energy systems. Through these efforts, we aim to contribute to achieving sustainable development goals and advancing climate change adaptation
          </p>
        </div>
      </div>



    </div>
  );
}
