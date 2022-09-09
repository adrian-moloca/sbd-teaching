import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../../pages/admin/Admin";
import Dashboard from "../../pages/dashboard/Dashboard";
import Home from "../../pages/home/Home";
import NotFound from "../../pages/home/notfound/NotFound";
import Register from "../../pages/register/Register";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default Routing;
