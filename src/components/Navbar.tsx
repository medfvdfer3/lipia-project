"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useUser } from "../context/UserContext"; // عدل حسب مكان الملف
import { useRouter } from "next/navigation";
import SafeImage from "./SafeImage";

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { user, setUser } = useUser();
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);

  // إغلاق الـ dropdown عند الضغط خارجها
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    setUser(null); // مسح بيانات المستخدم (تأكد من تنفيذ هذه الوظيفة في UserContext)
    setDropdownOpen(false);
    router.push("/login"); // توجيه لصفحة تسجيل الدخول
  };

  return (
    <>
      <nav className="absolute top-[35px] left-0 w-full bg-gray-800/30 text-white z-40 backdrop-blur-md border-b border-white/10">
  <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between h-16">
    {/* الشعار */}
    <div className="flex items-center space-x-2 min-w-[60px]">
      <Image src="/logo.png" alt="Logo" width={60} height={40} priority suppressHydrationWarning />
    </div>

    {/* روابط سطح المكتب */}
<ul className="hidden md:flex items-center gap-3  text-sm uppercase font-medium">

  <li>
    <Link href="/" className="hover:text-orange-400 transition">
      Home
    </Link>
  </li>

  <li>
    <Link href="/about" className="hover:text-orange-400 transition">
      About
    </Link>
  </li>

  <li>
    <Link href="/committees" className="hover:text-orange-400 transition">
      Committees
    </Link>
  </li>

  <li>
    <Link href="/call-for-papers" className="hover:text-orange-400 transition">
      Call  Papers
    </Link>
  </li>

  <li>
    <Link href="/submission" className="hover:text-orange-400 transition">
      Submission
    </Link>
  </li>

  <li>
    <Link href="/registration" className="hover:text-orange-400 transition">
      Registration
    </Link>
  </li>

  <li>
    <Link href="/venue" className="hover:text-orange-400 transition">
      Venue
    </Link>
  </li>

  <li>
    <Link href="/expo" className="hover:text-orange-400 transition">
     Expo
    </Link>
  </li>

  <li>
    <Link href="/the-best" className="hover:text-orange-400 transition">
        Best
    </Link>
  </li>

  <li>
    <Link
      href="/contact-us"
      scroll={true}
      onClick={toggleMenu}
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-md text-xs font-semibold"
    >
      Contact 
    </Link>
  </li>
</ul>


    {/* صورة المستخدم أو زر تسجيل الدخول + زر القائمة للموبايل */}
    <div className="flex items-center space-x-3 min-w-[100px] justify-end relative">
      {user ? (
        <>
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
            <SafeImage
              src={user.photoURL || "/logo.png"}
              alt="User"
              width={36}
              height={36}
              className="rounded-full border border-white"
              fallbackSrc="/logo.png"
              suppressHydrationWarning
            />
          </button>

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded shadow-lg z-50"
            >
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-orange-600 hover:text-white text-red-500"
              >
                تسجيل الخروج
              </button>
            </div>
          )}
        </>
      ) : (
        <Link
          href="/login"
          className="text-sm bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-white"
        >
          Login
        </Link>
      )}

      {/* زر القائمة للموبايل */}
      <button
        className="md:hidden text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>
  </div>

  {/* القائمة الجانبية للموبايل */}
  {menuOpen && (
    <div className="md:hidden flex flex-col px-6 pb-4 pt-2 space-y-4 bg-gray-800/30 text-white backdrop-blur-md border-t border-white/10">
      <Link className="hover:text-orange-400 transition" href="/" onClick={toggleMenu}>Home</Link>
      <Link className="hover:text-orange-400 transition" href="/about" onClick={toggleMenu}>About us</Link>
      <Link className="hover:text-orange-400 transition" href="/committees" onClick={toggleMenu}>Committees</Link>
      <Link className="hover:text-orange-400 transition" href="/call-for-papers" onClick={toggleMenu}>Call For Papers</Link>
      <Link className="hover:text-orange-400 transition" href="/submission" onClick={toggleMenu}>Submission</Link>
      <Link className="hover:text-orange-400 transition" href="/registration" onClick={toggleMenu}>Registration</Link>
      <Link className="hover:text-orange-400 transition" href="/venue" onClick={toggleMenu}>Venue</Link>
      <Link className="hover:text-orange-400 transition" href="/expo">IREGO Expo</Link>{/* Corrected href */}
      <Link className="hover:text-orange-400 transition" href="/the-best">IREGO The Best</Link>
    
      
      <Link
        href="/contact-us"
        scroll={true}
        onClick={toggleMenu}
        className="block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-semibold w-fit"
      >
        Contact Us
      </Link>
    </div>
  )}
</nav>
    
    </>
  );
}
export default Navbar ; 