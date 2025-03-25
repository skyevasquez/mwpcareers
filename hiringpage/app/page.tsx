"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Join the Metro Wireless Plus Team
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We&apos;re looking for talented individuals to help us grow and succeed
          </p>
          <Link 
            href="/careers" 
            className="bg-[#e20074] text-white px-8 py-3 rounded-md hover:bg-[#b8005f] transition-colors font-medium"
          >
            View Open Positions
          </Link>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#e20074] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Competitive Pay</h3>
              <p className="text-gray-600">
                We offer competitive salaries and comprehensive benefits packages
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#e20074] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Career advancement and professional development opportunities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-[#e20074] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Environment</h3>
              <p className="text-gray-600">
                Work with supportive colleagues in a positive team atmosphere
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-lg shadow-md text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">
            Ready to Join Our Team?
          </h2>
          <p className="text-gray-600 mb-6">
            We have positions available in multiple locations across VA, FL, WV, and MD
          </p>
          <Link 
            href="/careers" 
            className="bg-[#e20074] text-white px-8 py-3 rounded-md hover:bg-[#b8005f] transition-colors font-medium inline-block"
          >
            Apply Now
          </Link>
        </section>
        
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-6">About Metro Wireless Plus</h2>
          <p className="text-gray-600 mb-4">
            Metro Wireless Plus is an authorized dealer for Metro by T-Mobile. We operate retail
            locations across the East Coast, providing wireless products and services to our customers.
          </p>
          <p className="text-gray-600">
            Our mission is to deliver exceptional customer service and wireless solutions.
            We&apos;re growing rapidly and looking for talented individuals to join our team.
          </p>
        </section>
      </div>
    </div>
  );
}
