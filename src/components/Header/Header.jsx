import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center w-100">
      <div className="w-1/2 brand">
        <Link href="/"><Image src="logo.svg" alt="Logo" width={145} height={0} /></Link>
      </div>
      <div className="w-1/2 navigation">
        <nav>
          <ul className="flex items-center justify-end space-x-6">
            <ul><Link href="/" className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">Home</Link></ul>
            <ul><Link href="/about" className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">About</Link></ul>
            <ul><Link href="/products" className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">Products</Link></ul>
            <ul><Link href="/contact" className="relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-black after:transition-all hover:after:w-full">Contact</Link></ul>
          </ul>
        </nav>
      </div>
    </header>
  );
}