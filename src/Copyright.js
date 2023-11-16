import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>&copy; {currentYear} Zlata Shabalina. All Rights Reserved.</p>
    </div>
  );
};

export default Copyright;
