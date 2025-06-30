import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { EmailData, sendEmail } from "../services/emailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendEmail(formData as EmailData);
      if (success) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert(
          "Failed to send message. Please try again or contact us directly."
        );
      }
    } catch (error) {
      alert("Failed to send message. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat pt-52 pb-52 transition-colors duration-200"
        style={{
          backgroundImage: "url('/123.jpg')",
          imageRendering: "auto",
        }}
      >
        {/* Very Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 opacity-5"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Contact Us
            </h1>
            <p className="text-2xl text-white max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts
              today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We're here to help you achieve your technology goals. Whether
                you need consultation, have questions about our services, or
                want to discuss a project, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      188/5 Malayappa Gounder,
                      <br />
                      Gandhi Nagar,
                      <br />
                      Udumalpet,Tirupur District,
                      <br />
                      Tamil Nadu - 642154,
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg mr-4">
                    <Phone className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 98424 25433 <br />
                      +91 89037 87441
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                    <Mail className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      stsdevteaminwork@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl transition-colors duration-200">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:opacity-50"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:from-[#00b5bd] hover:to-[#5cd7da] disabled:from-[#99e8ea] disabled:to-[#ccf6f7] transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Visit our office or schedule an appointment
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-lg transition-colors duration-200">
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                title="STS Office Location"
                src="https://www.google.com/maps?q=10.5855,77.2513&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                How quickly can you start a new project?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We typically can begin new projects within 1-2 weeks, depending
                on project scope and our current capacity. We'll provide a
                detailed timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer comprehensive post-project support including
                maintenance, updates, and technical assistance. We have various
                support packages to suit different needs and budgets.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                What is your typical project timeline?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Project timelines vary based on complexity and scope. Simple
                projects may take 2-4 weeks, while complex enterprise solutions
                can take 3-6 months. We provide detailed timelines during
                project planning.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-colors duration-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Do you work with businesses of all sizes?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! We work with startups, SMEs, and large enterprises.
                Our solutions are scalable and can be tailored to fit businesses
                of any size and budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
