import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Lightbulb,
  Shield,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

const Consulting = () => {
  const consultingServices = [
    {
      icon: <Lightbulb className="h-16 w-16" />,
      title: "Technology Consulting",
      description:
        "Strategic technology advisory to help you make informed decisions and align IT with business objectives.",
      details: [
        "Technology Strategy Development",
        "Digital Transformation Roadmap",
        "Technology Stack Evaluation",
        "Vendor Selection & Management",
        "IT Budget Planning & Optimization",
      ],
      outcomes: [
        "Reduced technology costs",
        "Improved operational efficiency",
        "Better technology decisions",
        "Future-ready IT strategy",
      ],
    },
    {
      icon: <Target className="h-16 w-16" />,
      title: "Project Management",
      description:
        "Expert project management services to ensure successful delivery of your IT initiatives on time and within budget.",
      details: [
        "Project Planning & Scheduling",
        "Risk Assessment & Mitigation",
        "Resource Management",
        "Quality Assurance",
        "Stakeholder Communication",
      ],
      outcomes: [
        "On-time project delivery",
        "Reduced project risks",
        "Improved team collaboration",
        "Better resource utilization",
      ],
    },
    {
      icon: <Shield className="h-16 w-16" />,
      title: "IT Security Consulting",
      description:
        "Comprehensive security assessments and strategies to protect your digital assets and ensure compliance.",
      details: [
        "Security Risk Assessment",
        "Compliance & Regulatory Guidance",
        "Security Policy Development",
        "Incident Response Planning",
        "Employee Security Training",
      ],
      outcomes: [
        "Enhanced security posture",
        "Regulatory compliance",
        "Reduced security risks",
        "Improved incident response",
      ],
    },
    {
      icon: <Zap className="h-16 w-16" />,
      title: "Process Optimization",
      description:
        "Business process analysis and optimization to improve efficiency and reduce operational costs.",
      details: [
        "Process Analysis & Mapping",
        "Automation Opportunities",
        "Workflow Optimization",
        "Performance Metrics & KPIs",
        "Change Management Support",
      ],
      outcomes: [
        "Increased productivity",
        "Reduced operational costs",
        "Streamlined workflows",
        "Better performance tracking",
      ],
    },
  ];

  const consultingProcess = [
    {
      step: 1,
      title: "Initial Assessment",
      description:
        "Understanding your current state, challenges, and objectives",
    },
    {
      step: 2,
      title: "Strategy Development",
      description:
        "Creating a customized roadmap aligned with your business goals",
    },
    {
      step: 3,
      title: "Implementation Planning",
      description:
        "Detailed planning with timelines, resources, and milestones",
    },
    {
      step: 4,
      title: "Execution Support",
      description: "Ongoing guidance and support throughout implementation",
    },
    {
      step: 5,
      title: "Performance Review",
      description:
        "Measuring results and optimizing for continuous improvement",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Certified consultants with deep industry experience",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Proven Track Record",
      description: "500+ successful consulting engagements",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Industry Recognition",
      description: "Recognized expertise in technology consulting",
    },
  ];

  const industries = [
    { name: "Healthcare", emoji: "🏥" },
    { name: "Finance", emoji: "💰" },
    { name: "Manufacturing", emoji: "🏭" },
    { name: "Retail", emoji: "🛒" },
    { name: "Education", emoji: "📚" },
    { name: "Government", emoji: "🏛️" },
    { name: "Non-Profit", emoji: "🤝" },
    { name: "Technology", emoji: "💻" },
    { name: "Real Estate", emoji: "🏢" },
    { name: "Logistics", emoji: "🚚" },
    { name: "Energy", emoji: "⚡" },
    { name: "Media", emoji: "📺" },
  ];
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-48 transition-colors duration-200"
        style={{ backgroundImage: "url('/b1.jpg')" }}
      >
        {/* Removed backdrop-blur-sm */}
        <div className="absolute inset-0 bg-black bg-opacity-60 dark:bg-opacity-35"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            IT Consulting Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            Strategic guidance and expert advice to optimize your technology
            investments and drive business growth
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-highlightBg dark:bg-primary/20 text-primary dark:text-secondary rounded-full text-sm font-medium mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Consulting Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              End-to-end consulting solutions designed to address your unique
              technology challenges
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary/40 dark:hover:border-[#70e6e9]/40"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-primary mr-2" />
                        What We Provide
                      </h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#00c3cb] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <Target className="h-5 w-5 text-secondary mr-2" />
                        Expected Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {service.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#70e6e9] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-sectionBg to-lightBg dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-primary dark:text-secondary rounded-full text-sm font-medium mb-4 shadow-sm">
              Our Methodology
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Consulting Process
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              A structured five-step approach that ensures effective
              consultation and measurable results
            </p>
          </div>

          <div className="relative">
            {/* Line Connector for Large Screens */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[#70e6e9] to-[#00c3cb] dark:from-primary/30 dark:via-[#70e6e9]/30 dark:to-[#00c3cb]/30 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {consultingProcess.map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary via-[#70e6e9] to-[#00c3cb] rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-bold text-white">
                        {process.step}
                      </span>
                    </div>
                    {index < consultingProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-8 z-20">
                        <ArrowRight className="h-9 w-9 text-primary animate-pulse -mt-4" />
                      </div>
                    )}
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-highlightBg dark:bg-primary/20 text-primary dark:text-secondary rounded-full text-sm font-medium mb-4">
              Why STS?
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Your Trusted Technology Partner
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Proven expertise and unwavering commitment to delivering
              measurable business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-[#e0fafa] to-[#d6fefe] dark:from-primary/10 dark:to-secondary/10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-white rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm font-medium mb-4 shadow-sm">
              Industry Expertise
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Deep domain knowledge and specialized expertise across multiple
              industry verticals
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 text-center border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-600">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {industry.emoji}
                  </div>
                  <p className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {industry.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Consulting;
