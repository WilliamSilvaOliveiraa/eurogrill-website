import React, { useState, useEffect } from "react";
import "./ContactPageRestore.css";

import listras from "../AboutUsPage/images/listrasVermelha.png";

function ContactPageRestore() {
    return (
        <div className="main-contactPage">
            <div className="sharp2-contato">
                <img loading="lazy" src={listras} alt=""></img>
            </div>
            <div className="sharp3-contato">
                <img loading="lazy" src={listras} alt=""></img>
            </div>
            <div className="sharp4-contato">
                <img loading="lazy" src={listras} alt=""></img>
            </div>
            <div className="container">
                <div className="titles">
                    <h1 className="title">Converse conosco</h1>
                </div>
                <p> Podemos te ajudar com apenas um click</p>
                <div>Preencha todos os campos obrigatórios!</div>
                <form className="form">
                    <div className="inputs">
                        <input
                            id="name"
                            className="input"
                            type="text"
                            placeholder="* Digite seu nome"
                        />

                        <input
                            id="email"
                            className="input"
                            type="text"
                            placeholder="* Digite seu email"
                        />
                    </div>

                    <div className="text-area-div">
                        <label htmlFor="message">* Digite sua mensagem</label>
                        <textarea id="message" className="textarea" />
                    </div>

                    <input
                        className="button"
                        type="submit"
                        value="Enviar"></input>
                </form>
            </div>
            <div className="section-22">
                <div className="divisor2"></div>
                <div className="contact-information">
                    <h1>Informações de Contato</h1>
                    <div className="infos">
                        <div className="info ">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>
                                Rua Padre Antonio Joaquim Gomes, 205 -
                                Jaguariúna, SP
                            </p>
                        </div>
                        <div className="info">
                            <i className="fa-solid fa-inbox"></i>
                            <p>Eurogrillchurrasqueiras @ gmail.com</p>
                        </div>

                        <div className="info">
                            <i className="fa-solid fa-square-phone"></i>
                            <p>(+55) 19 3847-1273</p>{" "}
                        </div>

                        <div className="info">
                            <i className="fa-solid fa-square-phone"></i>
                            <p>(+55) 19 99891-4958</p>{" "}
                        </div>

                        <div className="info">
                            <i className="fa-solid fa-square-phone"></i>
                            <p>(+55) 19 99251-0945</p>{" "}
                        </div>
                    </div>
                    <div className="social">
                        <a
                            className="link-social"
                            href="https://www.instagram.com/eurogrill_churrasqueiras/">
                            <i className="fa-brands fa-square-instagram"></i>
                        </a>
                        <a
                            className="link-social"
                            href="https://www.facebook.com/eurogrillchurrasqueiras/">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            className="link-social"
                            href="https://api.whatsapp.com/send?phone=5519992510945&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20atrav%C3%A9s%20do%20website!">
                            <i className="fa-brands fa-square-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="divisor2"></div>
                <div className="atendimento">
                    <div className="atendimento-title">
                        <h1>Horário de Atendimento</h1>
                    </div>
                    <div className="atendimento-js">
                        <h1>
                            <h1 className="text-open">Aberto agora • </h1>

                            <h1 className="text-close">Fechado agora • </h1>
                        </h1>
                    </div>
                    <div className="atendimento-time">
                        <div className="atendimento-horario">
                            <h1>Domingo</h1>
                            <h2>Fechado</h2>
                        </div>
                        <div className="atendimento-horario">
                            <h1>Segunda</h1>
                            <h2>8:30 - 18:00</h2>
                        </div>
                        <div className="atendimento-horario">
                            <h1>Terça</h1>
                            <h2>8:30 - 18:00</h2>
                        </div>
                        <div className="atendimento-horario">
                            <h1>Quarta</h1>
                            <h2>8:30 - 18:00</h2>
                        </div>
                        <div className="atendimento-horario">
                            <h1>Quinta</h1>
                            <h2>8:30 - 18:00</h2>
                        </div>
                        <div className="atendimento-horario">
                            <h1>Sexta</h1>
                            <h2>8:30 - 18:00</h2>
                        </div>{" "}
                        <div className="atendimento-horario">
                            <h1>Sábado</h1>
                            <h2>9:00 - 12:00</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPageRestore;
