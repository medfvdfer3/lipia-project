'use client';
import React from 'react';

export default function Page() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">Committees</h1>
        </div>
      </div>

      {/* Conference Leadership */}
      <div className="mt-16 text-center">
        <span className="text-black text-3xl font-bold">Conference </span>
        <span className="text-orange-500 text-3xl font-semibold">Leadership</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="/ibrahim1.png"
            alt="Prof. Ibrahim Rahoma"
            className="w-24 h-24 object-cover rounded-full"
          />
          <div className="p-6 text-center md:text-left">
            <h3 className="text-xl font-bold">Prof. Ibrahim Rahoma</h3>
            <p className="text-orange-500 font-semibold">Conference Chair</p>
            <p className="text-gray-600 mt-2">
              College of Engineering Technology Janzour<br />
              Tripoli-Libya
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
          <img
            src="/mahboub.png"
            alt="Dr. Mahboub Edreder"
            className="w-24 h-24 object-cover rounded-full"
          />
          <div className="p-6 text-center md:text-left">
            <h3 className="text-xl font-bold">Dr. Mahboub Edreder</h3>
            <p className="text-orange-500 font-semibold">Conference Chair</p>
            <p className="text-gray-600 mt-2">
              National Oil Corporation<br />
              Tripoli-Libya
            </p>
          </div>
        </div>
      </div>

      {/* Advisory Committee */}
      <div className="mt-16 text-center">
        <span className="text-black text-4xl font-bold">Advisory </span>
        <span className="text-orange-500 text-4xl font-semibold">Committee</span>
      </div>

      <div className="max-w-5xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: 'Dr. Nouri Al-Fallo', icon: 'fa-solar-panel' },
          { name: 'Professor Dr. Mohamed Ben Ali', icon: 'fa-leaf' },
          { name: 'Professor Dr. Ahmed Aboudheir', icon: 'fa-globe-americas' },
          { name: 'Prof. Dr. Mohamed Al-jemni', icon: 'fa-industry', extra: '(IEEE Senior Member)' },
          { name: 'Dr Refai taher refai', icon: 'fa-leaf' },
          { name: 'Professor Dr. Habib Kammoun', icon: 'fa-leaf' },
        ].map((person, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <i className={`fas ${person.icon} text-orange-500`}></i>
              <h3 className="text-lg font-semibold">
                {person.name}
                {person.extra && (
                  <span className="block text-sm text-gray-500">{person.extra}</span>
                )}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Scientific Committee */}
      <div className="mt-16 text-center">
        <span className="text-black text-4xl font-bold">Scientific </span>
        <span className="text-orange-500 text-4xl font-semibold">Committee</span>
      </div>

      <div className="flex justify-center mt-16 px-4">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden max-w-md w-full">
          <img
            src="/mohamed.png"
            alt="Dr. Mohamed Al-Tuhami"
            className="w-24 h-24 object-cover rounded-full"
          />
          <div className="p-6 text-center md:text-left">
            <h3 className="text-xl font-bold">Dr. Mohamed Al-Tuhami</h3>
            <p className="text-orange-500 font-semibold">Conference Chair</p>
            <p className="text-gray-600 mt-2">
              College of Engineering Technology<br />
              Tripoli-Libya
            </p>
          </div>
        </div>
      </div>

      {/* Extra Members */}
      <div className=" transition duration-700 ease-in-out ... max-w-5xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Mr. Osama Al-Ghoul',
            img: '/Z.png',
            role: 'College of Engineering Technology, Janzour – Tripoli, Libya',
          },
          {
            name: 'Engg. Sohaila Abdelkarim',
            img: '/E.jpg',
            role: 'College of Engineering Technology, Janzour – Tripoli',
          },
          {
            name: 'Dr. Mohamed Karim KEFI',
            img: '/M.png',
            role: 'IDRAC Business School - France',
          },
          {
            name: 'Dr. Riyadh Ramadhan Ikreedeegh',
            img: '/T.png',
            role: 'Arabian Gulf Oil Company - Benghazi, Libya',
          },
 {
            name: 'Dr. Fathi Al-Hashimi',
            img: '/F.png',
            role: 'Libyan Academy for Postgraduate Studies – Libya',
          },
 {
            name: 'Dr. Mohamed Nouri Sbeta',
            img: '/M.png',
            role: ' Libyan Center for Climate Change Research – Tripoli, Libya',
          },
 {
            name: 'Dr. Nouri Al-Fallo,',
            img: '/N.jpg',
            role: ' Nafusa Oil Operations Company – Tripoli, Libya',
          },
 {
            name: 'Dr. Abdelsalam Al-Hanashi,',
            img: '/A.jpg',
            role: 'University of Pisa – Pisa, Italy',
          },

 {
            name: 'Dr. Hala Al-Khazandar',
            img: '/H.png',
            role: 'Islamic University of Gaza – Gaza, Palestine',
          },
 {
            name: 'Dr. Firas Obeidat',
            img: '/F.png',
            role: 'Philadelphia University – Jerash, Jordan',
          },
 {
            name: 'Dr. Yara Haddad',
            img: '/Y.svg',
            role: 'Al-Hussein Technical University – Amman, Jordan',
          },
 {
            name: 'Dr. Abdel Taleb Bun',
            img: '/A.jpg',
            role: ' Universiti Tun Hussein Onn – Malaysia',
          },
 {
            name: 'Dr. Anas Buer',
            img: '/A.jpg',
            role: 'University of Benghazi – Libya'
,
          },
 {
            name: 'Dr. Mohamed Almaktar',
            img: '/M.png',
            role: 'Benghazi - Libya',
          },
 {
            name: 'Dr. Yasser Nassar',
            img: '/Y.svg',
            role: 'Wadi Al-Shati University – Wadi Al-Shati, Libya',
          },

 {
            name: 'Dr. Abdelkader Al-Sherif',
            img: '/A.jpg',
            role: ' Faculty of Technical Sciences – Sabha, Libya',
          },


 {
            name: 'Dr. Taher Tata',
            img: '/T.png',
            role: ' Faculty of Technical Sciences – Sabha, Libya',
          },

 {
            name: 'Engg. Ahmed Lajili A.Ali',
            img: '/A.jpg',
            role: ' College of Engineering Technology, Janzour – Tripoli, Libya',
          },

        
 {
            name: 'Engg. Sohaila Abdelkarim',
            img: '/S.png',
            role: 'College of Engineering Technology, Janzour – Tripoli, Libya',
          },
          

 {
            name: 'Dr. Jamel Azibi, Law Faculty ',
            img: '/J.jpg',
            role: 'Law Faculty - Tunisia',
          },






 {
            name: 'Dr. Mohamed Karim KEFI',
            img: '/M.png',
            role: ' IDRAC Business School - Franceisia',
          },














        ].map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={member.img}
                alt={member.name}
                className="w-14 h-14 object-cover rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Another Leadership */}
      <div className="mt-16 text-center">
        <span className="text-black text-3xl font-bold">Conference </span>
        <span className="text-orange-500 text-3xl font-semibold">Leadership</span>
      </div>



      <div className="flex justify-center mt-16 px-4">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden max-w-md w-full">
          <img
            src="/mo.png"
            alt="Eng. Muad Muftah Al-Jarmi"
            className="w-24 h-24 object-cover rounded-full"
          />
          <div className="p-6 text-center md:text-left">
            <h3 className="text-xl font-bold">Eng. Muad Muftah Al-Jarmi</h3>
            <p className="text-orange-500 font-semibold">Conference Chair</p>
            <p className="text-gray-600 mt-2">
              Zawia Oil Refining Company<br />
              Tripoli-Libya
            </p>
          </div>
        </div>
      </div>
      
        






  <div className=" transition duration-700 ease-in-out ... max-w-5xl mx-auto mt-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            name: 'Fatima Al-Jahawi',
            img: '/F.png',
          },
          {
            name: 'Abdulshafi Fathi Al-Hadi',
            img: '/A.jpg',
          },
          {
            name: 'Ibtehal Mohammed Rasheed',
            img: '/E.jpg  ',
          },
          {
            name: 'Hanan Abdulqader Agmeid',
            img: '/H.png',
          },
 {
            name: 'Musab Mohammed Shauron',
            img: '/M.png',
          },
 {
            name: 'Zuheir Al-Marzouq',
            img: '/Z.png',
          },
 {
            name: 'Ibrahim Elashhab – Italy',
            img: '/E.jpg',
          },
 {
            name: 'Taha Al-Juwashi – Spain',
            img: '/T.png',
          },

 {
            name: 'Sara Al-Qadi',
            img: '/S.png',

          },
 {
            name: 'Othman Al-Werfalli – Germany',
            img: '/H.png',
          },
 {
            name: 'Wedad Al-Awami',
            img: '/M.png',
          },
 {
            name: 'Mohamed Al-Kouni Al-Ahrash – Germany',
            img: '/M.png',
          },
 {
            name: 'Khaled Liyas – United States of America',
            img: '/K.png',

          },
 {
            name: 'Asaad Khalifa',
            img: '/A.jpg',
          },

 {
            name: 'Taha Al-Juwashi – Spain',
            img: '/T.png  ',
          },









        ].map((member, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={member.img}
                alt={member.name}
                className="w-14 h-14 object-cover rounded-full"
              />
              <div >
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.img}</p>
              </div>
            </div>
          </div>
        ))}
      </div>















    </div>
  );
}
