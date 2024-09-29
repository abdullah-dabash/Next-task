import Head from 'next/head';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl font-bold">About Us</h1>
        <Image src="/pics/images.jpeg" alt="About Us" width={500} height={300} className="mt-4" />
        <p className="mt-2">We are an e-commerce site dedicated to providing the best products.</p>
      </div>
    </>
  );
};

export default About;
