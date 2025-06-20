import {
  Bug,
  Cloud,
  Code,
  Database,
  Globe,
  Headphones,
  Network,
  Search,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
const Services = () => {
  const { theme } = useTheme();

  const coreServices = [
    {
      icon: <Network className="h-12 w-12" />,
      title: "API Communication & Integration",
      image: "/api.jpeg",
      description:
        "Seamless connectivity solutions that enable efficient communication and data flow across your organization.",
      features: [
        "API Integration",
        "System Interconnectivity",
        "Data Synchronization",
        "Workflow Automation",
      ],
    },
    {
      icon: <Server className="h-12 w-12" />,
      title: "Web & Mobile Infrastructure",
      image: "/i8.png",
      description:
        "Scalable and secure infrastructure solutions tailored to ensure reliable performance across your digital platforms.",
      features: [
        "Authentication & User Management",
        "Real-Time Data Handling",
        "Push Notification Systems",
        "Uptime & Speed Optimization",
      ],
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Managed & Support Services",
      image: "/ms.jpg",
      description:
        "24/7 comprehensive support and maintenance to keep your systems running at peak performance.",
      features: [
        "24/7 Monitoring",
        "Preventive Maintenance",
        "Help Desk Support",
        "System Updates",
      ],
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Services",
      image: "/i10.png",
      description:
        "Scalable cloud solutions that provide flexibility, security, and cost-effectiveness for modern businesses.",
      features: [
        "Cloud Migration",
        "Hybrid Solutions",
        "Backup & Recovery",
        "Cloud Security",
      ],
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Software Solutions",
      image: "/i7.png",
      description:
        "Custom software development tailored to your specific business requirements and workflows.",
      features: [
        "Custom Development",
        "Legacy Modernization",
        "Integration Services",
        "Quality Assurance",
      ],
    },
  ];

  const additionalServices = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms",
    },
    {
      icon: <Bug className="h-12 w-12" />,
      title: "Software Testing",
      description:
        "Ensure the quality and reliability of your applications with automated and manual testing services.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Hosting",
      description:
        "Reliable and secure web hosting solutions with 99.9% uptime guarantee",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Services",
      description:
        "Search engine optimization to improve your online visibility and rankings",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Cloud Server",
      description:
        "Scalable cloud server solutions for your growing business needs",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Data Security",
      description:
        "Comprehensive data security solutions to protect your valuable information",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      <section className="relative py-48">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/sb134.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business
            growth and digital transformation
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Core Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our flagship services that form the foundation of digital
              transformation for businesses
            </p>
          </div>

          <div className="space-y-16">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-lightBg dark:bg-darkBg rounded-lg mr-4">
                      <div className="text-primary dark:text-secondary">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary dark:bg-secondary rounded-full mr-3" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-lightBgAlt to-sectionBg dark:from-darkBg dark:to-darkBgAlt p-8 rounded-xl">
                    <div className="aspect-video bg-white dark:bg-gray-700 rounded-lg shadow-sm flex items-center justify-center">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-lightBgAlt via-white to-highlightBg dark:from-darkBgAlt dark:via-[#111827] dark:to-darkBgAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Additional Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Specialized services to complement your IT strategy and enhance
              your digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-darkBgAlt p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-primary dark:text-secondary mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-extraDarkBg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Service Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step, index) => {
              const titles = [
                "Discovery",
                "Planning",
                "Implementation",
                "Support",
              ];
              const descs = [
                "Understanding your needs, goals, and current infrastructure",
                "Designing a comprehensive solution tailored to your requirements",
                "Executing the plan with minimal disruption to your operations",
                "Ongoing maintenance and support to ensure optimal performance",
              ];
              const colors = ["#00c3cb", "#70e6e9", "#00c3cb", "#70e6e9"];
              return (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                    style={{
                      background: colors[index],
                      boxShadow: `0 4px 14px ${colors[index]}80`,
                    }}
                  >
                    {step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {titles[index]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {descs[index]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className={`py-16 border-t-2 ${
          theme === "dark"
            ? "bg-gray-900 border-primary"
            : "bg-white border-primary"
        } transition-colors duration-300`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Ready to Transform Your Business?
          </h2>
          <p
            className={`text-lg mb-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Let's discuss how our services can help you achieve your business
            goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:from-primaryDark hover:to-[#5cdfe3]"
            >
              Connect with Us
            </Link>
            <Link
              to="/consulting"
              className={`px-8 py-3 font-semibold rounded-lg border-2 ${
                theme === "dark"
                  ? "border-white text-white hover:bg-white hover:text-gray-900"
                  : "border-primary text-primary hover:bg-highlightBg hover:text-primaryDark"
              }`}
            >
              Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
