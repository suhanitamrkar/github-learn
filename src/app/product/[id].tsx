// pages/product/[id].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

type ProductProps = {
  id: string;
  name: string;
  description: string;
};

const ProductPage = ({ id, name, description }: ProductProps) => {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed until generation is complete
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product: {name}</h1>
      <p>Description: {description}</p>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductPage;

// Define dynamic paths
export const getStaticPaths: GetStaticPaths = async () => {
  // Example of fetching possible paths from an API or data source
  const products = [{ id: '1' }, { id: '2' }]; // Replace with real data

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: true };
};

// Fetch data for the page
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  // Fetch product details (replace this with your actual data fetching logic)
  const product = {
    id,
    name: `Product ${id}`,
    description: `Description for product ${id}`,
  };

  return { props: product };
};
