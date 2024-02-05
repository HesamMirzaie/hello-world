export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2 style={{ backgroundColor: 'rebeccapurple', padding: '1rem' }}>
        Feature Products
      </h2>
    </>
  );
}
