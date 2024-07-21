"use client"
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import Header from '@/components/Header';
import Link from 'next/link';
export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scroller.scrollTo(hash.substring(1), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  }, []);

  return (
    <div className="bg-custom-bg bg-cover text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 md:px-0">
        <section id="hero" className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Empowering You in the Digital Age
          </h1>
          <p className="text-center max-w-2xl mb-6">
            VulnVantage brings you top-notch technology with the most skilled experts to help you spot weak points within your system and shutdown attacks before their birth to always stay ahead.
          </p>
          <Link href="#get-started" className="bg-red-600 py-3 px-6 rounded-full text-lg hover:bg-red-700 transition-colors">
            Get Started
          </Link>
        </section>

        <section id="services" className="min-h-screen flex flex-col items-center justify-center bg-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-center max-w-2xl mb-6">
            We offer a range of vulnerability scanning services to help you secure your network.
          </p>
        </section>

        <section id="team" className="min-h-screen flex flex-col items-center justify-center bg-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
          <p className="text-center max-w-2xl mb-6">
            Meet our team of experts dedicated to keeping your systems secure.
          </p>
        </section>

        <section id="about" className="min-h-screen flex flex-col items-center justify-center bg-gray-600">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <p className="text-center max-w-2xl mb-6">
            VulnVantage is committed to providing the best vulnerability scanning services.
          </p>
        </section>

        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
          <p className="text-center max-w-2xl mb-6">
            Reach out to us for any inquiries or support.
          </p>
        </section>
      </main>
      <footer className="py-4 bg-gray-900 bg-opacity-75">
        <div className="text-center text-white">
          &copy; {new Date().getFullYear()} VulnVantage. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
