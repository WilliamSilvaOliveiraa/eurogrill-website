import { useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import "./Navbar.css";
import LogoImagem from "../assets/images/Logo padrao.png";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const [isNavActive, setIsNavActive] = useState(false);

    const showNavbar = () => {
        setIsNavActive(!isNavActive);
    };

    useEffect(() => {
        const dropdown = document.querySelector(".dropdown");

        const toggleDropdown = () => {
            dropdown.classList.toggle("active");
        };

        dropdown.addEventListener("click", toggleDropdown);

        // Limpe o evento quando o componente for desmontado
        return () => {
            dropdown.removeEventListener("click", toggleDropdown);
        };
    }, []); // O segundo argumento vazio faz com que este efeito só seja executado uma vez, após a montagem do componente.

    // Adicionando a classe "responsive_nav" com base no estado isNavActive
    useEffect(() => {
        if (navRef.current) {
            if (isNavActive) {
                navRef.current.classList.add("responsive_nav");
            } else {
                navRef.current.classList.remove("responsive_nav");
            }
        }
    }, [isNavActive]);

    return (
        <header>
            <div className="Logo">
                <Link to={"/"} className="text-not">
                    <img loading="lazy" src={LogoImagem} alt="Imagem da Logo" />
                    <h3>Euro Grill</h3>
                </Link>
            </div>
            <nav ref={navRef}>
                <Link onClick={showNavbar} to={"/"}>
                    Início
                </Link>
                <Link onClick={showNavbar} to={"produtos"}>
                    Produtos
                </Link>
                <Link onClick={showNavbar} to={"contato"}>
                    Contato
                </Link>

                <button onClick={showNavbar} className="nav-btn nav-close-btn">
                    <FaTimes />
                </button>
            </nav>
            <button onClick={showNavbar} className="nav-btn">
                <FaBars />
            </button>
            <div className="box">
                <div className="dropdown">
                    Galeria
                    <div className="setas">
                        <span className="left-icon "></span>
                        <span className="right-icon "></span>
                    </div>
                    <div className="items">
                        <Link to={"gourmet"} style={{ "--i": 1 }}>
                            <span></span> Gourmets
                        </Link>
                        <Link to={"alvenaria"} style={{ "--i": 2 }}>
                            <span></span> Alvenarias
                        </Link>
                        <Link
                            to={"pre-moldada"}
                            style={{ "--i": 3 }}
                            className="pre-moldadas">
                            <span></span>Pré-Moldadas
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
