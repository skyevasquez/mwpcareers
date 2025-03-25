import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom500() {
  return (
    <Layout 
      title="Server Error | Metro Wireless Plus" 
      description="Server error"
      showHiringHeader={false}
    >
      <div className="flex items-center justify-center py-12">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-6xl font-bold text-[#e20074] mb-4">500</h2>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Server Error</h3>
          <p className="text-gray-600 mb-8">
            We're sorry, but something went wrong on our server. Please try again later or contact support if the problem persists.
          </p>
          <Link href="/" className="bg-[#e20074] text-white px-6 py-3 rounded-md hover:bg-[#b8005f] transition-colors inline-block">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}