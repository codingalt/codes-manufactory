import React from 'react'

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-5">
      <p className="font-normal text-[12px] md:text-[14px] text-white text-center">
        &copy; {currentYear} Labors of Tech. All rights reserved.
      </p>
    </div>
  );
}

export default Copyright