"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen_2, setDropdownOpen_2] = useState(false);
  const [dropdownOpen_3, setDropdownOpen_3] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (dropdownOpen_2 || dropdownOpen_3) {
      setDropdownOpen_2(false);
      setDropdownOpen_3(false);
    }
  };

  const toggleDropdown_2 = () => {
    setDropdownOpen_2(!dropdownOpen_2);
    if (dropdownOpen || dropdownOpen_3) {
      setDropdownOpen(false);
      setDropdownOpen_3(false);
    }
  };

  const toggleDropdown_3 = () => {
    setDropdownOpen_3(!dropdownOpen_3);
    if (dropdownOpen || dropdownOpen_2) {
      setDropdownOpen(false);
      setDropdownOpen_2(false);
    }
  };

  const toggleMobileDropdown = () => {
    setMobileDropdown(!mobileDropdown);
  };

  return (
    <nav className="flex justify-between items-center text-black">
      <div className="items-center">
        <Link href="/">
          <Image
            className="relative"
            width={400}
            height={400}
            src="/header-logo.png"
          />
        </Link>
      </div>
      <div className="hidden lg:block">
        <div className="flex items-center ml-auto space-x-4 px-3">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black hover:opacity-50 flex px-4 py-2 rounded whitespace-nowrap"
            >
              About Us
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 bg-white border rounded shadow-lg p-2">
                <ul>
                  <li>Our Story</li>
                  <li>Core Values</li>
                  <li>Our Staff</li>
                  <li>Our Board</li>
                  <li>Employment</li>
                  <li>Contact</li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown_2}
              className="text-black hover:opacity-50 px-4 py-2 rounded whitespace-nowrap"
            >
              How We Learn 
            </button>
            {dropdownOpen_2 && (
              <div className="absolute top-10 bg-white border rounded shadow-lg p-2">
                <ul>
                  <li>How We Learn</li>
                  <li>The ARC</li>
                  <li>True-Play PreK</li>
                  <li>A Typical Day</li>
                  <li>Buckeye League</li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown_3}
              className="text-black hover:opacity-50 px-4 py-2 rounded whitespace-nowrap"
            >
              Join Us
            </button>
            {dropdownOpen_3 && (
              <div className="absolute top-10 bg-white border rounded shadow-lg p-2">
                <ul>
                  <li>Get Started</li>
                  <li>Admissions Process</li>
                  <li>Tuition & Aid</li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button className="text-black px-4 py-2 rounded whitespace-nowrap">
              Suppport Us
            </button>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="relative">
          <Image
            src="/bars.svg"
            onClick={toggleMobileDropdown}
            className="hover:opacity-50 m-3"
            height={30}
            width={30}
          ></Image>
        </div>
      </div>
      {mobileDropdown &&(
      <div className="absolute justify-between items-center row mt-10 pt-5">
        <ul className="flex pt-10">
          <li className="p-2">About Us</li>
          <li className="p-2">How We Learn</li>
          <li className="p-2">Join Us</li>
          <li className="p-2">Support Us</li>
        </ul>
      </div>
      )}
    </nav>
  );
}
