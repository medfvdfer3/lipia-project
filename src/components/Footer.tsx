'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10 border-t border-gray-200">
      
      {/* ✅ Left Section - Logo and Contact Info */}
      <div className="md:w-1/2">
        <div className="flex items-center mb-4">
          <Image
            src="/logo.png"
            alt="IREGO Logo"
            width={80}
            height={80}
            className="mr-3"
            priority
          />
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Official website for the 2025 Tripoli conference on renewable energy, oil & gas,
          and climate change — featuring event details, paper submissions, journals, and
          collaboration opportunities for global experts.
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

      {/* ✅ Right Section - Navigation Links */}
      <div className="md:w-1/2 grid grid-cols-2 gap-4 text-sm text-gray-700">
        
        {/* Column 1 */}
        <div className="space-y-2">
          <Link href="/"><span className="hover:text-orange-500 cursor-pointer">Home</span></Link>
          <Link href="/about"><span className="hover:text-orange-500 cursor-pointer">About Us</span></Link>
          <Link href="/committees"><span className="hover:text-orange-500 cursor-pointer">Committees</span></Link>
          <Link href="/call-for-papers"><span className="hover:text-orange-500 cursor-pointer">Call For Papers</span></Link>
          <Link href="/submission"><span className="hover:text-orange-500 cursor-pointer">Submission</span></Link>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <h4 className="font-semibold text-black">Registration</h4>
          <Link href="/venue"><span className="hover:text-orange-500 cursor-pointer">Venue</span></Link>
          <Link href="/contact-us"><span className="hover:text-orange-500 cursor-pointer">Contact Us</span></Link>
          <Link href="/expo"><span className="hover:text-orange-500 cursor-pointer">IREGO Expo</span></Link>
          <Link href="/the-best"><span className="hover:text-orange-500 cursor-pointer">IREGO The Best</span></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
