import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserDetailsPage from "./components/UserDetails";
import { UserProvider } from "./context/userContext";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
