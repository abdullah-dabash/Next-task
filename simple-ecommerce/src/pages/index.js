import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Welcome to Our E-Commerce Site</title>
        <meta name="description" content="Shop the best products online." />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to Our E-Commerce Site</h1>
        <nav className="mt-4">
          <Link href="/products" className="mr-4 text-blue">Products</Link>
          <Link href="/about" className="text-blue-500">About Us</Link>
        </nav>
      </div>
    </>
  );
};

export default Home;
