import React from 'react';

const Page = ({ title, children }) => {
  return (
    <div className="page">
      <h2 className="page-title"style={{fontFamily: "Footlight MT Light"}}>{title}</h2>
      {children}
    </div>
  );
};

export default Page;
