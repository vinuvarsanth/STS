import { Award, Eye, Shield, Target, Users, Zap } from "lucide-react";

const About = () => {
  const strengths = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Quick implementation with minimal downtime",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security First",
      description: "Enterprise-grade security in all our solutions",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes",
    },
  ];

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      <section className="relative py-48">
        {" "}
        {/* Increased padding to show more image */}
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/b3.jpg')" }}
        />
        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 transition-colors duration-200">
              About Shanmuga Technovative Solutions
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto transition-colors duration-200">
              Pioneering digital transformation with innovative IT solutions and
              unwavering commitment to excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                Who We Are
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                Shanmuga Technovative Solutions (STS) is a leading IT service
                provider dedicated to empowering businesses through innovative
                technology solutions. Founded with a vision to bridge the gap
                between traditional business operations and modern digital
                capabilities, we have grown to become a trusted partner for
                organizations across various industries.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                Our team of certified professionals brings together decades of
                combined experience in software development, cloud computing,
                infrastructure management, and digital transformation. We pride
                ourselves on delivering solutions that not only meet current
                needs but also scale with future growth.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                At STS, we believe that technology should be an enabler, not a
                barrier. That's why we focus on creating user-friendly,
                efficient, and robust solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "5+", label: "Years of Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "200+", label: "Happy Clients" },
                { value: "50+", label: "Team Members" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#d7f9fa] dark:bg-[#1e3f40] p-6 rounded-lg text-center shadow-md transition-colors duration-200"
                >
                  <h3 className="text-3xl font-bold text-[#00c3cb] dark:text-[#70e6e9] mb-2 transition-colors duration-200">
                    {item.value}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-colors duration-200">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#d7f9fa] dark:bg-[#1e3f40] rounded-lg mr-4 transition-colors duration-200">
                  <Target className="h-8 w-8 text-[#00c3cb] dark:text-[#70e6e9] transition-colors duration-200" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                To empower businesses with innovative, reliable, and scalable IT
                solutions that drive growth, enhance efficiency, and create
                competitive advantages. We are committed to delivering
                exceptional service, fostering long-term partnerships, and
                helping our clients navigate the ever-evolving digital landscape
                with confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg transition-colors duration-200">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-[#e1fbfc] dark:bg-[#1a4244] rounded-lg mr-4 transition-colors duration-200">
                  <Eye className="h-8 w-8 text-[#00c3cb] dark:text-[#70e6e9] transition-colors duration-200" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                  Our Vision
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                To become the most trusted and innovative IT solutions provider,
                recognized for our expertise, integrity, and commitment to
                client success. We envision a future where technology seamlessly
                integrates with business operations, enabling organizations to
                achieve their full potential and make a positive impact in their
                respective industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Our Core Strengths
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              What sets us apart and makes us the preferred choice for IT
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="text-center group transition-transform duration-300 hover:scale-105"
              >
                <div className="p-4 bg-gradient-to-br from-[#d7f9fa] to-[#e1fbfc] dark:from-[#1e3f40] dark:to-[#1a4244] rounded-xl mb-6 inline-block transition-colors duration-200">
                  <div className="text-[#00c3cb] dark:text-[#70e6e9] transition-colors duration-200">
                    {strength.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                  {strength.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Strengths */}
<section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Text Content */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors duration-200">
          Why Choose STS?
        </h2>
        <div className="space-y-6">
          {[
            // {
            //   title: "Proven Track Record",
            //   description: "Over 500 successfully completed projects across various industries",
            // },
            {
              title: "24/7 Support",
              description: "Round-the-clock technical support and maintenance services",
            },
            {
              title: "Scalable Solutions",
              description: "Future-ready solutions that grow with your business",
            },
            {
              title: "Cost-Effective",
              description: "Competitive pricing with maximum return on investment",
            },
            {
              title: "Industry Expertise",
              description: "Deep understanding of various industry requirements and challenges",
            },
            {
              title: "Innovation Focus",
              description: "Continuous adoption of latest technologies and best practices",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-2 h-2 bg-[#00c3cb] dark:bg-[#70e6e9] rounded-full mt-2 mr-4 transition-colors duration-200"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Commitment Box */}
      <div className="bg-gradient-to-br from-[#00c3cb] to-[#70e6e9] dark:from-[#1e3f40] dark:to-[#2e5f60] p-8 rounded-xl text-white transition-colors duration-300">
        <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
        <p className="mb-6 leading-relaxed text-white dark:text-gray-200">
          We are committed to building long-lasting partnerships with our
          clients based on trust, transparency, and mutual success. Every
          project is an opportunity to exceed expectations and deliver
          solutions that make a real difference.
        </p>
        <div className="bg-white bg-opacity-20 dark:bg-white/10 p-4 rounded-lg">
          <p className="text-center text-lg font-semibold text-white dark:text-[#70e6e9]">
            "Your Satisfaction, Our Commitment"
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default About;
