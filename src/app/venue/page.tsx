'use client';
import React from 'react';

const hotels = [
  {
    name: "Bab Al Bahr Hotel",
    rooms: [
      {
        type: "Single Room",
        prices: [
          { label: "Libyans & Arabs", value: "350 LYD" },
          { label: "Foreigners", value: "80 USD" },
        ],
      },
      {
        type: "Suite",
        prices: [
          { label: "Libyans & Arabs", value: "500 LYD" },
          { label: "Foreigners", value: "100 USD" },
        ],
      },
    ],
  },
  {
    name: "Al Mahary Hotel",
    rooms: [
      {
        type: "Single Room",
        prices: [
          { label: "Libyans & Arabs", value: "500 LYD" },
          { label: "Foreigners", value: "100 USD" },
        ],
      },
      {
        type: "Suite",
        prices: [
          { label: "Libyans & Arabs", value: "750 LYD" },
          { label: "Foreigners", value: "160 USD" },
        ],
      },
    ],
  },
];

const services = [
  {
    title: "Airport Transfers",
    description: "Shuttle service from Mitiga Airport to designated hotels.",
    icon: "/a1.png",
  },
  {
    title: "Hotel to Venue Transfers",
    description: "Daily shuttle service from hotels to Tripoli International Fair.",
    icon: "/a2.png",
  },
  {
    title: "Coordination",
    description: "Coordinated by our dedicated team and international marketing offices.",
    icon: "/a3.png",
  },
  {
    title: "Flight Ticket Assistance",
    description: "Streamlined booking process and special conference rates.",
    icon: "/a4.png",
  },
  {
    title: "VIP Transfers",
    description: "Premium transportation for key individuals.",
    icon: "/a5.png",
  },
  {
    title: "Visa & Travel Support",
    description: "Assistance via international offices.",
    icon: "/a6.png",
  },
];

const Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Image Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/photo1.png"
          alt="About IREGO"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white animate-fade-in-up">
            VEN<span className="text-orange-500">UE</span>
          </h1>
        </div>
      </div>

      {/* Venue Details & Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">IREGO 2025 Venue</h2>
          <p className="text-orange-600 hover:text-orange-700 transition-colors duration-300 cursor-pointer select-text">
            info@iregco-conference.ly
          </p>
          <p className="text-orange-600 hover:text-orange-700 transition-colors duration-300 select-text">
            +218 123 456 789
          </p>
          <p className="text-gray-700">Tripoli, Libya</p>
        </div>

        <div>
          <iframe
            title="Tripoli, Libya Map"
            className="w-full h-64 md:h-80 rounded-lg shadow-md"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.1609%2C32.8708%2C13.2023%2C32.8897&layer=mapnik&marker=32.8795,13.1816"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Hotels Section */}
      <div className="px-6 pb-12">
        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="w-full md:w-[300px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative transition-transform hover:scale-[1.02]"
            >
              <h2 className="font-bold text-lg mb-4 text-gray-800">{hotel.name}</h2>

              {hotel.rooms.map((room) => (
                <div key={room.type} className="mb-4">
                  <h3 className="font-semibold text-sm text-gray-700 mb-2">{room.type}</h3>
                  {room.prices.map((price) => (
                    <div key={price.label} className="flex justify-between text-sm py-1">
                      <span className="text-gray-500">{price.label}</span>
                      <span className="font-medium text-gray-800">{price.value}</span>
                    </div>
                  ))}
                </div>
              ))}

              <div className="absolute top-6 right-6 w-6 h-6 rounded-md bg-orange-500 flex items-center justify-center cursor-pointer" title="Contact Hotel">
                <div className="w-3 h-[2px] bg-white" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-8 font-semibold text-gray-600">
          Note: For reservations, attendees should contact the hotels directly.
        </p>
      </div>

      {/* Transportation Section */}
      <section className="bg-white px-6 pb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Transportation & Transfers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="bg-orange-50 border border-gray-200 rounded-xl p-4 shadow-sm flex gap-4 items-start"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden">
                <img src={service.icon} alt={`${service.title} icon`} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6 text-gray-900">Official Airline Partner</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(3).map((service) => (
            <div
              key={service.title}
              className="bg-orange-50 border border-gray-200 rounded-xl p-4 shadow-sm flex gap-4 items-start"
            >
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden">
                <img src={service.icon} alt={`${service.title} icon`} className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-800">{service.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
