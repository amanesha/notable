// src/components/Dashboard.js
import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import BotomNav from "./BottomNav";
import BottomNav from "./BottomNav";

function Dashboard() {
  // const navigate = useNavigate();
  // const currentUser = JSON.parse(localStorage.getItem("currentUser") || {});

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    //navigate("/login");
  };

  return (
    <>
      <main>
        <Outlet />
      </main>
      <footer>
        <BottomNav />
      </footer>
    </>
  );
}

export default Dashboard;
