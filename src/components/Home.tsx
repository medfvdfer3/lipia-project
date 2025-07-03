"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Safe Image Component with fallback
interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  suppressHydrationWarning?: boolean;
}

const SafeImage = ({
  src,
  alt,
  width,
  height,
  className,
  fill,
  priority,
  suppressHydrationWarning,
}: SafeImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc("/logo.png"); // fallback to logo
    }
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt || ""}
        fill
        className={className}
        onError={handleError}
        suppressHydrationWarning={suppressHydrationWarning}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt || ""}
      width={width || 100}
      height={height || 100}
      className={className}
      onError={handleError}
      suppressHydrationWarning={suppressHydrationWarning}
      priority={priority}
    />
  );
};

const sliderImages = [
  "/photo1.png",
  "/photoo1.jpg",
  "/photoo2.jpg",
  "/photoo3.jpg",
  "/photoo4.jpg",
  "/photoo5.jpg",
  "/photoo6.jpg",
];

const sponsors = [
  "/photo5.png",
  "/photo6.png",
  "/photo7.png",
  "/photo8.png",
  "/ckt1.png",
  "/ckt2.png",
  "/ckt3.png",
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    weeks: 0,
    months: 0,
  });

  useEffect(() => {
    setMounted(true);

    const STORAGE_KEY = "countdownStart";
    let startTime: string | null = null;

    try {
      startTime = localStorage.getItem(STORAGE_KEY);
      if (!startTime) {
        startTime = Date.now().toString();
        localStorage.setItem(STORAGE_KEY, startTime);
      }
    } catch {
      // Fallback if localStorage is not available
      startTime = Date.now().toString();
    }

    const updateTime = () => {
      const now = Date.now();
      const diffInSeconds = Math.floor((now - parseInt(startTime!)) / 1000);

      const seconds = diffInSeconds % 60;
      const totalMinutes = Math.floor(diffInSeconds / 60);
      const minutes = totalMinutes % 60;
      const totalHours = Math.floor(totalMinutes / 60);
      const hours = totalHours % 24;
      const totalDays = Math.floor(totalHours / 24);
      const weeks = Math.floor(totalDays / 7);
      const days = totalDays % 7;
      const months = Math.floor(totalDays / 30);

      setTime({ seconds, minutes, hours, days, weeks, months });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    // Timer للسلايدر
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(slideTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full text-black overflow-hidden min-h-screen">
      {/* 👉 سلايدر بديل بدون Swiper */}
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px]">
        {/* الصورة الحالية */}
        <div className="absolute inset-0 z-0">
          <Image
            src={sliderImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            fill
            className="object-cover transition-opacity duration-1000"
            priority
            suppressHydrationWarning
            onError={() => console.log(`Failed to load: ${sliderImages[currentSlide]}`)}
            onLoad={() => console.log(`Loaded: ${sliderImages[currentSlide]}`)}
          />
          {/* مؤشر رقم الصورة */}
          <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full z-30 text-xl font-bold">
            {currentSlide + 1} / {sliderImages.length}
          </div>
        </div>

        {/* طبقة التعتيم */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* النص فوق السلايدر */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-white">
            Pioneering Sustainable{" "}
            <span className="bg-orange-500 px-2 py-1 rounded text-white inline-block">
              Energy
            </span>{" "}
            for a Greener Future
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-xl text-white">
            Join global experts, researchers, and policymakers in Tripoli to
            explore innovations in renewable energy, oil & gas, and climate
            solutions.
          </p>
        </div>
      </div>

      {/* 👉 العداد */}
      <div className="mt-6 text-center">
        <span className="text-black text-xl font-bold">Conference </span>
        <span className="text-orange-500 text-xl font-semibold">Countdown</span>
      </div>
      <div className="mt-6 flex justify-center gap-6 px-4 flex-wrap max-w-4xl mx-auto">
        {[
          { label: "SECOND", value: time.seconds },
          { label: "MINUTE", value: time.minutes },
          { label: "HOURS", value: time.hours },
          { label: "DAYS", value: time.days },
          { label: "WEEKS", value: time.weeks },
          { label: "MONTH", value: time.months },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-orange-500 text-white w-20 h-24 rounded-md flex flex-col items-center justify-center shadow-lg"
            suppressHydrationWarning
          >
            <span className="text-3xl font-bold" suppressHydrationWarning>{value}</span>
            <span className="text-sm mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* 👉 معلومات المؤتمر + READ MORE */}
      <div className="mt-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-lg md:text-xl font-semibold">
          Get to know about{" "}
          <span className="text-orange-500 uppercase font-bold">CONFERENCE</span>
        </p>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className=" mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition"
          suppressHydrationWarning
        >
          READ MORE
        </button>

        {showInfo && (
          <div className="mt-6 text-left bg-gray-100 p-6 rounded-md shadow-md text-gray-900 text-base md:text-lg">
            The Renewable Energy, Gas & Oil, and Climate Change Conference will
            take place in Tripoli, Libya, in November 2025, bringing together
            experts, researchers, industry leaders, and policymakers to address
            pressing energy and environmental challenges. This pioneering event
            aims to bridge the gap between academia, industry, and government
            by fostering dialogue and collaboration on innovative solutions in
            renewable energy, oil and gas, and climate change mitigation.
          </div>
        )}
      </div>

            {/* فيديو تعريفي بالمؤتمر */}
      <div className="mt-16 px-4 max-w-4xl mx-auto">
        <video
          src="/Tripoli3.mp4"
          controls
          autoPlay
          muted
          loop
          className="w-full rounded-lg shadow-lg"
          suppressHydrationWarning
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Scientific Journals Section */}
      <div className="mt-16 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-orange-500">Scientific</span> Journals
        </h2>

        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          suppressHydrationWarning
        >
    {/* المجلة 1 */}
    <SwiperSlide>
      <div className="flex flex-col items-center">
        <SafeImage
          src="/photo2.png"
          alt="Libya Journal"
          width={130}
          height={120}
          className="rounded shadow-md"
          suppressHydrationWarning
        />
        <p className="mt-4 text-center font-medium">
          Libya Journal for Applied Sciences and Technology
        </p>
      </div>
    </SwiperSlide>

    {/* المجلة 2 */}
    <SwiperSlide>
      <div className="flex flex-col items-center">
        <SafeImage
          src="/photo3.png"
          alt="Solar Journal"
          width={120}
          height={120}
          className="rounded shadow-md"
          suppressHydrationWarning
        />
        <p className="mt-4 text-center font-medium">
          Solar Energy and Sustainable Development Journal
        </p>
      </div>
    </SwiperSlide>

    {/* المجلة 3 */}
    <SwiperSlide>
      <div className="flex flex-col items-center">
        <SafeImage
          src="/photo4.png"
          alt="Pure Sciences Journal"
          width={120}
          height={120}
          className="rounded shadow-md"
          suppressHydrationWarning
        />
        <p className="mt-4 text-center font-medium">
          Pure and Applied Sciences Journal
        </p>
      </div>
    </SwiperSlide>
      <SwiperSlide>
      <div className="flex flex-col items-center">
        <SafeImage
          src="/ff1.jpg"
          alt="Pure Sciences Journal"
          width={140}
          height={160}
          className="rounded shadow-md"
          suppressHydrationWarning
        />
        <p className="mt-4 text-center font-medium">
          Pure and Applied Sciences Journal
        </p>
      </div>
        </SwiperSlide>
        </Swiper>
      </div>

            {/* Submit Your Research Section */}
      <div className="mt-20 px-4 w-full flex flex-col items-center text-center">
        <h2 className="text-lg md:text-2xl font-bold mb-4">
          Call of <span className="text-orange-500">Paper</span>
        </h2>

        <p className="text-gray-700 text-sm md:text-base mb-8 max-w-2xl">
          Share your innovative research and contribute to the advancement of sustainable energy solutions.
        </p>

        {/* اجعل الحاوية أفقيّة */}
        <div className="flex flex-row flex-wrap justify-center gap-8 max-w-xl mx-auto text-left">
          {/* العمود الأيسر */}
          <div className="flex flex-col gap-4 min-w-[140px]">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <i className="fas fa-solar-panel text-orange-500"></i>
              <span className="font-medium">Renewable Energy</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <i className="fas fa-globe-americas text-orange-500"></i>
              <span className="font-medium">Climate Change</span>
            </div>
          </div>

          {/* العمود الأيمن */}
          <div className="flex flex-col gap-4 min-w-[140px]">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <i className="fas fa-industry text-orange-500"></i>
              <span className="font-medium">Oil &amp; Gas Transition</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <i className="fas fa-leaf text-orange-500"></i>
              <span className="font-medium">Sustainable Development</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="/call-for-papers"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition flex items-center gap-2"
        >
          <i className="fas fa-file-upload"></i>
          Read More
        </a>
      </div>

  <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px',
      }}
    >
      <div
        style={{
          width: '700px',
          border: ' #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '12px  12px 12px rgba(0,0,0,0.1)',
        }}
      >
        <a
          href="https://niclibya.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Image
  src="/sp1.png"
  alt="صورة الكارد"
  width={500}
  height={300}
  className="w-full h-auto block"
/>

        </a>
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

      <div className="mt-20 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          Our Official <span className="text-orange-500">Sponsors</span>
        </h2>
      </div>

      <div className="mt-10 px-4 max-w-6xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          suppressHydrationWarning
        >
        {sponsors.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <SafeImage
              src={src.startsWith('/') ? src : `/${src}`}
              alt={`Sponsor ${index + 1}`}
              width={150}
              height={100}
              className="rounded shadow-md max-w-[150px] h-auto object-contain"
              suppressHydrationWarning
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* كارد في وسط الشاشة */}
    

      {/* زر التسجيل */}
    
    </div>
  );
}