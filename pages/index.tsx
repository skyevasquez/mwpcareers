import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [formData, setFormData] = useState({
    position: '',
    location: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
  });

  const [submitted, setSubmitted] = useState(false);

  const positions = [
    {
      title: 'Store Manager',
      description: 'Lead and manage store operations, drive sales performance, and develop a high-performing team. Responsible for inventory management, customer satisfaction, and achieving store targets.',
    },
    {
      title: 'Retail Sales Representative',
      description: 'Provide exceptional customer service while selling wireless products and services. Responsible for meeting sales goals, processing transactions, and maintaining store appearance.',
    },
    {
      title: 'Customer Service Representative',
      description: 'Assist customers with account inquiries, technical support, and service issues. Process payments, explain billing details, and ensure positive customer experiences.',
    },
  ];

  const locations = [
    'Atlanta, GA',
    'Dallas, TX',
    'Houston, TX',
    'Miami, FL',
    'Orlando, FL',
    'Phoenix, AZ',
    'San Antonio, TX',
    'Tampa, FL',
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Careers | Metro Wireless Plus</title>
        <meta name="description" content="Join our team at Metro Wireless Plus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-[#e20074] text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Metro Wireless Plus</h1>
            <p className="text-lg">Authorized Dealer for Metro by T-Mobile</p>
            <h2 className="text-2xl font-bold mt-4">We're Hiring!</h2>
            <p>Join our growing team today</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {submitted ? (
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="text-center">
              <svg 
                className="w-16 h-16 text-green-500 mx-auto mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining Metro Wireless Plus. We'll review your application and contact you soon.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-[#e20074] text-white px-6 py-2 rounded-md hover:bg-[#b8005f] transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        ) : (
          <>
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Available Positions</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {positions.map((position, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-[#e20074] mb-2">{position.title}</h3>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex items-center justify-center text-gray-500">
                      <svg 
                        className="w-5 h-5 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                        />
                      </svg>
                      <span>Multiple locations available</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Apply Now</h2>
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="position" className="block text-gray-700 font-medium mb-2 text-center">
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center"
                    >
                      <option value="">Select a position</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position.title}>
                          {position.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-gray-700 font-medium mb-2 text-center">
                      Preferred Location *
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center"
                    >
                      <option value="">Select a location</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2 text-center">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2 text-center">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 text-center">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2 text-center">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="resume" className="block text-gray-700 font-medium mb-2 text-center">
                    Upload Resume (PDF, DOC, DOCX) *
                  </label>
                  <div className="flex justify-center">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074]"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-[#e20074] text-white px-8 py-3 rounded-md hover:bg-[#b8005f] transition-colors font-medium"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </section>
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold">Metro Wireless Plus</p>
            <p>Authorized Dealer for Metro by T-Mobile</p>
            <p className="mt-4">&copy; {new Date().getFullYear()} Metro Wireless Plus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}