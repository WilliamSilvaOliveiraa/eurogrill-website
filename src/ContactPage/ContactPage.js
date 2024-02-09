import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import emailjs from "@emailjs/browser";
import ModalPadrao from "../ModalPage/ModalPadrao";
import moment from "moment-timezone"; // Importe moment-timezone
import listras from "../AboutUsPage/images/listrasVermelha.png";

function ContactPage() {
    const [isAbertoAgora, setIsAbertoAgora] = useState(false);
    useEffect(() => {
        const now = moment().tz("America/Sao_Paulo");

        // Verifique se é sábado
        const isSabado = now.isoWeekday() === 6;

        // Verifique o horário apenas se estiver em um dia útil (segunda a sexta) ou sábado
        const isDiaUtilOuSabado = now.isoWeekday() <= 6;

        // Verifique se o horário está dentro do escopo desejado
        const isHorarioAberto =
            isDiaUtilOuSabado &&
            ((isSabado &&
                now.format("HH:mm") >= "09:00" &&
                now.format("HH:mm") <= "12:00") ||
                (!isSabado &&
                    now.format("HH:mm") >= "08:30" &&
                    now.format("HH:mm") <= "18:00"));

        // Atualize o estado com base no resultado da verificação
        setIsAbertoAgora(isHorarioAberto);
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [openModal, setOpenModal] = useState(false);

    const handleBtnModalContactClick = () => {
        setOpenModal(false); // Chama setOpenModal(true) quando a div é clicada
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
        setInputError(false); // Esconder a mensagem de erro ao começar a digitar no campo de nome
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setInputError(false); // Esconder a mensagem de erro ao começar a digitar no campo de e-mail
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setInputError(false); // Esconder a mensagem de erro ao começar a digitar no campo de mensagem
    };
    const [inputError, setInputError] = useState(false);

    function sendEmail(e) {
        e.preventDefault();

        if (name === "" || email === "" || message === "") {
            setInputError(true);
            return;
        }
        setInputError(false);

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        };

        emailjs
            .send(
                "service_crene31",
                "template_c1wr18l",
                templateParams,
                "DCHn1B7RA70lDcY2l"
            )
            .then(
                (response) => {
                    console.log(
                        "Email enviado",
                        response.status,
                        response.text,
                        setOpenModal(true)
                    );
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (err) => {
                    console.log("Erro: ", err);
                }
            );
    }

    const errorClass = inputError ? "error-text error-opacity" : "error-text";

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
                <div className={errorClass}>
                    Preencha todos os campos obrigatórios!
                </div>
                <form className="form" onSubmit={sendEmail}>
                    <div className="inputs">
                        <input
                            id="name"
                            className="input"
                            type="text"
                            placeholder="* Digite seu nome"
                            onChange={handleNameChange}
                            value={name}
                        />

                        <input
                            id="email"
                            className="input"
                            type="text"
                            placeholder="* Digite seu email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                    </div>

                    <div className="text-area-div">
                        <label htmlFor="message">* Digite sua mensagem</label>
                        <textarea
                            id="message"
                            className="textarea"
                            onChange={handleMessageChange}
                            value={message}
                        />
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
                            <i class="fa-solid fa-location-dot"></i>
                            <p>
                                Rua Padre Antonio Joaquim Gomes, 205 -
                                Jaguariúna, SP
                            </p>
                        </div>
                        <div className="info">
                            <i class="fa-solid fa-inbox"></i>
                            <p>Eurogrillchurrasqueiras @ gmail.com</p>
                        </div>

                        <div className="info">
                            <i class="fa-solid fa-square-phone"></i>
                            <p>(+55) 19 3847-1273</p>{" "}
                        </div>

                        <div className="info">
                            <i class="fa-solid fa-square-phone"></i>
                            <p>(+55) 19 99891-4958</p>{" "}
                        </div>

                        <div className="info">
                            <i class="fa-solid fa-square-phone"></i>
                            <p>(+55) 19 99251-0945</p>{" "}
                        </div>
                    </div>
                    <div className="social">
                        <a
                            className="link-social"
                            href="https://www.instagram.com/eurogrill_churrasqueiras/">
                            <i class="fa-brands fa-square-instagram"></i>
                        </a>
                        <a
                            className="link-social"
                            href="https://www.facebook.com/eurogrillchurrasqueiras/">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a
                            className="link-social"
                            href="https://api.whatsapp.com/send?phone=5519992510945&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20atrav%C3%A9s%20do%20website!">
                            <i class="fa-brands fa-square-whatsapp"></i>
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
                            {isAbertoAgora ? (
                                <h1 className="text-open">Aberto agora • </h1>
                            ) : (
                                <h1 className="text-close">Fechado agora • </h1>
                            )}
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

            <ModalPadrao
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}>
                <div className="modal-contact">
                    <div className="modal-contact-header">
                        <i class="fa-solid fa-clipboard-check"></i>
                        <div className="desenho-fundo">
                            <div className="reta-vertical"></div>
                            <div className="reta-horizontal"></div>
                        </div>
                        <div className="desenho-fundo2">
                            <div className="reta-vertical"></div>
                            <div className="reta-horizontal"></div>
                        </div>

                        <div className="desenho-fundo3">
                            <div className="reta-vertical"></div>
                            <div className="reta-horizontal"></div>
                        </div>

                        <div className="desenho-fundo4">
                            <div className="reta-vertical"></div>
                            <div className="reta-horizontal"></div>
                        </div>
                        <div className="desenho-fundo5">
                            <div className="reta-vertical"></div>
                            <div className="reta-horizontal"></div>
                        </div>
                        <div className="desenho-fundo6">
                            <div className="reta-vertical"></div>
                            <div className="reta-horizontal"></div>
                        </div>
                    </div>
                    <div className="text-modal-contact">
                        <h1>Sua menssagem foi enviada!</h1>
                        <p>
                            Enviaremos um e-mail em resposta à sua mensagem.
                            Favor verificar sua caixa de entrada
                        </p>
                        <div className="borda-contact"></div>
                    </div>
                    <div
                        className="btn-modal-contact"
                        onClick={handleBtnModalContactClick}>
                        OK
                    </div>
                </div>
            </ModalPadrao>
        </div>
    );
}

export default ContactPage;
