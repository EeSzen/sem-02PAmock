import React from "react";

function Filters(props) {
  const { search, type, types, onSearchChange, onTypeChange } = props;

  // Handle search change
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
    console.log(e.target.value);
  };

  // Handle type change
  const handleTypeChange = (e) => {
    onTypeChange(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="filters">
      {/* INSTRUCTION: Add a text input for searching by name */}
      <input
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by Name"
      ></input>

      {/* INSTRUCTION: Add a select field for filtering by type */}
      <select value={type} onChange={handleTypeChange} label="Types">
        <option value={""}>All Types</option>
        {types.map((typeItem, index) => (
          <option key={index} value={typeItem}>
            {typeItem}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
