import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-main">
      <Header />
      <main className="flex-grow flex">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
