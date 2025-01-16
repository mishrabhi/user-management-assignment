import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserDetailsPage from "./components/UserDetails";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* User Details Page */}
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
