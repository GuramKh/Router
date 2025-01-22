function ErrorPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className="text-8xl font-bold bg-gradient-to-r from-purple-800 to-indigo-800 text-transparent bg-clip-text">
          404
        </h2>
        <p className="text-2xl text-gray-700">Oops! Page Not Found</p>
        <p className="text-gray-500">The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
