import { Facebook, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Company Info & Contact */}
          <div>
            <img
              src="/sts (1).webp"
              alt="Shanmuga Technovative Solutions"
              className="h-20 w-auto filter brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm mb-4">
              Your trusted partner for innovative IT solutions and digital transformation.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559770451337"
                className="text-gray-400 hover:text-[#00c3cb] transition duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/shanmuga-technovative-solutions-private-limited/"
                className="text-gray-400 hover:text-[#00c3cb] transition duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ShanmugaTechnovativeSolutions"
                className="text-gray-400 hover:text-[#00c3cb] transition duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            <div className="text-gray-400 text-sm space-y-1">
              <p>
                Email:{' '}
                <a
                  href="mailto:shanmugatechnovative@gmail.com"
                  className="hover:text-[#00c3cb]"
                >
                  shanmugatechnovative@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+919585121202" className="hover:text-[#00c3cb]">
                  +91 95851 21202
                </a>
              </p>
              <p>Location: Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'Products', to: '/products' },
                { name: 'Consulting', to: '/consulting' },
                { name: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-[#70e6e9] transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {[
                'API Communication & Integration',
                'Web & Mobile Infrastructure',
                'Managed Services',
                'Cloud Services',
                'Software Solutions',
              ].map((service) => (
                <li
                  key={service}
                  className="text-gray-400 hover:text-[#70e6e9] transition duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Shanmuga Technovative Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
