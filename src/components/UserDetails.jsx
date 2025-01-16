import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch user details");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="container mx-auto py-8 px-4">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 px-4 py-2 rounded mb-4"
      >
        Go Back
      </button>
      <div className="bg-white p-4 rounded shadow">
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
          <strong>Website:</strong>{" "}
          <a
            href={`http://${user.website}`}
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
