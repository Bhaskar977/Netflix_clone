import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Browse from "../components/Browse";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default AllRoutes;
