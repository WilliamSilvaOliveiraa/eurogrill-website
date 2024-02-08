import React from "react";
import "./Gourmet.css";

import gourmet_card from "./Gourmet_data";
import topo from "./topo.jpg";
import { useState } from "react";

function Gourmet() {
    const [imagemIndex, setImagemIndex] = useState(null);

    const avancarImagem = () => {
        setImagemIndex((prevIndex) =>
            prevIndex === gourmet_card.length - 1 ? 0 : prevIndex + 1
        );
    };

    const retrocederImagem = () => {
        setImagemIndex((prevIndex) =>
            prevIndex === 0 ? gourmet_card.length - 1 : prevIndex - 1
        );
    };

    const abrirImagemTelaCheia = (index) => {
        setImagemIndex(index);
    };

    const fecharImagemTelaCheia = () => {
        setImagemIndex(null);
    };

    const impedirPropagacao = (e) => {
        e.stopPropagation();
    };
    return (
        <div className="main-gourmet">
            <div className="img-topo-gourmet">
                <img loading="lazy" src={topo} alt=""></img>
                <div className="text-overlay-gourmet">
                    <h1>EURO GRILL</h1>
                    <h3>Churrasqueiras & Acessórios</h3>
                </div>
            </div>
            <div className="gourmet-text">
                <h2>Espaço Gourmet</h2>
                <p>
                    Veja uma coleção de fotos dos nossos trabalhos sobre áreas
                    gourmet mais voltadas para churrasqueiras de vidros!
                </p>
            </div>

            <div className="gallery-gourmet">
                {gourmet_card.map((item, index) => (
                    <div
                        key={item.id}
                        className="container-img-gourmet"
                        onClick={() => abrirImagemTelaCheia(index)}>
                        <h1>{item.gourmet_name}</h1>
                        <div className="hover-overlay"></div>
                        <img
                            loading="lazy"
                            src={item.thumb}
                            alt={item.gourmet_name}
                        />
                        <div className="fade-overlay"></div>
                    </div>
                ))}
            </div>
            {imagemIndex !== null && (
                <div
                    className="imagem-tela-cheia-overlay"
                    onClick={fecharImagemTelaCheia}>
                    {/* Adiciona a div de texto na parte inferior */}
                    <div
                        className="btn-sair-gourmet"
                        onClick={fecharImagemTelaCheia}>
                        Fechar
                    </div>
                    <div className="texto-superior">
                        <h3>{gourmet_card[imagemIndex].gourmet_name}</h3>
                        <p>{gourmet_card[imagemIndex].description}</p>
                    </div>
                    <div
                        className="seta-esquerda"
                        onClick={(e) => {
                            retrocederImagem();
                            impedirPropagacao(e);
                        }}>
                        {"<"}
                    </div>

                    <div className="imagem-container">
                        <img
                            loading="lazy"
                            src={gourmet_card[imagemIndex].thumb}
                            alt="Imagem em Tela Cheia"
                            onClick={impedirPropagacao}
                        />
                    </div>
                    <div
                        className="seta-direita"
                        onClick={(e) => {
                            avancarImagem();
                            impedirPropagacao(e);
                        }}>
                        {">"}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gourmet;
