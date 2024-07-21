import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full py-4 px-8 flex justify-between items-center bg-opacity-70 bg-custom-bg">
      <div className="text-2xl font-bold text-white">VulnVantage</div>
      <nav className="flex space-x-6">
        <Link href="#services">
          <span className="text-white hover:text-red-400 transition-colors duration-300">Services</span>
        </Link>
        <Link href="#team">
          <span className="text-white hover:text-red-400 transition-colors duration-300">Our Team</span>
        </Link>
        <Link href="#about">
          <span className="text-white hover:text-red-400 transition-colors duration-300">About Us</span>
        </Link>
      </nav>
      <Link href="#contact">
        <span className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full transition-transform duration-300 transform hover:scale-105">
          Contact Us
        </span>
      </Link>
    </header>
  );
};

export default Header;
