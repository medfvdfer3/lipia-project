function page() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img
          src="/photo1.png"
          alt="About IREGO"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            IREGO <span className="text-orange-500">THE BEST</span>
          </h1>
        </div>
      </div>

      {/* Award Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 text-center">
        <h1 className="text-4xl font-bold">
          IREGO <span className="text-orange-500">THE BEST</span>
        </h1>
        <p className="mt-4 text-lg font-medium">
          Celebrating Innovation & Excellence in Energy and Climate Fields
        </p>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Join us in recognizing outstanding contributions to renewable energy, oil and gas innovation, and climate change solutions. The IREGO conference honors excellence across multiple disciplines.
        </p>

        <div className="mt-12 text-left">
          <h2 className="text-2xl font-semibold mb-8">
            Award <span className="text-orange-500">Categories</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Best Researcher in Renewable Energy", desc: "Recognizing groundbreaking research in renewable energy technologies", img: "a1" },
              { title: "Best Media Contributor", desc: "Honoring exceptional contributions to environmental journalism", img: "a2" },
              { title: "Best Technical Innovation", desc: "Celebrating innovative technical solutions in energy sector", img: "a3" },
              { title: "Best Young Innovator", desc: "Supporting the next generation of energy sector leaders", img: "a4" },
              { title: "Best Business Leader", desc: "Acknowledging sustainable business practices and leadership", img: "a5" },
              { title: "Climate Change Solutions", desc: "Recognizing innovative approaches to climate challenges", img: "a6" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <img src={`/${item.img}.png`} alt="" className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 px-4 sm:px-6 lg:px-12 text-left">
        <h2 className="text-2xl font-semibold mb-8">
          Required <span className="text-orange-500">Documents</span>
        </h2>

        {/* إعادة نفس الجدول 6 مرات - ممكن تستبدله بمكون معاد استخدامه */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                <img src={`/a${i + 1}.png`} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2">Document Title {i + 1}</h3>
              <p className="text-sm text-gray-600">Description for document {i + 1}</p>
            </div>
          ))}
        </div>

        {/* Evaluation Criteria */}
        <h2 className="text-2xl font-semibold mt-16 mb-8">
          Evaluation <span className="text-orange-500">Criteria</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Creativity and originality in the work",
            "Scientific and practical importance",
            "Quality and clarity of the written work",
            "Alignment with development goals",
          ].map((text, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all">
              <div className="text-orange-500 text-2xl mb-3">
                <img src="/Vector (3).png" alt="" />
              </div>
              <p className="text-sm font-medium text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default page;
