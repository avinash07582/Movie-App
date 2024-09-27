
import React from 'react';

const ContactSection = () => {
  return (
    <section
      className="h-full w-full bg-[#27272a] text-gray-100 min-h-screen flex items-center justify-center py-16 px-6"
      id="contact"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-[#6556CD] mb-12">Contact Us</h2>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Contact Info */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-4 font-medium">
              Have questions or feedback? Feel free to reach out to us and we will get back to you as soon as possible!
            </p>
            <p className="mb-2">
              <strong>Email:</strong> support@moviehub.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +1 (123) 456-7890
            </p>
            <p>
              <strong>Address:</strong> 123 Movie Street, Film City, USA
            </p>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:border-[#6556CD] focus:ring-2 focus:ring-[#6556CD]]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:border-[#6556CD] focus:ring-2 focus:ring-[#6556CD]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 focus:border-[#6556CD] focus:ring-2 focus:ring-[#6556CD]"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6556CD] text-gray-900 py-3 px-6 rounded-lg font-semibold shadow hover:bg-[#6556CD] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
