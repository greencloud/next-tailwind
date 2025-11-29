import Link from 'next/link';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-0 mt-50 p-7 text-gray-700 text-center">
      <small>&copy; { currentYear } Sector-Z Labs. All rights reserved. | Powered by <Link href="https://sectorzlabs.com" target='_blank'>Sector-Z Labs</Link></small>
    </footer>
  );
}