import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code,
  Headphones,
  Network,
  Server,
  Star,
} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [email, setEmail] = useState("");
  const { theme } = useTheme();
  const services = [
    {
      icon: <Network className="h-8 w-8" />,
      title: "API Communication & Integration",
      description:
        "Seamless connectivity solutions for your business operations",
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Web & Mobile Infrastructure",
      description:
        "Robust IT infrastructure to power your digital transformation",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Managed & Support Services",
      description: "24/7 support and maintenance for your IT systems",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern businesses",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Solutions",
      description: "Custom software development tailored to your needs",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "STS transformed our IT infrastructure completely. Their team is professional, knowledgeable, and always available when we need support.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Growth Dynamics",
      text: "The cloud migration project was executed flawlessly. We saw immediate improvements in performance and significant cost savings.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Innovate Solutions",
      text: "Outstanding software development services. They delivered exactly what we needed, on time and within budget.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32 transition-colors duration-200"
        style={{ backgroundImage: "url('/b4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Satisfaction,
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c3cb] to-[#70e6e9]">
              {" "}
              Our Commitment
            </span>
          </h1>

          <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Empowering businesses with innovative IT solutions, cutting-edge
            technology, and unwavering support. Transform your digital landscape
            with Shanmuga Technovative Solutions.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00c3cb] to-[#70e6e9] text-white font-semibold rounded-lg hover:from-[#00aab1] hover:to-[#5fd8db] transition-all duration-200 transform hover:scale-105"
          >
            Start Your Project Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
                  About Shanmuga Technovative Solutions
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-200">
                With years of expertise in delivering comprehensive IT
                solutions, we specialize in transforming businesses through
                innovative technology implementations. Our team of certified
                professionals is dedicated to providing exceptional service and
                cutting-edge solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-200">
                From cloud migration to custom software development, we're your
                trusted partner in digital transformation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-[#00c3cb] dark:text-[#70e6e9] font-semibold hover:text-[#009ba1] dark:hover:text-[#5ad4d7] transition-colors duration-200"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#d7f9fa] dark:bg-[#1e3f40] p-6 rounded-lg transition-colors duration-200">
                <h3 className="text-2xl font-bold text-[#00c3cb] dark:text-[#70e6e9] mb-2 transition-colors duration-200">
                  50+
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  Projects Completed
                </p>
              </div>
              <div className="bg-[#e1fbfc] dark:bg-[#1a4244] p-6 rounded-lg transition-colors duration-200">
                <h3 className="text-2xl font-bold text-[#00c3cb] dark:text-[#70e6e9] mb-2 transition-colors duration-200">
                  99.9%
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  Uptime Guaranteed
                </p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg transition-colors duration-200">
                <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2 transition-colors duration-200">
                  Monday - Saturday
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  Support Available
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg transition-colors duration-200">
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2 transition-colors duration-200">
                  100%
                </h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              Comprehensive IT solutions designed to accelerate your business
              growth and digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="text-[#00c3cb] dark:text-[#70e6e9] mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00c3cb] to-[#70e6e9] text-white font-semibold rounded-lg hover:from-[#00b0b7] hover:to-[#64d5d8] transition-colors duration-200"
            >
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
              Real feedback from businesses we've helped transform
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl transition-colors duration-200 shadow-md">
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  )
                )}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 text-center mb-6 italic transition-colors duration-200">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-center">
                <p className="font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-[#00c3cb] dark:text-[#70e6e9] font-medium transition-colors duration-200">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-[#00c3cb] hover:text-white dark:hover:bg-[#00c3cb] transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg hover:bg-[#00c3cb] hover:text-white dark:hover:bg-[#00c3cb] transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-gradient-to-r from-[#00c3cb] to-[#70e6e9]"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Your Future Together
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Ready to transform your business with innovative IT solutions? Get
            started today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
