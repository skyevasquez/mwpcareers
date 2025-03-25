"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white py-4 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="text-xl font-bold">
              Metro Wireless Plus
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/"
              className={`px-3 py-2 rounded-md ${
                pathname === "/" ? "bg-gray-900" : "hover:bg-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/careers"
              className={`px-3 py-2 rounded-md ${
                pathname === "/careers" ? "bg-gray-900" : "hover:bg-gray-700"
              }`}
            >
              Careers
            </Link>
            <Link
              href="/admin"
              className={`px-3 py-2 rounded-md ${
                pathname === "/admin" ? "bg-gray-900" : "hover:bg-gray-700"
              }`}
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 