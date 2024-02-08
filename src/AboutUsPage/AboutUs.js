import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

import "./AboutUs.css";
import imgretangular from "./images/img_retangular.jpeg";
import imagemdefundo from "./images/Imagem de fundo.png";
import imagemdefundo2 from "./images/Imagem de fundo 2.png";
import parogi from "./images/p-parogi.jpg";
import Margareti from "./images/p-ze.jpg";
import evanio from "./images/p-evanio.jpg";
import cidinha from "./images/p-cidinha.jpg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ModalPadrao from "../ModalPage/ModalPadrao";
import Vidro from "./images/Vidro.png";
import Alvenaria from "./images/Alvenaria.png";
import Premoldada from "./images/Premoldada.jpg";
import cardVidro from "./images/card-vidro.jpg";
import cardAlvenaria from "./images/card-alvenaria.jpg";
import cardPremoldada from "./images/card-premoldada.jpg";
import slide1 from "./images/slide1.jpeg";
import slide2 from "./images/slide2.jpeg";
import slide3 from "./images/slide3.jpg";
import sharp1 from "./images/sharp1.png";
import listras from "./images/listrasVermelha.png";

function AboutUs() {
    const handleClick = () => {
        const mensagem = encodeURIComponent(
            "Olá, vim pelo website e quero fazer um orçamento"
        );
        const numero = "5519992510945";
        const url = `https://wa.me/${numero}?text=${mensagem}`;

        window.open(url, "_blank");
    };
    const el = useRef();
    const tl = useRef();

    const prevSlide = () => {
        const totalSlides = 3;
        setCurrentSlide(
            (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
        );
        resetInterval();
    };

    const [openModal, setOpenModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        const totalSlides = 3;
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const intervalIdRef = useRef(null);

    const resetInterval = () => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(intervalIdRef.current);
    }, [currentSlide]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".card-info", {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".cards-container",
                start: "top 750px",
                end: "bottom 700px",
                scrub: false,
            },
        });

        gsap.to(".img-churrasco img", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".churrasco",
                start: "top 700px",
                end: "bottom 700px",
                scrub: false,
            },
        });

        gsap.to(".texto-churrasco", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".churrasco",
                start: "top 700px",
                end: "bottom 690px",
                scrub: false,
            },
        });

        gsap.to(".img-churrasco2 img", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".churrasco2",
                start: "top 700px",
                end: "bottom 690px",
                scrub: false,
            },
        });

        gsap.to(".texto-churrasco2", {
            x: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: ".churrasco2",
                start: "top 720px",
                end: "bottom 720px",
                scrub: false,
            },
        });

        const ctx = gsap.context(() => {
            tl.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".home3",

                        scrub: false,
                        start: "top 700px",
                        end: "bottom 800px",
                    },
                })
                .fromTo(
                    "#card-1",
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                    }
                )
                .fromTo(
                    "#card-2",
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                    }
                )
                .fromTo(
                    "#card-3",
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                    }
                )
                .fromTo(
                    "#card-4",
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                    }
                );
        }, el);

        return () => {
            gsap.killTweensOf(
                ".card",
                ".img-retangular",
                ".card-info",
                ".img-churrasco img",
                ".texto-churrasco",
                ".img-churrasco2 img",
                ".texto-churrasco2"
            );
        };
    }, []);
    return (
        <div className="main-aboutUs">
            {" "}
            <div className="img-retangular">
                <img src={imgretangular} alt="Imagem Inicial" loading="lazy" />

                <div className="text-overlay">
                    <h1>EURO GRILL</h1>
                    <h2>Churrasqueiras e Acessórios</h2>
                    <div className="div-button-overlay">
                        <Link to={"produtos"}>
                            <button className="button-overlay-product">
                                Ver Produtos
                            </button>
                        </Link>
                        <button
                            onClick={() => setOpenModal(true)}
                            className="button-overlay-gallery">
                            <p>Veja nossos trabalhos</p>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                <div className="sharp2">
                    <img src={listras} loading="lazy" alt=""></img>
                </div>
                <div className="sharp3">
                    <img src={listras} loading="lazy" alt=""></img>
                </div>
                <div className="card-info">
                    <i className="fa-solid fa-utensils"></i>

                    <h1>Acessórios </h1>

                    <p>
                        Contamos com uma grande variedades de acessórios para
                        seu ambiente de churrasco
                    </p>
                </div>
                <div className="card-info">
                    <i className="fa-solid fa-star"></i>
                    <h1>Soluções Gourmet</h1>
                    <p>Oferecemos materiais e ideias para seu espaço gourmet</p>
                </div>
                <div className="card-info">
                    <i className="fa-solid fa-trowel-bricks"></i>
                    <h1>Materiais</h1>
                    <p>
                        Temos materiais da melhor qualidade para o seu projeto
                    </p>
                </div>
            </div>
            <div className="churrasco">
                <div className="img-churrasco">
                    <img src={imagemdefundo} loading="lazy" alt=""></img>
                </div>
                <div className="texto-churrasco">
                    <h2>Momentos</h2>
                    <h1>Churrasco é melhor com uma boa companhia</h1>
                    <p>
                        Sabor sem limites, momentos sem igual. Descubra o prazer
                        de grelhar com a melhor infraestrutura.
                    </p>
                </div>
            </div>
            <div className="churrasco2">
                <div className="texto-churrasco2">
                    <h2>Área Gourmet</h2>
                    <h1>Churrasqueira de Vidro</h1>
                    <p>
                        Nossa churrasqueira de vidro com coifa preta transforma
                        qualquer ambiente em um cenário de sofisticação.
                        Churrasco ganha um novo significado: é prazer visual, é
                        sabor elevado. Seu espaço, sua estética, seu churrasco
                        inigualável.{" "}
                    </p>
                </div>
                <div className="img-churrasco2">
                    <img alt="" loading="lazy" src={imagemdefundo2}></img>
                </div>
            </div>
            <div className="main2">
                <div className="sharp1">
                    <img loading="lazy" src={sharp1} alt=""></img>
                </div>
                <div className="sharp4">
                    <img loading="lazy" src={listras} alt=""></img>
                </div>
                <div className="orçamento">
                    <h1>Faça Seu Orçamento Sem Compromisso!</h1>
                </div>
                <div className="slider">
                    <div className="slides">
                        <div className="seta-direita-slide" onClick={nextSlide}>
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                        <div
                            className="seta-esquerda-slide"
                            onClick={prevSlide}>
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <input
                            type="radio"
                            name="radio-btn"
                            id="radio1"
                            checked={currentSlide === 0}
                            onChange={() => {
                                setCurrentSlide(0);
                                resetInterval();
                            }}></input>
                        <input
                            type="radio"
                            name="radio-btn"
                            id="radio2"
                            checked={currentSlide === 1}
                            onChange={() => {
                                setCurrentSlide(1);
                                resetInterval();
                            }}></input>
                        <input
                            type="radio"
                            name="radio-btn"
                            id="radio3"
                            checked={currentSlide === 2}
                            onChange={() => {
                                setCurrentSlide(2);
                                resetInterval();
                            }}></input>

                        <div className="slide first">
                            <img
                                loading="lazy"
                                src={slide1}
                                alt="Slide 1"></img>
                            <div className="layout-preto"></div>
                        </div>
                        <div className="slide ">
                            <img
                                loading="lazy"
                                src={slide2}
                                alt="Slide 2"></img>
                            <div className="layout-preto"></div>
                        </div>
                        <div className="slide ">
                            <img
                                loading="lazy"
                                src={slide3}
                                alt="Slide 3"></img>
                            <div className="layout-preto"></div>
                        </div>
                        <div className="navigation-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                        </div>
                        <div className="manual-navigation">
                            <label
                                htmlFor="radio1"
                                className="manual-btn"></label>
                            <label
                                htmlFor="radio2"
                                className="manual-btn"></label>
                            <label
                                htmlFor="radio3"
                                className="manual-btn"></label>
                        </div>
                    </div>
                </div>
                <div className="btn-orçamento" onClick={handleClick}>
                    <h1>Clique Aqui!</h1>{" "}
                    <i className="fa-brands fa-whatsapp"></i>
                </div>
            </div>
            <div className="sharp5">
                <img loading="lazy" src={listras} alt=""></img>
            </div>
            <section ref={el}>
                <div className="home3">
                    <div className="card-home" id="card-1">
                        <img
                            loading="lazy"
                            src={evanio}
                            alt="outraImagem"
                            className="card-image"
                        />
                        <div className="card-text">
                            <h1>Evanio</h1>
                            <p>
                                "Material de primeira, minha churrasqueira ficou
                                linda!"
                            </p>
                            <h2>Jaguariúna, SP</h2>
                        </div>
                    </div>

                    <div className="card-home" id="card-2">
                        <img
                            loading="lazy"
                            src={parogi}
                            alt="outraImagem"
                            className="card-image"
                        />
                        <div className="card-text">
                            <h1>Paulo Amaral</h1>
                            <p>"Qualidade e atendimento Top!"</p>
                            <h2>Jaguariúna, SP</h2>
                        </div>
                    </div>

                    <div className="card-home" id="card-3">
                        <img
                            loading="lazy"
                            src={Margareti}
                            alt="outraImagem"
                            className="card-image"
                        />
                        <div className="card-text">
                            <h1>Margareth</h1>
                            <p>"Minha churrasqueira ficou linda!"</p>
                            <h2>Jaguariúna, SP</h2>
                        </div>
                    </div>
                    <div className="card-home" id="card-4">
                        <img
                            loading="lazy"
                            src={cidinha}
                            alt="outraImagem"
                            className="card-image"
                        />
                        <div className="card-text">
                            <h1>Roberto</h1>
                            <p>
                                " Me atenderam super bem, muito agradável o
                                local "
                            </p>
                            <h2>Jaguariúna, SP</h2>
                        </div>
                    </div>
                </div>
            </section>
            <ModalPadrao
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}>
                <div className="modal-content">
                    <div className="modal-text">
                        <h1>Galeria de Imagem</h1>
                    </div>

                    <div className="btn-modal-container">
                        <Link className="none" to="/pre-moldada">
                            <div className="btn-modal-3d">
                                <div className="wrapper">
                                    <div className="modal-img-estatica">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            src={cardPremoldada}></img>
                                    </div>
                                    <div className="modal-text-3d">
                                        <h2>Projetos de</h2>
                                        <h1>Pre-Moldada</h1>
                                    </div>
                                    <div className="modal-btn">Ver</div>
                                </div>

                                <div className="btn-modal-img">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className="modal-premoldada-img"
                                        src={Premoldada}></img>
                                </div>
                            </div>
                        </Link>
                        <Link className="none" to="/gourmet">
                            <div className="btn-modal-3d">
                                <div className="wrapper">
                                    <div className="modal-img-estatica">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            src={cardVidro}></img>
                                    </div>
                                    <div className="modal-text-3d">
                                        <h2>Projetos de</h2>
                                        <h1>Vidro</h1>
                                    </div>
                                    <div className="modal-btn">Ver</div>
                                </div>

                                <div className="btn-modal-img">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className="modal-vidro-img"
                                        src={Vidro}></img>
                                </div>
                            </div>
                        </Link>
                        <Link className="none" to="/alvenaria">
                            <div className="btn-modal-3d">
                                <div className="wrapper">
                                    <div className="modal-img-estatica">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            src={cardAlvenaria}></img>
                                    </div>
                                    <div className="modal-text-3d">
                                        <h2>Projetos de</h2>
                                        <h1>Alvenaria</h1>
                                    </div>
                                    <div className="modal-btn">Ver</div>
                                </div>

                                <div className="btn-modal-img">
                                    <img
                                        alt=""
                                        loading="lazy"
                                        className="modal-alvenaria-img"
                                        src={Alvenaria}></img>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </ModalPadrao>
        </div>
    );
}

export default AboutUs;
