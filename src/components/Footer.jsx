import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons/faHackerrank";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-1/4 z-20 lg:bottom-0 lg:right-5 lg:top-1/2 md:bottom-0 md:right-10 md:top-1/2 sm:bottom-0 sm:right-5 sm:top-1/2">
      <div className="p-4 rounded-lg">
        <div className="flex flex-row gap-4 sm:flex-col items-center lg:gap-10 sm:gap-4 md:gap-8">
          <FooterLink icon={faGithub} link="https://github.com/gopal031119" />
          <FooterLink icon={faLinkedin} link="https://www.linkedin.com/in/gopalsakhwala/" />
          <FooterLink icon={faTwitter} link="https://twitter.com/GSakhwala" />
          <FooterLink icon={faInstagram} link="https://www.instagram.com/gopal__sakhwala/" />
          <FooterLink icon={faHackerrank} link="https://www.hackerrank.com/profile/gopalsakhwala18" />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
};

export default Footer;
