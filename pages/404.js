import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout 
      title="Page Not Found | Metro Wireless Plus" 
      description="Page not found"
      showHiringHeader={false}
    >
      <div className="flex items-center justify-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-6xl font-bold text-[#e20074] mb-4">404</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h3>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="bg-[#e20074] text-white px-6 py-3 rounded-md hover:bg-[#b8005f] transition-colors inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}