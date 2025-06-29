import { Facebook, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info & Contact */}
          <div>
            <img
              src="/sts (1).webp"
              alt="Shanmuga Technovative Solutions"
              className="h-28 w-auto mb-5 filter bg-white rounded-lg shadow-lg transition-transform duration-200 "
            />
            <p className="text-sm mb-4 text-black">
              Your trusted partner for innovative IT solutions and digital
              transformation.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/profile.php?id=61559770451337"
                className="text-black"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/shanmuga-technovative-solutions-private-limited/"
                className="text-black"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/ShanmugaTechnovativeSolutions"
                className="text-black"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>

            <div className="text-sm space-y-1 text-black">
              <p>
                Email:{" "}
                <a
                  href="mailto:shanmugatechnovative@gmail.com"
                  className="underline text-black"
                >
                  shanmugatechnovative@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+918903787441" className="underline text-black">
                  <br />
                  +91 89037 87441
                  <br />
                  +91 98424 25433
                </a>
              </p>
              <p>
                Location: 188/5, Malayappa Gounder Gandhi Nagar Udumalpet,
                Tiruppur District Tamil Nadu – 642154 India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Quick Links</h3>
            <ul className="space-y-2 text-black">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Services", to: "/services" },
                { name: "Products", to: "/products" },
                { name: "Consulting", to: "/consulting" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="hover:text-gray-900 transition duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-black">Services</h3>
            <ul className="space-y-2 text-black">
              {[
                "API Communication & Integration",
                "Web & Mobile Infrastructure",
                "Managed Services",
                "Cloud Services",
                "Software Solutions",
              ].map((service) => (
                <li
                  key={service}
                  className="hover:text-gray-900 transition duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-block mt-6 bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/30 mt-8 pt-6 text-center">
          <p className="text-sm text-black">
            © 2024 Shanmuga Technovative Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
