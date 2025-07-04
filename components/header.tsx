"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookDropdown, setBookDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setBookDropdown(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const openDropdown = () => {
    setBookDropdown(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setBookDropdown(false);
    }, 1 * 60 * 1000); // 1 minute
  };

  const closeDropdown = () => {
    setBookDropdown(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const toggleDropdown = () => {
    if (bookDropdown) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) openDropdown();
  };

  return (
    <header className="bg-black sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 py-5">
        <div className="flex justify-between items-center md:justify-start">
          <a href="/" className="flex items-center space-x-3">
            <Image
              src="/assets/logo/1.png"
              alt="Logo"
              width={45}
              height={45}
              className="w-11 h-11"
            />
            <h1 className="text-xl md:text-2xl font-semibold text-white font-custom">
              SAMEER HIRSI
            </h1>
          </a>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <FaTimes size={26} className="text-white" />
              ) : (
                <FaBars size={26} className="text-white" />
              )}
            </button>
          </div>

          {/* Nav */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out md:ml-20 lg:ml-60`}
          >
            <ul className="flex flex-col md:flex-row items-start md:items-center md:space-x-10 lg:space-x-16 py-4 md:py-0 px-6 md:px-0">
              {/* BOOKS */}
              <li
                className="relative w-full md:w-auto group"
                onMouseEnter={handleMouseEnter}
              >
                <button
                  onClick={toggleDropdown}
                  className="flex justify-between items-center w-full md:w-auto gap-1 py-2 text-lg text-myred hover:text-onhover font-bold transition duration-200"
                >
                  BOOKS{" "}
                  <FaChevronDown
                    className={`mt-1 transition-transform duration-300 ${
                      bookDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <ul
                  className={`${
                    bookDropdown
                      ? "block opacity-100 scale-100"
                      : "hidden opacity-0 scale-95"
                  } transform transition-all duration-300 ease-in-out md:absolute left-0 mt-2 bg-black md:shadow-lg shadow-md rounded-sm w-full md:w-64 z-50 border border-white border-solid`}
                >
                  {[
                    { title: "BEYOND REACH POINT ZERO", link: "/allbooks/book1" },
                    { title: "DESTINY POINT", link: "/allbooks/book2" },
                    { title: "CRITICAL POINT", link: "/allbooks/book3" },
                  ].map((book, i) => (
                    <li key={i}>
                      <Link
                        href={book.link}
                        className="block px-4 py-2 text-white font-semibold hover:bg-myred transition duration-200"
                        onClick={() => {
                          setIsOpen(false);
                          closeDropdown();
                        }}
                      >
                        {book.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* AUTHOR */}
              <li>
                <a
                  href="/author"
                  className="relative group block py-2 text-lg text-white hover:text-myred font-bold transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  AUTHOR
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-myred transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>

              {/* BLOG */}
              <li>
                <a
                  href="/blogs"
                  className="relative group block py-2 text-lg text-white hover:text-myred font-bold transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  BLOG
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-myred transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>

              {/* CONTACT */}
              <li>
                <a
                  href="/contactus"
                  className="relative group block py-2 text-lg text-white hover:text-myred font-bold transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  CONTACT US
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-myred transition-all duration-500 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;




// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import Image from "next/image";
// import Link from "next/link";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [bookDropdown, setBookDropdown] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setBookDropdown(false);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };

//   const openDropdown = () => {
//     setBookDropdown(true);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(() => {
//       setBookDropdown(false);
//     }, 1 * 60 * 1000); // 1 minute
//   };

//   const closeDropdown = () => {
//     setBookDropdown(false);
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//   };

//   const toggleDropdown = () => {
//     if (bookDropdown) {
//       closeDropdown();
//     } else {
//       openDropdown();
//     }
//   };

//   const handleMouseEnter = () => {
//     if (!isMobile) openDropdown();
//   };

//   return (
//     <header className="bg-black sticky top-0 z-50 shadow-md">
//       <div className="container mx-auto px-6 md:px-10 lg:px-16 py-5">
//         <div className="flex justify-between items-center md:justify-start">
//           <a href="/" className="flex items-center space-x-3">
//             <Image
//               src="/assets/logo/1.png"
//               alt="Logo"
//               width={45}
//               height={45}
//               className="w-11 h-11"
//             />
//             <h1 className="text-xl md:text-2xl font-semibold text-white font-custom">
//               SAMEER HIRSI
//             </h1>
//           </a>

//           {/* Hamburger */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} aria-label="Toggle menu">
//               {isOpen ? (
//                 <FaTimes size={26} className="text-white" />
//               ) : (
//                 <FaBars size={26} className="text-white" />
//               )}
//             </button>
//           </div>

//           {/* Nav */}
//           <nav
//             className={`${
//               isOpen ? "block" : "hidden"
//             } md:flex md:items-center absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out md:ml-20 lg:ml-60`}
//           >
//             <ul className="flex flex-col md:flex-row items-start md:items-center md:space-x-10 lg:space-x-16 py-4 md:py-0 px-6 md:px-0">
//               {/* BOOKS */}
//               <li
//                 className="relative w-full md:w-auto group"
//                 onMouseEnter={handleMouseEnter}
//               >
//                 <button
//                   onClick={toggleDropdown}
//                   className="flex justify-between items-center w-full md:w-auto gap-1 py-2 text-lg text-myred hover:text-onhover font-bold transition duration-200"
//                 >
//                   BOOKS{" "}
//                   <FaChevronDown
//                     className={`mt-1 transition-transform duration-300 ${
//                       bookDropdown ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 <ul
//                   className={`${
//                     bookDropdown
//                       ? "block opacity-100 scale-100"
//                       : "hidden opacity-0 scale-95"
//                   } transform transition-all duration-300 ease-in-out md:absolute left-0 mt-2 bg-black md:shadow-lg shadow-md rounded-sm w-full md:w-64 z-50 border border-white border-solid`}
//                 >
//                   {[
//                     { title: "BEYOND REACH POINT ZERO", link: "/allbooks/book1" },
//                     { title: "DESTINY POINT", link: "/allbooks/book2" },
//                     { title: "CRITICAL POINT", link: "/allbooks/book3" },
//                     // { title: "Building A Functional Home", link: "/allbooks/book4" },
//                   ].map((book, i) => (
//                     <li key={i}>
//                       <Link
//                         href={book.link}
//                         className="block px-4 py-2 text-white font-semibold hover:bg-myred transition duration-200"
//                         onClick={() => {
//                           setIsOpen(false);
//                           closeDropdown();
//                         }}
//                       >
//                         {book.title}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>

//               <li>
//                 <a
//                   href="/author"
//                   className="relative group transition-colors block py-2 text-lg text-white hover:text-myred font-bold duration-200"
//                   onClick={toggleMenu}
//                 >
//                   AUTHOR
//                   <span className="absolute group transition-colors left-0 -bottom-1 w-0 h-[2px] bg-myred duration-500 group-hover:w-full"></span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/blogs"
//                   className="relative group transition-colors block py-2 text-lg text-white hover:text-myred font-bold duration-200"
//                   onClick={toggleMenu}
//                 >
//                   BLOG
//                    <span className="absolute group transition-colors left-0 -bottom-1 w-0 h-[2px] bg-myred duration-500 group-hover:w-full"></span>
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contactus"
//                   className="relative group transition-colors block py-2 text-lg text-white hover:text-myred font-bold duration-200"
//                   onClick={toggleMenu}
//                 >
//                   CONTACT US
//                    <span className="absolute group transition-colors left-0 -bottom-1 w-0 h-[2px] bg-myred duration-500 group-hover:w-full"></span>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
