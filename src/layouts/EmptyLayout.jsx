const EmptyLayout = ({ children }) => {
  return (
    <main className='flex items-center justify-center min-h-screen'>
      <div className='container'>{children}</div>
    </main>
  );
};

export default EmptyLayout;
