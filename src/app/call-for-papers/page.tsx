// components/About.tsx
import React from 'react';
import {
  FaSun,
  FaLeaf,
  FaSeedling,
  FaOilCan,
  FaBalanceScale,
  FaGlobeAmericas,
  FaMapMarkedAlt,
  FaRobot,
} from 'react-icons/fa';

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
            Call For <span className="text-orange-500">Paper</span>
          </h1>
        </div>
      </div>

      {/* مقدمة المؤتمر */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-2xl font-semibold">
          International Renewable Energy, Gas & Oil{' '}
          <span className="text-orange-500 uppercase font-bold">
            and Climate Change Conference
          </span>
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-2xl">
          We invite scholars, researchers, professionals, and policymakers to
          submit papers for the 1st International Conference on Renewable
          Energy, Gas & Oil, and Climate Change. The event will explore the
          critical role of renewable energy in tackling climate change,
          reducing emissions, and advancing sustainable development through
          clean energy solutions like solar, wind, hydro, and geothermal.
        </p>
      </div>

      {/* العناوين */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-3xl font-semibold">
          Topics of{' '}
          <span className="text-orange-500 uppercase font-bold">Interest</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-6">
          {/* كل كارت */}
          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaSun className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Renewable Energy Technologies
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Solar</li>
              <li>WIND</li>
              <li>Hydro</li>
              <li>Geothermal</li>
              <li>Green hydrogen</li>
              <li>Efficiency</li>
              <li>Smart grids</li>
              <li>Biomass</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaLeaf className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Climate Change Mitigation
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Role of renewable energy</li>
              <li>Net-zero emissions</li>
              <li>Carbon capture</li>
              <li>Climate resilience</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaSeedling className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Sustainable Development
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Socio-economic impacts</li>
              <li>SDGs</li>
              <li>Energy access</li>
              <li>Community development</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaOilCan className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Oil and Gas Industry Transformation
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Transition to clean fuels</li>
              <li>Circular economy</li>
              <li>Digital transformation</li>
              <li>Sustainable extraction</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaBalanceScale className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Policy, Economics, Regulation
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Policies</li>
              <li>Cooperation</li>
              <li>Financing</li>
              <li>Market analysis</li>
              <li>Investment opportunities</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaGlobeAmericas className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Environmental & Social Impacts
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Biodiversity</li>
              <li>Public perception</li>
              <li>Environmental assessment</li>
              <li>Social impact</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaMapMarkedAlt className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              Applications of GIS & Remote Sensing
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Monitoring</li>
              <li>Spatial data analysis</li>
              <li>Compliance</li>
              <li>Resource mapping</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaRobot className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
              AI in Renewable Energy & Climate
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Forecasting</li>
              <li>ML models</li>
              <li>Monitoring</li>
              <li>Predictive analytics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* الإرشادات */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-3xl font-semibold">
          Submission{' '}
          <span className="text-orange-500 uppercase font-bold">
            Guidelines
          </span>
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-2xl">
          We invite researchers, practitioners, and industry experts to submit
          original papers that contribute to the advancement of renewable
          energy technologies and sustainable development. All submissions will
          undergo a rigorous peer-review process to ensure academic excellence
          and relevance to the conference themes.
        </p>
      </div>

      {/* ملاحظة 1 */}
      <div className="bg-orange-100 text-black border border-orange-300 rounded-xl p-4 my-6 text-center font-medium">
        Important: Papers must be original work not previously published or
        under review elsewhere.
      </div>

      {/* التنسيق */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-3xl font-semibold">
          Paper{' '}
          <span className="text-orange-500 uppercase font-bold">Format</span>
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-2xl">
          Papers should be submitted in IEEE format, not exceeding 6 pages.
          Authors are required to follow the IEEE formatting guidelines for
          conference papers.
        </p>
      </div>

      {/* ملاحظة 2 */}
      <div className="bg-orange-100 text-black border border-orange-300 rounded-xl p-4 my-6 text-center font-medium">
        Format Requirements: IEEE Xplore compatible format
      </div>
    </div>
  );
}
