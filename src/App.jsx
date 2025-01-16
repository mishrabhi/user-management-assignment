import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
