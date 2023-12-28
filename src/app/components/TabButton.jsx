import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-[#C5B6F1] border-b border-[#C5B6F1]"
    : "text-[#dedede]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 text-2xl font-semibold hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
