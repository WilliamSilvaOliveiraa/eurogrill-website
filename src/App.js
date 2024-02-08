/* import logo from './logo.svg'; */
import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import FooterSite from "./FooterSite/FooterSite";
import { Outlet } from "react-router-dom";

function App() {
    const [isNavFixed, setIsNavFixed] = useState(false);

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            // Defina a condição para tornar a barra de navegação fixa
            setIsNavFixed(scrollTop > 0);
        };

        // Adicione um ouvinte de rolagem ao montar o componente
        window.addEventListener("scroll", handleScroll);

        // Remova o ouvinte de rolagem ao desmontar o componente
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="App">
            <React.Fragment>
                <div className={`navbar ${isNavFixed ? "fixed" : ""}`}>
                    <Navbar></Navbar>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
                <div>
                    <FooterSite></FooterSite>
                </div>
            </React.Fragment>
        </div>
    );
}

export default App;
