import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <Link
        to={`/users/${user.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
