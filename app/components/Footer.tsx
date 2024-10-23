import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4  fixed bottom-0 w-full ">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rick and Morty Characters. All
          rights reserved.
        </p>
        <div className="mt-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-6 h-6 inline hover:text-red-600" // Hover durumunda kırmızı
            />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-6 h-6 inline hover:text-red-600" // Hover durumunda kırmızı
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-6 h-6 inline hover:text-red-600" // Hover durumunda kırmızı
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
