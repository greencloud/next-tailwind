'use client';
import { useRouter } from 'next/navigation';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Banner from '../components/Layout/Banner';

// Custom button components
import ButtonLink from '../components/Layout/CutomButtons';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <Banner>
        <h2>NEXT.js + TS + Tailwind CSS</h2>
        <p>A basic NEXT.js, TypeScript, and Tailwind CSS core baseline template</p>
      </Banner>

      <div className="mx-auto my-10 max-w-7xl">

        <h2 className="text-3xl mb-4">NEXT.js + TS + Tailwind CSS Template</h2>
        <p className="leading-loose mb-3">This is a basic NEXT.js, TypeScript, and TailwindCSS starter template that serves as a clean foundation for building a new React application.</p>
        <p className="leading-loose mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin porttitor felis eget placerat. Nullam molestie enim mauris, nec rutrum erat tincidunt a. Mauris sagittis ex non arcu pharetra dictum. Praesent a augue ac nisi ornare convallis. Sed id accumsan diam, eget sodales massa. Donec non magna maximus, sagittis ligula ut, tempus tellus. Etiam convallis neque massa, nec condimentum leo posuere tincidunt. Donec orci mauris, porta id dapibus eu, commodo et mi. Vestibulum mollis velit non lacus consequat, eget malesuada nisl gravida. Curabitur suscipit, orci eu ullamcorper lacinia, metus ligula ultricies elit, vitae gravida eros metus vel lorem. Fusce dapibus quam nec erat ullamcorper, non rutrum odio molestie. Nulla consectetur libero at nisi ultrices, a eleifend ipsum sodales.</p>

        <div className="flex gap-4">
          <ButtonLink
            btnText="Sector-Z Website"
            btnAction={() => window.open("https://sectorzlabs.com", "_blank")} />

          <ButtonLink
            btnText="Contact Us"
            btnAction={() => router.push("/contact")} />
        </div>

      </div>

      <Footer />
    </div>
  );
}