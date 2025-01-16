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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
