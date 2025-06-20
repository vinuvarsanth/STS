import { ArrowRight, Cloud, Globe, Settings, Smartphone } from "lucide-react";
import { useEffect } from "react";

const Products = () => {
  const products = [
    {
      icon: <Settings className="h-16 w-16" />,
      title: "Customized Software",
      image: "/i9.png",
      description:
        "Tailored software solutions designed specifically for your business processes and requirements.",
      features: [
        "Custom Business Logic",
        "Scalable Architecture",
        "Integration Capabilities",
        "User-Friendly Interface",
        "Ongoing Support & Updates",
      ],
      benefits: [
        "Perfect fit for your workflow",
        "Competitive advantage",
        "Improved efficiency",
        "Long-term cost savings",
      ],
    },
    {
      icon: <Cloud className="h-16 w-16" />,
      title: "Cloud Solutions",
      image: "/cloud.jpg",
      description:
        "Flexible and scalable cloud-based services for efficient storage, computing, and operations.",
      features: [
        "Cloud Migration",
        "SaaS / PaaS Integration",
        "Cloud Storage & Backup",
        "Serverless Architecture",
        "Cloud Security",
      ],
      benefits: [
        "Reduced infrastructure costs",
        "Easy scalability",
        "Remote accessibility",
        "Enhanced data security",
      ],
    },
    {
      icon: <Smartphone className="h-16 w-16" />,
      title: "Mobile Applications",
      image: "/i1.png",
      description:
        "Native and cross-platform mobile apps that provide seamless user experiences across devices.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "User-Centric Design",
        "Backend Integration",
        "App Store Optimization",
      ],
      benefits: [
        "Reach mobile audience",
        "Enhanced user engagement",
        "Brand visibility",
        "Direct customer connection",
      ],
    },
    {
      icon: <Globe className="h-16 w-16" />,
      title: "Web-Based Applications",
      image: "/i6.png",
      description:
        "Powerful web applications that work seamlessly across all browsers and devices.",
      features: [
        "Responsive Design",
        "Cloud-Based Architecture",
        "Real-Time Functionality",
        "Security Features",
        "Analytics Integration",
      ],
      benefits: [
        "Universal accessibility",
        "Easy maintenance",
        "Scalable performance",
        "Data-driven insights",
      ],
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative py-48 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/b111.jpg')" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-colors duration-200">
              Our Products
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto transition-colors duration-200">
              Innovative software solutions designed to drive business growth
              and operational efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white dark:bg-[#0f172a] transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Product Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              From custom-built solutions to ready-to-deploy applications, we
              offer a comprehensive range of software products
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Product Info */}
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#e0fafa] to-[#e6faff] dark:from-[#113d3d] dark:to-[#1f2a30] rounded-xl mr-6 transition-colors duration-200">
                      <div className="text-[primary] dark:text-[#70e6e9] transition-colors duration-200">
                        {product.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg transition-colors duration-200">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-[primary] dark:bg-[#70e6e9] rounded-full mr-3 transition-colors duration-200"></div>
                            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                        Business Benefits
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-[#70e6e9] dark:bg-[primary] rounded-full mr-3 transition-colors duration-200"></div>
                            <span className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 bg-[primary] text-white font-semibold rounded-lg hover:bg-[primaryDark] transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Product Visual */}
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#1e293b] dark:to-[#334155] p-8 rounded-xl transition-colors duration-200">
                    <div className="aspect-square bg-white dark:bg-gray-600 rounded-lg shadow-lg flex items-center justify-center transition-colors duration-200">
                      <img
                        src={product.image}
                        alt={product.title}
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

      {/* Product Development Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Our Development Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              A proven methodology that ensures quality, efficiency, and client
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-200">
                  1
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                Requirements Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">
                Understanding your business needs and technical requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 transition-colors duration-200">
                  2
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                Design & Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">
                Creating user-friendly designs and robust system architecture
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400 transition-colors duration-200">
                  3
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                Development
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">
                Agile development with regular client feedback and iterations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400 transition-colors duration-200">
                  4
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                Testing & QA
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">
                Comprehensive testing to ensure quality and performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-200">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-200">
                  5
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                Deployment & Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">
                Smooth deployment and ongoing maintenance support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Leveraging cutting‑edge technologies to build robust and scalable
              solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "react",
              "nodedotjs",
              "python",
              "tailwindcss",
              "flutter",
              "googlecloud",
              "mysql",
              "mongodb",
              "postgresql",
              "docker",
              "typescript",
              "nextdotjs",
            ].map((icon, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 mb-3">
                  <img
                    src={`https://cdn.simpleicons.org/${icon}`}
                    alt={icon}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium capitalize">
                  {icon.replace(/-dot-/g, ".")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
