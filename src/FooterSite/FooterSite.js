import React from "react";
import "./FooterSite.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Link } from "react-router-dom";

function FooterSite() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCSS5G4wii8-wQNWr-2K63Oa_1wj2EZvFg",
    });

    const position = {
        lat: -22.686092191361958,
        lng: -46.991635586488805,
    };

    return (
        <footer>
            <div id="footer_content">
                <ul className="footer-list">
                    <li>
                        <h3>Menu</h3>
                    </li>
                    <li className="footer-components-list">
                        <Link to="/" className="footer-link">
                            Início
                        </Link>
                        <Link to="/produtos" className="footer-link">
                            Produtos
                        </Link>
                        <Link to="/contato" className="footer-link">
                            Contato
                        </Link>
                    </li>
                </ul>
                <ul className="footer-list">
                    <li>
                        <h3>Galeria</h3>
                    </li>
                    <li className="footer-components-list">
                        <Link to="/gourmet" className="footer-link">
                            Gourmet
                        </Link>
                        <Link to="/alvenaria" className="footer-link">
                            Alvenaria
                        </Link>
                        <Link to="/pre-moldada" className="footer-link">
                            Pré-Moldada
                        </Link>
                    </li>
                </ul>

                <div id="footer_contacts">
                    <h3>Redes Sociais </h3>
                    <div id="footer_social_media">
                        <a
                            href="https://www.instagram.com/eurogrill_churrasqueiras/"
                            className="footer-link"
                            id="instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/eurogrillchurrasqueiras/"
                            className="footer-link"
                            id="facebook">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=5519992510945&text=Ol%C3%A1,%20tudo%20bem?%20Vim%20atrav%C3%A9s%20do%20website!"
                            className="footer-link"
                            id="whatsapp">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <div className="maps-euro">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={{
                                width: "100%",
                                height: "100%",
                            }}
                            center={position}
                            zoom={15}>
                            <Marker
                                position={position}
                                options={{
                                    label: {
                                        text: "Euro Grill",
                                        className: "map-marker",
                                    },
                                }}
                                onLoad={(marker) => {
                                    // Aqui, você pode acessar o objeto Marker e definir estilos adicionais
                                    const label = marker.getLabel();
                                    label.color = "#ea4335"; // Define a cor do texto
                                    marker.setLabel(label);
                                }}></Marker>
                        </GoogleMap>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div id="footer_copyright">
                <h1>Euro Grill Churrasqueiras & Acessórios Copyright 2024</h1>{" "}
                <div className="traço"></div>
                <p className="develop">
                    Desenvolvido por{" "}
                    <a
                        rel="noopener noreferrer"
                        href="https://www.williamoliveirasilva.online"
                        target="_blank"
                        className="nome-Will">
                        William Silva
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default FooterSite;
