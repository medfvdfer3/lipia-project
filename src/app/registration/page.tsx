'use client';
import React from "react";

const registrationFees = [
  { category: "Local participants", fee: "LD 200" },
  { category: "International participants", fee: "EUR 200" },
];

const whatsIncluded = [
  "Admission to all conference sessions and Expo",
  "Access to keynote speeches and panels",
  "Conference materials (badge, program booklet)",
  "Coffee breaks and lunches",
  "Transportation from/to MITIQA Airport",
  "Certificate of participation",
];

const howtoregister = [
  {
    text: "Click registration ",
    link: "https://irego-conference.ly/submit1.php",
  },
  { text: "Fill out the form with your details" },
  { text: "Select your registration category and payment method." },
  { text: "Receive confirmation email" },
];

const getImageName = (index: number) => {
  const imageNumber = (index % 6) + 1;
  return `/a${imageNumber}.png`;
};

const Page: React.FC = () => {
  return (
    <>
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/photo1.png"
          alt="About IREGO"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white animate-fade-in-up">
            Regist<span className="text-orange-500">ration</span>
          </h1>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto p-8">
        <div className="border-t-4 border-orange-500 w-[250px] mb-4"></div>
        <p className="text-lg leading-relaxed">
          We are delighted to invite you to register for the International Renewable
          Energy, Gas & Oil, and Climate Change Conference. Please complete your
          registration to secure your participation in this exciting event.
        </p>

        <section className="mt-8">
          <h2 className="text-xl font-bold mb-4">Registration Fees</h2>
          <table className="w-full border-collapse">
            <thead className="bg-orange-100">
              <tr>
                <th className="text-left text-orange-800 p-3">Category</th>
                <th className="text-left text-orange-800 p-3">Fees</th>
              </tr>
            </thead>
            <tbody>
              {registrationFees.map(({ category, fee }) => (
                <tr key={category} className="border-t border-gray-300">
                  <td className="p-3">{category}</td>
                  <td className="p-3">{fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">What&apos;s Included</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {whatsIncluded.map((item, index) => (
              <div
                key={index}
                className="border border-orange-200 p-4 rounded-xl flex items-center gap-3 shadow-md animate-fade-in"
              >
                <img
                  className="bg-orange-100 p-2 rounded-full font-bold"
                  style={{ height: "40px", width: "45px" }}
                  src={getImageName(index)}
                  alt=""
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-6">How to Register</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {howtoregister.map((item, index) => (
              <div
                key={index}
                className="border border-orange-200 p-4 rounded-xl flex items-center gap-3 shadow-md animate-fade-in-delay"
              >
                <img
                  className="bg-orange-100 p-2 rounded-full font-bold"
                  style={{ height: "40px", width: "45px" }}
                  src={getImageName(index)}
                  alt=""
                />
             {item.link ? (
  <a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 text-sm font-medium text-center w-full text-nowrap"
  >
    {item.text}
  </a>
) : (
  <span>{item.text}</span>
)}

              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 border border-orange-300 p-4 rounded-md shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/a6.png"
              alt="Payment icon"
              style={{ height: "30px", width: "30px" }}
            />
            <h2 className="text-md font-bold text-black">Payment Information</h2>
          </div>
          <p className="text-sm text-gray-800">
            Payments are to be made in cash upon arrival at the conference venue.
          </p>
        </section>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Page;
