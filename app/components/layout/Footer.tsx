import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import NewsletterForm from '../Newsletter';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              <Link href={"#"} aria-label="Facebook">
                <FaFacebook size={28} className="text-blue-600 dark:text-white" />
              </Link>
              <Link href={"#"} aria-label="Twitter">
                <FaXTwitter size={28} className="text-blue-400 dark:text-white" />
              </Link>
              <Link href={"#"} aria-label="Instagram">
                <FaInstagram size={28} className="text-pink-500 dark:text-white" />
              </Link>
              <Link href={"#"} aria-label="LinkedIn">
                <FaLinkedin size={28} className="text-blue-700 dark:text-white" />
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-white">Important Links</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Services</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <NewsletterForm />

        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} CleanJet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
