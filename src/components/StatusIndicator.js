import React from 'react';

const StatusIndicator = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center bg-customGreen text-white text-base px-2 py-0.5 rounded-full">
        <img src="/tick.svg" alt="tick" width={24} height={24}/>
        {text}
      </div>
      <div className="h-0.5 w-2 bg-customGreen"></div>
    </div>
  );
};

export default StatusIndicator;
