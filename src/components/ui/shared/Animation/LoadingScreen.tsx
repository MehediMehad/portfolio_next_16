const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-4 bg-background">
      <div className="w-20 h-20 border-8 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingScreen;
