// components/About.tsx
import React from 'react';
import {
  FaSun,
  FaLeaf,
  FaSeedling,
  FaOilCan
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
            SUBMISSION
          </h1>
        </div>
      </div>



  {/* مقدمة المؤتمر */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        
        <h2 className="text-lg md:text-2xl font-semibold">
         Submit Your{'  '} 
          <span className="text-orange-500 uppercase font-bold">
         Paper
          </span>
        </h2>

        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-2xl">
         We invite researchers, academics, and industry professionals to submit their original research papers for presentation at the International Renewable Energy, Gas & Oil, and Climate Change Conference. The conference provides a platform for sharing innovative ideas and fostering collaboration in the field of renewable energy and climate change.
        </p>
      </div>





  {/* مقدمة المؤتمر */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-2xl font-semibold">
        Submission {' '}
          <span className="text-orange-500 uppercase font-bold">
  Process
          </span>
        </h2>
      
      </div>






        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-6">
          {/* كل كارت */}
          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaSun className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
           Prepare Manuscript
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Follow IEEE formatting guidelines</li>
      
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaLeaf className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
            Review Content
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Ensure originality and quality</li>
        
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaSeedling className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
           Submit Online
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Upload through our system</li>
          
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-4 text-center">
            <FaOilCan className="text-orange-500 text-4xl mx-auto mb-2" />
            <h2 className="text-orange-500 text-lg font-bold mb-3">
            Track Status
            </h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li>Monitor review progress</li>
             
            </ul>
          </div>
</div>


<h2 className="text-2xl md:text-3xl font-bold text-center mt-16">
  <span className="text-orange-500">Conference</span> Timeline
</h2>
<div className="mt-10 flex flex-row flex-wrap items-center justify-center gap-12 px-4 max-w-5xl mx-auto">
  {/* النقطة 1 */}
  <div className="flex flex-col items-center min-w-[150px]">
    <div className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full shadow-md mb-2">
      June 15, 2025
    </div>
    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg mb-2" />
    <p className="text-center text-sm md:text-base font-medium">Abstract Submission Deadline</p>
  </div>

  {/* النقطة 2 */}
  <div className="flex flex-col items-center min-w-[150px]">
    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg mb-2" />
    <p className="text-center text-sm md:text-base font-medium">Notification of Acceptance</p>
    <div className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full shadow-md mt-2">
      August 15, 2025
    </div>
  </div>

  {/* النقطة 3 */}
  <div className="flex flex-col items-center min-w-[150px]">
    <div className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full shadow-md mb-2">
      October 1, 2025
    </div>
    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg mb-2" />
    <p className="text-center text-sm md:text-base font-medium">Final Paper Submission</p>
  </div>

  {/* النقطة 4 */}
  <div className="flex flex-col items-center min-w-[150px]">
    <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg mb-2" />
    <p className="text-center text-sm md:text-base font-medium">Conference Dates</p>
    <div className="bg-orange-500 text-white text-sm px-4 py-1 rounded-full shadow-md mt-2">
      November 25–27, 2025
    </div>
  </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mt-12">

  {/* القسم الأيمن - Review Process */}
  <div>
    <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
      Review Process
    </h2>
    <div className="space-y-4 text-gray-700 text-sm md:text-base">
      <div className="flex items-start gap-2">
        <span className="font-bold text-orange-500">1.</span>
        <p>Manuscripts will undergo peer review by experts in the field.</p>
      </div>
      <div className="flex items-start gap-2">
        <span className="font-bold text-orange-500">2.</span>
        <p>Reviewers will evaluate originality, methodology, and contribution.</p>
      </div>
      <div className="flex items-start gap-2">
        <span className="font-bold text-orange-500">3.</span>
        <p>Authors will receive detailed feedback and suggestions.</p>
      </div>
      <div className="flex items-start gap-2">
        <span className="font-bold text-orange-500">4.</span>
        <p>Final decisions will be communicated within 4 weeks.</p>
      </div>
    </div>
  </div>

  {/* القسم الأيسر - Publication and Indexing */}
  <div>
    <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-4">
      Publication and Indexing
    </h2>
    <div className="space-y-4 text-gray-700 text-sm md:text-base">
      <div className="flex items-start gap-2">
        <span className="text-green-600 font-bold">✔</span>
        <p>Accepted papers will be published in conference proceedings.</p>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-600 font-bold">✔</span>
        <p>Proceedings will be indexed in major academic databases.</p>
      </div>
      <div className="flex items-start gap-2">
        <span className="text-green-600 font-bold">✔</span>
        <p>Selected papers may be invited for journal publication.</p>
      </div>
    </div>
  </div>

</div>

 <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
 
        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-2xl">
For any questions about paper submission, please contact us at:        </p>
      </div>


 <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-lg md:text-xl font-semibold">
    {' '}
          <span className="text-orange-500 uppercase font-bold">
        info@iregco-conference.ly
          </span>
        </h2>
       
      </div>

<div className="mt-10 flex justify-center">
  <a
    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIREGOCC2025" // ← غيّر المسار حسب صفحتك الحقيقية
    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition flex items-center gap-2"
  >
    <i className="fas fa-file-upload"></i>
 Submit Your Paper
  </a>
</div>




    </div>
  );
}

