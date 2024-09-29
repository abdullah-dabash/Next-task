import { useRouter } from 'next/router';
import Head from 'next/head';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description for Product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description for Product 2' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Description for Product 3' },
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p>{product.description}</p>
        <p className="font-semibold">{product.price}</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2">Add to Cart</button>
      </div>
    </>
  );
};

export default ProductDetail;
