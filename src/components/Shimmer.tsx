const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card" />
        ))}
    </div>
  );
};

export default Shimmer;
