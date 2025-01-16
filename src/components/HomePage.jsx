import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import { UserContext } from "../context/userContext";

const HomePage = () => {
  const {
    filteredUsers,
    searchQuery,
    loading,
    error,
    handleSearch,
    handleSort,
  } = useContext(UserContext);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <SearchBar
        query={searchQuery}
        onSearch={handleSearch}
        onSort={handleSort}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
