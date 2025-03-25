"use client";

import { useState } from "react";
import NoSSR from "../../../components/NoSSR";

// Mock data for demonstration
const MOCK_APPLICATIONS = [
  {
    id: "1",
    position: "Store Manager",
    location: "ALEXANDRIA, VA",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(703) 555-1234",
    additionalDetails: "I have 5 years of retail management experience.",
    resumeFileName: "john_doe_resume.pdf",
    status: "pending",
    submittedAt: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
  },
  {
    id: "2",
    position: "Retail Sales Representative",
    location: "MIAMI, FL",
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    phone: "(305) 555-6789",
    additionalDetails: "I am passionate about customer service and have previous experience in wireless sales.",
    resumeFileName: "jane_smith_resume.pdf", 
    status: "reviewed",
    submittedAt: Date.now() - 1000 * 60 * 60 * 24 * 5, // 5 days ago
  },
  {
    id: "3",
    position: "Customer Service Representative",
    location: "TAMPA, FL",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@example.com",
    phone: "(813) 555-4321",
    additionalDetails: "",
    resumeFileName: "michael_johnson_resume.docx",
    status: "contacted",
    submittedAt: Date.now() - 1000 * 60 * 60 * 24 * 1, // 1 day ago
  }
];

interface Application {
  id: string;
  position: string;
  location: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  additionalDetails: string;
  resumeFileName?: string;
  status: string;
  submittedAt: number;
}

export default function AdminPage() {
  const [applications, setApplications] = useState<Application[]>(MOCK_APPLICATIONS);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleStatusChange = async (id: string, status: string) => {
    setIsLoading(true);
    try {
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Update application status in local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status } : app
      ));
      
      // Update selected application if it's the one we're changing
      if (selectedApplication && selectedApplication.id === id) {
        setSelectedApplication({ ...selectedApplication, status });
      }
    } catch (error) {
      console.error("Error updating status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewResume = async (application: Application) => {
    if (!application.resumeFileName) {
      alert("No resume available");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      alert(`In a real implementation, this would open ${application.resumeFileName}`);
    } catch (error) {
      console.error("Error retrieving resume:", error);
      alert("Failed to retrieve resume");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <NoSSR>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Job Applications Admin</h1>

        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-md">
              <svg
                className="animate-spin h-10 w-10 text-[#e20074] mx-auto"
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
              <p className="mt-2 text-center">Loading...</p>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Applications</h2>
            
            {applications.length === 0 ? (
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p>No applications found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Position</th>
                      <th className="py-3 px-4 text-left">Location</th>
                      <th className="py-3 px-4 text-left">Date</th>
                      <th className="py-3 px-4 text-left">Status</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app) => (
                      <tr key={app.id} className="border-t border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          {app.firstName} {app.lastName}
                        </td>
                        <td className="py-3 px-4">{app.position}</td>
                        <td className="py-3 px-4">{app.location}</td>
                        <td className="py-3 px-4">{formatDate(app.submittedAt)}</td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-semibold
                              ${app.status === "pending" ? "bg-yellow-200 text-yellow-800" : ""}
                              ${app.status === "reviewed" ? "bg-blue-200 text-blue-800" : ""}
                              ${app.status === "contacted" ? "bg-purple-200 text-purple-800" : ""}
                              ${app.status === "interviewed" ? "bg-indigo-200 text-indigo-800" : ""}
                              ${app.status === "hired" ? "bg-green-200 text-green-800" : ""}
                              ${app.status === "rejected" ? "bg-red-200 text-red-800" : ""}
                            `}
                          >
                            {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button
                            onClick={() => setSelectedApplication(app)}
                            className="text-blue-600 hover:text-blue-800 mr-2"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleViewResume(app)}
                            className={`text-green-600 hover:text-green-800 ${!app.resumeFileName ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={!app.resumeFileName}
                          >
                            Resume
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div>
            {selectedApplication ? (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Application Details</h2>
                
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">{selectedApplication.position}</h3>
                  <p className="text-gray-600">{selectedApplication.location}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Submitted on {formatDate(selectedApplication.submittedAt)}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700">Applicant</h4>
                  <p>
                    {selectedApplication.firstName} {selectedApplication.lastName}
                  </p>
                  <p>
                    <a href={`mailto:${selectedApplication.email}`} className="text-blue-600 hover:underline">
                      {selectedApplication.email}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${selectedApplication.phone}`} className="text-blue-600 hover:underline">
                      {selectedApplication.phone}
                    </a>
                  </p>
                </div>

                {selectedApplication.additionalDetails && (
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700">Additional Details</h4>
                    <p className="whitespace-pre-wrap">{selectedApplication.additionalDetails}</p>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700">Resume</h4>
                  {selectedApplication.resumeFileName ? (
                    <button
                      onClick={() => handleViewResume(selectedApplication)}
                      className="text-blue-600 hover:underline"
                    >
                      {selectedApplication.resumeFileName}
                    </button>
                  ) : (
                    <p className="text-gray-500">No resume available</p>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Status</h4>
                  <select
                    value={selectedApplication.status}
                    onChange={(e) => handleStatusChange(selectedApplication.id, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e20074]"
                  >
                    <option value="pending">Pending</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="contacted">Contacted</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="hired">Hired</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>

                <button
                  onClick={() => setSelectedApplication(null)}
                  className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 text-center">Select an application to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </NoSSR>
  );
} 