import React from "react";

const SearchBar = ({ query, onSearch, onSort }) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="text"
        placeholder="Search by Name"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="border px-4 py-2 rounded w-fullsm:w-1/2"
      />
      <button
        onClick={onSort}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sort
      </button>
    </div>
  );
};

export default SearchBar;
