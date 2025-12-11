// src/components/layout/MainLayout.js
import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div className="app-root">
      <Navbar />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
};
