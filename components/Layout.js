import React from "react";

import Topbar from "./Topbar";
import SideBar from "./Sidebar";

export default ({ children }) => {
  return (
    <main>
      <Topbar />
      <div>
        <SideBar />
        {children}
      </div>
    </main>
  );
};
