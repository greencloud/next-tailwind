'use client';
import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Layout/Banner';
import ProductCreate from '../../components/Forms/ProductCreate';

export default function Products() {
  const [product, setProduct] = useState(null);
  const [productError, setProductError] = useState(null);
  const [products, setProducts] = useState(null);
  const [productsError, setProductsError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/product/2`);
        if (!res.ok) throw new Error(`HTTP Error! Status: ${res.status}`);
        const data = await res.json()
        setProduct(data);
      } catch (productError: any) {
        setProductError(productError.message);
      }

      try {
        const products = await fetch(`/api/products`);
        if (!products.ok) throw new Error(`HTTP Error! Status: ${products.status}`);
        const data = await products.json()
        setProducts(data);
      } catch (productsError: any) {
        setProductsError(productsError.message);
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
        <p><strong>Create</strong> data and save it in the database.</p>
        <ProductCreate />

        {!product && <p>Loading product info...</p>}
        {productError && <p className="text-red-500">{productError}</p>}

        {product && (
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(product, null, 1)}
          </pre>
        )}

        {!products && <p>Loading product info...</p>}
        {productsError && <p className="text-red-500">{productsError}</p>}

        {products && (
          <pre className="bg-gray-100 p-4 rounded mt-8">
            {JSON.stringify(products, null, 5)}
          </pre>
        )}

      </div>

      <Footer />
    </div>
  );
}