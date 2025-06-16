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

const Services = () => {
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
      icon: <Bug className="h-12 w-12" />, // Make sure you import `Bug` from lucide-react or any icon set
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

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative py-48">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/sb134.jpg')" }}
        />

        {/* Optional dark overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-colors duration-200">
              Our Services
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto transition-colors duration-200">
              Comprehensive IT solutions designed to accelerate your business
              growth and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Core Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
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
                {/* Text + Icon Side */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-[#d7f9fa] dark:bg-[#1e3f40] rounded-lg mr-4 transition-colors duration-200">
                      <div className="text-[#00c3cb] dark:text-[#70e6e9] transition-colors duration-200">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg transition-colors duration-200">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#00c3cb] dark:bg-[#70e6e9] rounded-full mr-3 transition-colors duration-200"></div>
                        <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-[#e0fbfc] to-[#f0feff] dark:from-[#1e3f40] dark:to-[#264d4e] p-8 rounded-xl transition-colors duration-200">
                    <div className="aspect-video bg-white dark:bg-gray-700 rounded-lg shadow-sm flex items-center justify-center transition-colors duration-200">
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

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-[#e6faff] via-white to-[#e0fafa] dark:from-[#1f2a30] dark:via-[#111827] dark:to-[#1f2a30] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Additional Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              Specialized services to complement your IT strategy and enhance
              your digital presence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#2e3b44] p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-[#00c3cb] dark:text-[#70e6e9] mb-6 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process - Card Style */}
      <section className="py-20 bg-white dark:bg-[#0f172a] transition-colors duration-200">
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
            {[
              {
                step: 1,
                title: "Discovery",
                desc: "Understanding your needs, goals, and current infrastructure",
                color: "#00c3cb",
              },
              {
                step: 2,
                title: "Planning",
                desc: "Designing a comprehensive solution tailored to your requirements",
                color: "#70e6e9",
              },
              {
                step: 3,
                title: "Implementation",
                desc: "Executing the plan with minimal disruption to your operations",
                color: "#00c3cb",
              },
              {
                step: 4,
                title: "Support",
                desc: "Ongoing maintenance and support to ensure optimal performance",
                color: "#70e6e9",
              },
            ].map(({ step, title, desc, color }, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl p-6 text-center transition-all duration-300 transform hover:scale-105"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                  style={{
                    background: color,
                    boxShadow: `0 4px 14px ${color}80`,
                  }}
                >
                  {step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss how our services can help you achieve your business
            goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Connect with Us
            </a>
            <a
              href="/consulting"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
