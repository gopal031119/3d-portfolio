import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHackerrank } from "@fortawesome/free-brands-svg-icons/faHackerrank";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 right-0 smp-4 bg-gray-1200 text-white lg:bottom-1/2">
      <div className="flex flex-row sm:flex-col items-center gap-4">
        <FooterLink icon={faGithub} link="https://github.com/your-github-username" />
        <FooterLink icon={faLinkedin} link="https://linkedin.com/in/your-linkedin-username" />
        <FooterLink icon={faTwitter} link="https://twitter.com/your-twitter-username" />
        <FooterLink icon={faInstagram} link="https://instagram.com/your-instagram-username" />
        <FooterLink icon={faHackerrank} link="https://hackerrank.com/your-hackerrank-username" />
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
