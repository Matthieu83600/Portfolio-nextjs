import { FaTwitter, FaGithub, FaLinkedin, FaGitlab } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="p-4 text-center">
      <div className="container mx-auto">
        <p className="mb-2">
          © {new Date().getFullYear()} Matthieu Bonjour. Tous droits réservés.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://gitlab.com/Matthieu83600"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-sky-400"
          >
            <FaGitlab size={24} />
          </a>
          <a
            href="https://github.com/Matthieu83600"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-sky-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="www.linkedin.com/in/matthieu-bonjour"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-sky-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-sky-400"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
