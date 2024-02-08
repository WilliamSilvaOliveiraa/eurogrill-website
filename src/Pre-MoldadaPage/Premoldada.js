import React from "react";

import premoldada_card from "./Premoldada_data";
import topo from "./topo.jpeg";
import { useState } from "react";

function Premoldada() {
    const [imagemIndex, setImagemIndex] = useState(null);

    const avancarImagem = () => {
        setImagemIndex((prevIndex) =>
            prevIndex === premoldada_card.length - 1 ? 0 : prevIndex + 1
        );
    };

    const retrocederImagem = () => {
        setImagemIndex((prevIndex) =>
            prevIndex === 0 ? premoldada_card.length - 1 : prevIndex - 1
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
                <h2>Espaço Pre-moldadas</h2>
                <p>
                    Veja uma coleção de fotos dos nossos trabalhos sobre áreas
                    de churrasqueiras Pre-Moldadas!
                </p>
            </div>

            <div className="gallery-gourmet">
                {premoldada_card.map((item, index) => (
                    <div
                        key={item.id}
                        className="container-img-gourmet"
                        onClick={() => abrirImagemTelaCheia(index)}>
                        <h1>{item.premoldada_name}</h1>
                        <div className="hover-overlay"></div>
                        <img
                            loading="lazy"
                            src={item.thumb}
                            alt={item.premoldada_name}
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
                    <button className="btn-sair-gourmet">Fechar</button>
                    <div className="texto-superior">
                        <h3>{premoldada_card[imagemIndex].premoldada_name}</h3>
                        <p>{premoldada_card[imagemIndex].description}</p>
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
                            src={premoldada_card[imagemIndex].thumb}
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

export default Premoldada;
