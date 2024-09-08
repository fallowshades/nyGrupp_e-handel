import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>

        <li>
          <Link to="" className="hover:text-gray-300">
            About Us
          </Link>
        </li>
        <li>
          <Link to="" className="hover:text-gray-300">
            Contact Us
          </Link>
        </li>
      </ul>
      <p className="mt-4">
        &copy; {new Date().getFullYear()} NYA GRUPPEN Webshop. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
