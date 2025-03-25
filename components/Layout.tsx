import Head from 'next/head';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  showHiringHeader?: boolean;
}

export default function Layout({ 
  children, 
  title = 'Careers | Metro Wireless Plus', 
  description = 'Join our team at Metro Wireless Plus',
  showHiringHeader = true
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-[#e20074] text-white py-6 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Metro Wireless Plus</h1>
            <p className="text-lg">Authorized Dealer for Metro by T-Mobile</p>
            {showHiringHeader && (
              <>
                <h2 className="text-2xl font-bold mt-4">We're Hiring!</h2>
                <p>Join our growing team today</p>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        {children}
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