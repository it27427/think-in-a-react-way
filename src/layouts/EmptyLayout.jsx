const EmptyLayout = ({ children }) => {
  return (
    <main className='flex items-center justify-center min-h-screen'>
      <div className='container py-3 px-6 lg:px-10'>{children}</div>
    </main>
  );
};

export default EmptyLayout;
