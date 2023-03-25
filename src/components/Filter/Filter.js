import React from "react";
export const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};
