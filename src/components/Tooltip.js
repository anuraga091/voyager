import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group flex items-center">
      {children}
      <div className="absolute bottom-full mb-2 w-max hidden group-hover:block bg-tooltipBackground text-customGray text-base rounded py-1 px-2 ">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
