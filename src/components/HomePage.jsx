import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import axios from "axios";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    //Fetch users
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to get users");
        setLoading(false);
      });
  }, []);

  //handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  // handle sorting
  const handleSort = () => {
    const sorted = [...filteredUsers].sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  //put check
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
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
