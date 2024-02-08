import React, { useState, useEffect, useRef } from "react";
import product_card from "../product_data";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import "./Product.css"; // Importando o arquivo CSS

function Product() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [currentImage, setCurrentImage] = useState("");
    const [relatedProducts, setRelatedProducts] = useState([]);

    const scrollToTopButtonRef = useRef();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleImageClick = (newImage) => {
        if (newImage !== currentImage) {
            setCurrentImage(newImage);
        }
    };
    const handleInterestClick = (productName, productPrice) => {
        const mensagem = `Olá, vim pelo seu website e tenho interesse no produto ${productName}, que está saindo por: R$ ${productPrice.toFixed(
            2
        )}.`;

        // Substitua '5519992510945' pelo número de telefone desejado
        const numeroTelefone = "5519992510945";

        const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(
            mensagem
        )}`;

        // Redirecionar para a página do WhatsApp
        window.open(linkWhatsapp, "_blank");
    };

    // Função para embaralhar um array e obter um subconjunto dele, excluindo um ID específico
    const shuffleArrayExcludingId = (array, excludedId) => {
        const filteredArray = array.filter((item) => item.id !== excludedId);
        const copyArray = [...filteredArray]; // Cria uma cópia do array filtrado
        for (let i = copyArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]]; // Troca os elementos aleatoriamente
        }
        return copyArray.slice(0, 4); // Retorna um subconjunto de 4 elementos
    };

    useEffect(() => {
        const productIdNumber = parseInt(productId, 10);

        if (!isNaN(productIdNumber)) {
            const selectedProduct = product_card.find(
                (item) => item.id === productIdNumber
            );

            if (selectedProduct) {
                setProduct(selectedProduct);
                setCurrentImage(selectedProduct.thumb || "");

                // Atualiza os produtos relacionados excluindo o ID do produto principal
                setRelatedProducts(
                    shuffleArrayExcludingId(product_card, productIdNumber)
                );
            } else {
                console.error(
                    `Produto com ID ${productIdNumber} não encontrado.`
                );
            }
        } else {
            console.error(`ID do produto inválido: ${productId}`);
        }

        // Rolando até o topo quando o componente é montado
        scrollToTop();

        // Adicionando o ouvinte de evento ao botão usando a ref
        const buttonElement = scrollToTopButtonRef.current;
        if (buttonElement) {
            buttonElement.addEventListener("click", scrollToTop);
        }

        // Removendo o ouvinte de evento quando o componente é desmontado
        return () => {
            if (buttonElement) {
                buttonElement.removeEventListener("click", scrollToTop);
            }
        };
    }, [productId]);

    if (!product) {
        return <p>Produto não encontrado</p>;
    }

    return (
        <div className="main">
            <div className="main-content">
                <div className="images">
                    <div className="title-product2">
                        <h1>{product.product_name}</h1>
                    </div>
                    <div className="big-image">
                        <img
                            loading="lazy"
                            src={currentImage}
                            alt={product.product_name}
                        />
                    </div>

                    <div className="small-images">
                        <div className="small-image">
                            <img
                                loading="lazy"
                                src={product?.thumb}
                                alt={product?.product_name}
                                onClick={() => handleImageClick(product?.thumb)}
                            />
                        </div>
                        <div className="small-image">
                            <img
                                loading="lazy"
                                src={product?.thumb2}
                                alt={product?.product_name}
                                onClick={() =>
                                    handleImageClick(product?.thumb2)
                                }
                            />
                        </div>
                        <div className="small-image">
                            <img
                                loading="lazy"
                                src={product?.thumb3}
                                alt={product?.product_name}
                                onClick={() =>
                                    handleImageClick(product?.thumb3)
                                }
                            />
                        </div>
                        <div className="small-image">
                            <img
                                loading="lazy"
                                src={product?.thumb4}
                                alt={product?.product_name}
                                onClick={() =>
                                    handleImageClick(product?.thumb4)
                                }
                            />
                        </div>
                    </div>
                </div>
                <div className="texts-container">
                    <div className="top-product">
                        <h1>INICIO / PRODUTOS</h1>
                    </div>
                    <div className="title-product">
                        <h1>{product.product_name}</h1>
                    </div>
                    <div className="price">
                        <p>
                            <div className="reais">{product.currency} </div>
                            {product.price.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                            })}
                        </p>
                    </div>

                    <h1 className="description-text">Descrição</h1>
                    <div className="description">
                        <p>{product.description}</p>
                    </div>
                    <div className="specifications">
                        <p>
                            Especificações: <br></br>
                            {product.specifications}
                        </p>
                    </div>
                    <div className="btn-buy">
                        <button
                            onClick={() =>
                                handleInterestClick(
                                    product.product_name,
                                    product.price
                                )
                            }>
                            <p>Tenho interesse</p>
                        </button>
                    </div>
                    <div className="text-availability">
                        <p>Disponível</p>
                    </div>
                </div>
            </div>
            <div className="product-list">
                <h1>Você pode gostar também</h1>
                <div className="product-cards">
                    {relatedProducts.map((relatedProduct) => (
                        <Link
                            to={`/produto/${encodeURIComponent(
                                relatedProduct.product_name
                            )}/${relatedProduct.id}`}
                            key={relatedProduct.id}
                            className="product-card-link">
                            <div className="product-card">
                                <img
                                    loading="lazy"
                                    src={relatedProduct.thumb}
                                    alt={relatedProduct.product_name}
                                />
                                <p>{relatedProduct.product_name}</p>
                                <button ref={scrollToTopButtonRef}>
                                    Ver mais
                                </button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
