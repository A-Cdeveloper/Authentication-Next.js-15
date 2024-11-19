"use client";

import { logout } from "../_actions";

const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <button className="mt-4" onClick={() => logout()}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;
