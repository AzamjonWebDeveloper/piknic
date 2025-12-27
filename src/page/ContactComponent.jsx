import React from 'react';

const ContactComponent = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Exactly matching the original image layout */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center bg-no-repeat flex items-center px-6 md:px-12 lg:px-32"
        style={{
          backgroundImage: `url('https://thumbs.dreamstime.com/b/sunset-dawn-over-mountainous-horizon-multiple-colored-tents-grassy-hillside-people-engaged-various-activities-outdoor-380522790.jpg')`
        }}
      >
        {/* Optional dark overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <h1 className="relative text-white text-4xl md:text-5xl lg:text-6xl font-bold z-10">
          Biz bilan bog'laning
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="py-12 px-6 md:px-12 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text and Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keling, biz bilan gaplashaylik
            </h2>
            <p className="text-gray-600 mb-8">
              Savollar, sharhlar yoki takliflar? Shaklni to'ldiring va biz tez orada bog'lanamiz.
            </p>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">📍</span>
                1055 Arthur ave Elk Groot, 67.<br />
                New Palmas South Carolina.
              </p>
              <p className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">📞</span>
                +1 234 678 9108 99
              </p>
              <p className="flex items-center">
                <span className="text-green-600 text-2xl mr-3">✉️</span>
                Contact@moralizer.com
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
                />
              </div>

              <input
                type="email"
                placeholder="Email*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
              />

              <textarea
                placeholder="Your message..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-700 text-white font-semibold py-4 rounded-full hover:bg-green-800 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;