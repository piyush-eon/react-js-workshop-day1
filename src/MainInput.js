import React from "react";

const MainInput = ({ setName }) => {
  return (
    <div>
      <input
        style={{ padding: 10 }}
        placeholder="Enter your name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default MainInput;
