// components/Footer.js
const Footer = () => {
    return (
      <footer className="py-8 bg-black text-white">
        <div className="text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} VulnVantage. All rights reserved.</p>
          <p className="mb-4">Contact us: <a href="mailto:support@vulnvantage.com" className="text-red-600">support@vulnvantage.com</a></p>
          <p>Follow us on:
            <a href="#" className="mx-2 hover:text-red-600">Facebook</a>|
            <a href="#" className="mx-2 hover:text-red-600">Twitter</a>|
            <a href="#" className="mx-2 hover:text-red-600">LinkedIn</a>
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  