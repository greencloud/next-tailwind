'use client';
import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Layout/Banner';

export default function Products() {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {

        const res = await fetch(`/api/products`);

        if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);

        const data = await res.json()

        setProduct(data);

      } catch (error: any) {
        setError(error.message);
      }
    }
    load();
  }, []);

  return (
    <div>
      <Header />
      <Banner>
        <h2>Products</h2>
      </Banner>

      <div className="mx-auto my-10 max-w-7xl">

        <h2 className="text-3xl mb-4">Sample Products</h2>
        <p className="leading-loose">Aenean imperdiet, sem non elementum tincidunt, ligula tellus suscipit nisi, sed consequat lacus sapien id erat. Fusce quis facilisis elit. Integer sagittis semper orci id scelerisque. Pellentesque dapibus nibh vitae est fermentum elementum. In accumsan consequat malesuada. Curabitur at ante felis. Nam cursus efficitur est, at euismod enim rutrum vel.</p>

        <h3 className="text-2xl my-4">Database CRUD Data Sample</h3>

        {!product && <p>Loading product info...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {product && (
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(product, null, 2)}
          </pre>
        )}

      </div>

      <Footer />
    </div>
  );
}