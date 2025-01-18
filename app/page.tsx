"use client";

import { Herr_Von_Muellerhoff } from "next/font/google";
import Image from "next/image";
import { Rajdhani } from "next/font/google";
import "./globals.css"
import { FaCarBurst , FaCar } from "react-icons/fa6";

// Images importing
import logo from "../public/cropped-image.png"
import club_clash from "../public/club_clash_every-season.avif"
import club_info from "../public/club_info.avif"
import club_requirementsf from "../public/requirenment.avif"

import Link from "next/link";
import { useState,useEffect} from "react";
import { MdSettingsInputComponent } from "react-icons/md";

export default function Home() {
  const [menuOption,setmenuOption]=useState(false);
  const toggleMenu = () => {
    setmenuOption(!menuOption);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { 
        setmenuOption(false); 
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },);

  return (

    <body className="font-sans">
   <header className="bg-black fixed w-full z-50 top-0 ">
    <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className={`w-[158px] sm:w-[250px] transition-filter duration-300 fill-red-500 ${
            menuOption ? "blur-sm" : "blur-0" // Apply blur when menu is open
          } `}
        >
          <Image src={logo} alt="Uniters™ Clan" className="w-auto h-full"></Image>
        </div>
        {/* <a href="#" className="text-3xl font-bold tracking-wide text-red-500">Asphalt 9</a> */}
        <nav className="space-x-3 sm:space-x-10">
            <a href="#home" className="text-white hover:text-red-500 text-sm font-extrabold sm:text-2xl">HOME</a>
            <a href="#about" className="text-white hover:text-red-500 text-sm sm:text-2xl font-extrabold" >ABOUT US</a>
            {/* <a href="#join" className="text-white hover:text-red-500 text-lg">Join</a> */}
        </nav>
    </div>
</header>
   <section className="relative h-screen bg-center bg-cover pt-12">
    <div className="absolute inset-0 bg-black bg-opacity-70"></div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold uppercase mb-6 text-red-500">UNLEASH YOUR SPEED </h1>
        <h3 className="text-2xl md:text-4xl mb-6">Welcome to Uniters™ Clan</h3>
        <p className="text-md md:text-2xl mb-6">Join the Uniters™ Community and Dominate the Track!</p>
        <a href="https://discord.gg/your-discord-link" target="_blank" className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded text-lg font-extrabold">Join Us on Discord</a>
    </div>
</section>
<section id="about" className="py-20 px-4 bg-black text-center">
    <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-red-500 uppercase sm:pt-20 pt-10">About Our Team</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12 text-gray-300">
            We are a passionate group of Asphalt 9 players looking for talented racers to join our community. Participate in thrilling tournaments, learn pro strategies, and connect with players from around the world. Whether you are a seasoned pro or just starting, there's a place for you here.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-red-300">
            <div className="bg-gray-900 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition">
                <Image src={club_clash} alt="Club Clash" className="w-full h-fill object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">CLUB CLASH</h3>
                    <p className="text-gray-400">Top 5% global club on every club clash event with good amount of team-work. <br></br>We abide to fair play and competitive Clash matches. Achieve consistent wins and build a winning legacy together!</p>
                </div>
            </div>
            <div className="bg-gray-900 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition">
              <Image src={club_requirementsf} alt="Club_info" className="w-full h-fill object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4"> Club Requirements</h3>
                    <p className="text-gray-400">Uniters™ offers a range of Asphalt 9 clubs for all levels, from Rookies to Elites.<br/>We abide to reputation requirements for fair play and competitive Clash matches. Find your perfect Uniters™ club and join the action!</p>
                </div>
            </div>
            <div className="bg-gray-900 shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition">
            <Image src={club_info} alt="Club_info" className="w-full h-fill object-cover" />
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">DISCORD: Global Community</h3>
                    <p className="text-gray-400">Connect and thrive with racers from around the world and Level up with our boosted server, pro tips, global community. Join the fun! 🎮</p>
                </div>
            </div>
        </div>
        <div className="bg-gray-900 py-12 px-6 rounded-lg shadow-lg md:flex md:items-center md:justify-between">
          <div className="sm:w-2/3 md:pr-8">
            <h3 className="text-4xl font-bold text-red-500 mb-6 uppercase">Why Join Us?</h3>
            <ul className="text-left text-gray-300 space-y-4 list-disc list-inside md:ml-6">
              <li><span className="text-red-300 font-bold">Active Leadership:</span> Experienced leaders dedicated to your growth.</li>
              <li><span className="text-red-300 font-bold">Efficient Ranking: </span>  Learn tricks to climb the ranks faster.</li>
              <li><span className="text-red-300 font-bold">Passionate Community</span> Connect with like-minded players.</li>
              <li><span className="text-red-300 font-bold">Strong Team Culture: </span> Build bonds and enjoy a collaborative environment.</li>
              <li><span className="text-red-300 font-bold">Maximize Rewards:</span> Team up to earn maximum rep, perks, and TLE benefits.</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0 sm:w-2/3 w-fill flex justify-center">
          <Image src={club_info} alt="Club_info" className="rounded-lg shadow-lg" />
          </div>
        </div>
    </div>
</section>
  <footer id="join" className="bg-gray-900 py-6 text-center text-gray-500">
    <p>&copy; 2025 by Uniters™ Clan | All rights reserved.</p>
  </footer>
  </body>
  );
}
