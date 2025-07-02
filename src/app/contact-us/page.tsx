function page() {
  return (
    <>
      {/* Header Image Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/photo1.png"
          alt="About IREGO"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Contact <span className="text-orange-500">Us</span>
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className="bg-orange-50 rounded-2xl p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <img src="/document_svgrepo.com.png" alt="Phone Icon" className="h-6 w-6" />
                </div>
              </div>
              <h2 className="font-semibold text-xl mb-2">Phone</h2>
              <p className="text-gray-600 text-sm mb-4">
                To communicate, please call the following numbers:
              </p>
              <div className="text-sm font-semibold text-blue-900 space-y-1">
                <p>0021894-444-4882</p>
                <p>0021894-444-4883</p>
                <p>0039339-299-9065</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-orange-50 rounded-2xl p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <img src="/document_svgrepo.com.png" alt="Email Icon" className="h-6 w-6" />
                </div>
              </div>
              <h2 className="font-semibold text-xl mb-2">Email</h2>
              <p className="text-gray-600 text-sm mb-4">
                To communicate via email, please write to:
              </p>
              <p className="text-sm font-semibold text-blue-900">info@irego-conference.ly</p>
            </div>

            {/* Location Card */}
            <div className="bg-orange-50 rounded-2xl p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <img src="/document_svgrepo.com.png" alt="Location Icon" className="h-6 w-6" />
                </div>
              </div>
              <h2 className="font-semibold text-xl mb-2">Location</h2>
              <p className="text-gray-600 text-sm mb-4">Tripoli International Fair</p>
              <a
                href="https://maps.google.com"
                className="text-sm font-semibold text-blue-900 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="mt-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.158870268082!2d13.171799774743023!3d32.89290187364118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a8910cc43103d5%3A0x5ee4f535e83858ef!2sTripoli%20Fairground!5e0!3m2!1sen!2sly!4v1717847502879!5m2!1sen!2sly"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
