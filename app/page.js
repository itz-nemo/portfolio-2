'use client'
import { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Work from "../components/Work";

export default function Home() {

 const [isDarkMode, setIsDarkMode] = useState(false);
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
   setMounted(true);
   // Check for saved theme preference or default to light mode
   const savedTheme = localStorage.getItem('theme');
   
   if (savedTheme === 'dark') {
     setIsDarkMode(true);
     document.documentElement.classList.add('dark');
   } else {
     // Default to light mode (ignoring system preference)
     setIsDarkMode(false);
     document.documentElement.classList.remove('dark');
   }
 }, []);

 useEffect(() => {
   if (!mounted) return;
   
   if (isDarkMode) {
     document.documentElement.classList.add('dark');
     localStorage.setItem('theme', 'dark');
   } else {
     document.documentElement.classList.remove('dark');
     localStorage.setItem('theme', 'light');
   }
 }, [isDarkMode, mounted]);

 // Prevent flash of incorrect theme
 if (!mounted) {
   return null;
 }

  return (
    <>
    <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    <Header isDarkMode={isDarkMode} />
    <Work isDarkMode={isDarkMode} />
    <About isDarkMode={isDarkMode} />
    {/*  <Services isDarkMode={isDarkMode} /> */}
    <Contact isDarkMode={isDarkMode} />
    <Footer isDarkMode={isDarkMode} />
    </>
  );
}
