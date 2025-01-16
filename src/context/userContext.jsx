import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//creating context
export const UserContext = createContext();

//create provider
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  //Fetch users
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to get users");
        setLoading(false);
      });
  }, []);

  //Handle Search
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); //Reset to page 1
  };

  // Handle sorting
  const handleSort = () => {
    const sorted = [...filteredUsers].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  //Paginated users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  //change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        filteredUsers,
        searchQuery,
        loading,
        error,
        handleSearch,
        handleSort,
        currentPage,
        usersPerPage,
        handlePageChange,
        currentUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
