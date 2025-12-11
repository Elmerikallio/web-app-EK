// src/components/layout/MainLayout.js
import React from "react";
import { Navbar } from "./Navbar.js";
import { Footer } from "./Footer.js";

export const MainLayout = ({ children }) => {
    return (
        <div className="app-root">
            <Navbar />
            <main className="app-main">{children}</main>
            <Footer />
        </div>
    );
};