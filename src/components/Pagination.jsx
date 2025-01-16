import React from "react";

const Pagination = ({
  totalUsers,
  usersPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalUsers / usersPerPage);

  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center mt-6">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`mx-1 px-3 py-2 rounded ${
            currentPage === pageNumber
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
