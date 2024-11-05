import React from "react";

const Socialbtn = ({ icon, link }) => {
  return (
    <div className="rounded-full bg-transparent border border-[grey] p-2">
      <a href={link}>{icon}</a>
    </div>
  );
};

export default Socialbtn;
