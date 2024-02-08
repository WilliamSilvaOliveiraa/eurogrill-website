import React from "react";

import alvenaria_card from "./Alvenaria_data";
import topo from "./topo.jpeg";
import { useState } from "react";

function Alvenaria() {
    const [imagemIndex, setImagemIndex] = useState(null);

    const avancarImagem = () => {
        setImagemIndex((prevIndex) =>
            prevIndex === alvenaria_card.length - 1 ? 0 : prevIndex + 1
        );
    };

    const retrocederImagem = () => {
        setImagemIndex((prevIndex) =>
            prevIndex === 0 ? alvenaria_card.length - 1 : prevIndex - 1
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
                <img src={topo} alt=""></img>
                <div className="text-overlay-gourmet">
                    <h1>EURO GRILL</h1>
                    <h3>Churrasqueiras & Acessórios</h3>
                </div>
            </div>
            <div className="gourmet-text">
                <h2>Espaço Alvenaria</h2>
                <p>
                    Veja uma coleção de fotos dos nossos trabalhos sobre áreas
                    de churrasqueiras em alvenaria!
                </p>
            </div>

            <div className="gallery-gourmet">
                {alvenaria_card.map((item, index) => (
                    <div
                        key={item.id}
                        className="container-img-gourmet"
                        onClick={() => abrirImagemTelaCheia(index)}>
                        <h1>{item.alvenaria_name}</h1>
                        <div className="hover-overlay"></div>
                        <img src={item.thumb} alt={item.alvenaria_name} />
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
                        <h3>{alvenaria_card[imagemIndex].alvenaria_name}</h3>
                        <p>{alvenaria_card[imagemIndex].description}</p>
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
                            src={alvenaria_card[imagemIndex].thumb}
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

export default Alvenaria;
