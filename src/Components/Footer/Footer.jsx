import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <footer className="bg-[#eef4ff] py-12 bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <nav className="flex flex-col sm:flex-row">
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
                About Us
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
                Careers
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Products</h3>
            <nav className="flex flex-col sm:flex-row">
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
                Opioids
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
                Psychedelics
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
              Cannabinoids
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e] py-1 sm:py-0 sm:mr-4">
                More...
              </Link>

            </nav>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0">
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <nav className="flex flex-row">
              <Link href="/" className="text-gray-400 hover:text-[#10847e] mr-4">
                <FaFacebook />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e] mr-4">
                <FaTwitter />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-[#10847e]">
                <FaInstagram />
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
