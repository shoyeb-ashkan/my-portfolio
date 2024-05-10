import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-gray-900 text-center pt-2 pb-2">
      <div className="text-center text-xs font-poppins">
        © Copyright <b>{currentYear}</b> Designed & Built by <b><i>Shoyeb Ashkan</i></b>
      </div>
    </div>
  );
}

export default Footer;
