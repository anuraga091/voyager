import React from "react";

const SkeletonRow = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-700 h-4 rounded-sm mb-4"></div>
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-4 bg-gray-600 rounded"></div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonRow
