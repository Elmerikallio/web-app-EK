// src/routes/AppRoutes.js
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout.js";
import { Home } from "../pages/Home/Home.js";
import { About } from "../pages/About/About.js";
import { Projects } from "../pages/Projects/Projects.js";
import { Contact } from "../pages/Contact/Contact.js";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};