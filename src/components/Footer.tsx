// components/Footer.js (أو .tsx إذا كنت تستخدم TypeScript)
import React from 'react';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10 border-t border-gray-200">
      {/* Left section */}
      <div className="md:w-1/2">
        <div className="flex items-center mb-4">
          <img src="/logo.png" alt="IREGO Logo" className="h-20 w-auto mr-3" />
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Official website for the 2025 Tripoli conference on renewable energy, oil & gas, and climate change—
          featuring event details, paper submissions, journals, and collaboration opportunities for global experts.
        </p>

        <div className="text-sm space-y-2 text-orange-600">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> 
            <span>Omar Al-Mukhtar Street, Tripoli - Libya</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>021884-444-4882</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>021884-444-4883</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>0021893-259-9265</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@irego-conference.ly</span>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="space-y-2">
          <li><Link className="hover:text-orange-400 transition" href="/">Home</Link></li>

          <Link href="/about"><p className="cursor-pointer hover:text-orange-500">About us</p></Link>
          <Link href="/committees"><p className="cursor-pointer hover:text-orange-500">Committees
</p></Link>
          <Link href="/call-for-papers"><p className="cursor-pointer hover:text-orange-500">Call For Papers</p></Link>
          <Link href="/submission"><p className="cursor-pointer hover:text-orange-500">Submission</p></Link>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold text-black">Registration</h4>
          <Link href="/venue"><p className="cursor-pointer hover:text-orange-500">Venue</p></Link>
          <Link href="/contact"><p className="cursor-pointer hover:text-orange-500">Contact us</p></Link>
          <Link href="/expo"><p className="cursor-pointer hover:text-orange-500">IREGO Expo</p></Link>
          <Link href="/the-best"><p className="cursor-pointer hover:text-orange-500">IREGO The Best</p></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
