const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 animate-pulse">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-60 rounded-xl bg-gray-200 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
