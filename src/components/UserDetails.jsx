import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const UserDetailsPage = () => {
  const { id } = useParams(); // user ID from the route parameter
  const navigate = useNavigate();
  const { users } = useContext(UserContext);

  // Find the user details
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return (
      <div className="text-center py-4">
        <p className="text-red-500">User not found!</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
      <div className="bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-md shadow-md p-6 text-gray-900 dark:text-gray-100">
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {`${user.address.street}, ${user.address.city}`}
        </p>
      </div>
    </div>
  );
};

export default UserDetailsPage;
