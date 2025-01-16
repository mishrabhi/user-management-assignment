import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { UserContext } from "../context/userContext";
import Header from "./Header";
import Pagination from "./Pagination";

const HomePage = () => {
  const {
    filteredUsers,
    searchQuery,
    loading,
    error,
    handleSearch,
    handleSort,
    currentUsers,
    currentPage,
    usersPerPage,
    handlePageChange,
  } = useContext(UserContext);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto py-8 px-4">
        <SearchBar
          query={searchQuery}
          onSearch={handleSearch}
          onSort={handleSort}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <Pagination
          totalUsers={filteredUsers.length}
          usersPerPage={usersPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomePage;
