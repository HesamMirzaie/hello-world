import { Metadata } from 'next';

type Props = {
  params: {
    productId: string;
  };
};

export const generatedMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return <h2>Product {params.productId}</h2>;
}
