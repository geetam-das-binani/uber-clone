const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-indigo-600"></div>
    </div>
  );
};

export default Loader;
