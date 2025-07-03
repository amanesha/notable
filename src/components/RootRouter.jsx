import React from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

function RootRouter() {
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

export default RootRouter;
