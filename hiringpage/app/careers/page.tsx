"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import NoSSR from "../../../components/NoSSR";

type FormData = {
  position: string;
  location: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resume: File | null;
  additionalDetails: string;
};

type FormErrors = {
  position?: string;
  location?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  resume?: string;
  additionalDetails?: string;
};

export default function CareersPage() {
  // Use traditional state for a simpler implementation
  const [formData, setFormData] = useState<FormData>({
    position: "",
    location: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    resume: null,
    additionalDetails: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFileLoading, setIsFileLoading] = useState(false);

  // Static data
  const positions = [
    {
      title: "Store Manager",
      description: "Lead and manage store operations, drive sales performance, and develop a high-performing team. Responsible for inventory management, customer satisfaction, and achieving store targets.",
      type: "Full-time",
    },
    {
      title: "Retail Sales Representative",
      description: "Provide exceptional customer service while selling wireless products and services. Responsible for meeting sales goals, processing transactions, and maintaining store appearance.",
      type: "Full-time",
    },
    {
      title: "Customer Service Representative",
      description: "Assist customers with account inquiries, technical support, and service issues. Process payments, explain billing details, and ensure positive customer experiences.",
      type: "Part-time",
    },
  ];

  const locations = [
    "ALEXANDRIA, VA",
    "BROOKSVILLE, FL",
    "CHANTILLY, VA",
    "CHARLES TOWN, WV",
    "CHIEFLAND, FL",
    "CENTREVILLE, VA",
    "CULPEPER, VA",
    "EUSTIS, FL",
    "FAIRFAX, VA",
    "FORT PIERCE, FL",
    "GAINESVILLE, FL",
    "HAGERSTOWN, MD",
    "HOMOSASSA, FL",
    "INVERNESS, FL",
    "LEESBURG, FL",
    "LEESBURG, VA",
    "MARTINSBURG, WV",
    "MIAMI, FL",
    "MIAMI BEACH, FL",
    "MANASSAS, VA",
    "NORTH PALM BEACH, FL",
    "NORTH LAUDERDALE, FL",
    "PINELLAS PARK, FL",
    "PEMBROKE PINES, VA",
    "SPRINGFIELD, VA",
    "ST PETERSBURG, FL",
    "SPRING HILL, FL",
    "STERLING, VA",
    "TAMPA, FL",
    "TAVARES, FL",
    "WILDWOOD, FL",
    "WINCHESTER, VA",
    "WOODLAND PARK, FL",
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setIsFileLoading(true);

      // Validate file type
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setErrors({
          ...errors,
          resume: "Please upload a PDF, DOC, or DOCX file",
        });
        e.target.value = "";
        setIsFileLoading(false);
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          resume: "File size must be less than 5MB",
        });
        e.target.value = "";
        setIsFileLoading(false);
        return;
      }

      setFormData({
        ...formData,
        resume: file,
      });

      // Clear error when user selects a valid file
      if (errors.resume) {
        setErrors({
          ...errors,
          resume: undefined,
        });
      }

      setIsFileLoading(false);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    // Validate required fields
    if (!formData.position) newErrors.position = "Position is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    // Validate email format
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Validate phone format
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^(\+\d{1,3})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/.test(
        formData.phone
      )
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Validate resume
    if (!formData.resume) newErrors.resume = "Resume is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate submission with a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log("Application data:", {
        position: formData.position,
        location: formData.location,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        resumeName: formData.resume?.name,
        additionalDetails: formData.additionalDetails,
      });

      setSubmitted(true);
      // Reset form data
      setFormData({
        position: "",
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        resume: null,
        additionalDetails: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <NoSSR>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Careers at Metro Wireless Plus
        </h1>

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
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Application Submitted!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in joining Metro Wireless Plus. We will
                review your application and contact you soon.
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Available Positions
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {positions.map((position, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <h3 className="text-xl font-semibold text-[#e20074] mr-2">
                        {position.title}
                      </h3>
                      <span className="bg-[#e20074] text-white text-xs px-2 py-1 rounded-full">
                        {position.type}
                      </span>
                    </div>
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
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Apply Now
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="position"
                      className="block text-gray-700 font-medium mb-2 text-center"
                    >
                      Position *
                    </label>
                    <select
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        errors.position ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center`}
                    >
                      <option value="">Select a position</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position.title}>
                          {position.title}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="text-red-500 text-sm mt-1">{errors.position}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-gray-700 font-medium mb-2 text-center"
                    >
                      Preferred Location *
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        errors.location ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center`}
                    >
                      <option value="">Select a location</option>
                      {locations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 font-medium mb-2 text-center"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 font-medium mb-2 text-center"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2 text-center"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2 text-center"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(123) 456-7890"
                      className={`w-full px-4 py-2 border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074] text-center`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="resume"
                    className="block text-gray-700 font-medium mb-2 text-center"
                  >
                    Upload Resume (PDF, DOC, DOCX) *
                  </label>
                  <div className="flex justify-center">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className={`w-full px-4 py-2 border ${
                        errors.resume ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074]`}
                      disabled={isFileLoading}
                    />
                    {isFileLoading && (
                      <div className="ml-2">
                        <svg
                          className="animate-spin h-5 w-5 text-[#e20074]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </div>
                    )}
                  </div>
                  {errors.resume && (
                    <p className="text-red-500 text-sm mt-1 text-center">
                      {errors.resume}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="additionalDetails"
                    className="block text-gray-700 font-medium mb-2 text-center"
                  >
                    Additional Details (Optional)
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    value={formData.additionalDetails}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Any additional information you would like to share..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074]"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${
                      isSubmitting ? "bg-gray-400" : "bg-[#e20074] hover:bg-[#b8005f]"
                    } text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center justify-center mx-auto`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </form>
            </section>
          </>
        )}
      </div>
    </NoSSR>
  );
} 