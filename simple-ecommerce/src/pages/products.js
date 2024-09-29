import Head from 'next/head';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

const Products = () => {
  return (
    <>
      <Head>
        <title>Products</title>
        <meta name="description" content="Browse our products." />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Products</h1>
        <ul className="mt-4">
          {products.map(product => (
            <li key={product.id} className="mb-2">
              <Link href={`/products/${product.id}`} className="text-blue-500">
                {product.name} - {product.price}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Products;
