import React, { useState, useEffect } from "react";
import "./ProductPage.css";
import product_card from "./product_data";
import { useRef } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Todos");
    const [selectedTypeText, setSelectedTypeText] = useState("Todos");
    const [isFilterActive, setFilterActive] = useState(false);
    const [selectedMaterials, setSelectedMaterials] = useState([]);
    const [filteredMaterials, setFilteredMaterials] = useState([]);

    const [mostrarDropdown, setMostrarDropdown] = useState(false);
    const filtroGeralRef1 = useRef(null); // Ref para a primeira div
    const filtroGeralRef2 = useRef(null); // Ref para a segunda div
    const [sortOrder, setSortOrder] = useState(null); // Inicialize como null

    // Estado para armazenar o texto selecionado
    const [textoSelecionado, setTextoSelecionado] = useState("Padrão");

    // Função para alternar a visibilidade da lista suspensa ao clicar na div filtro-geral
    const alternarDropdown = () => {
        setMostrarDropdown(!mostrarDropdown);
    };

    const handleClickForaDropdown = (event) => {
        if (
            filtroGeralRef1.current &&
            !filtroGeralRef1.current.contains(event.target) &&
            filtroGeralRef2.current &&
            !filtroGeralRef2.current.contains(event.target)
        ) {
            setMostrarDropdown(false);
        }
    };
    const selecionarTexto = (texto) => {
        if (texto === "Preço Crescente") {
            setSortOrder("crescente");
        } else if (texto === "Preço Decrescente") {
            setSortOrder("decrescente");
        } else {
            setSortOrder(null); // Defina como null para desativar a ordenação
        }

        setTextoSelecionado(texto);
        setMostrarDropdown(false);
    };

    const filterItemsByTypeAndMaterial = () => {
        const sortedItems = product_card.slice();

        if (sortOrder) {
            sortedItems.sort((a, b) => {
                const orderMultiplier = sortOrder === "crescente" ? 1 : -1;
                return orderMultiplier * (a.price - b.price);
            });
        }

        return sortedItems.filter((item) => {
            const typeMatch =
                selectedOption === "Todos" || item.type === selectedOption;
            const materialMatch =
                selectedMaterials.length === 0 ||
                selectedMaterials.includes(item.material);

            return typeMatch && materialMatch;
        });
    };

    const filterMaterialsByType = (type) => {
        const materials = product_card
            .filter((item) => type === "Todos" || item.type === type)
            .map((item) => item.material);
        const uniqueMaterials = Array.from(new Set(materials));
        setFilteredMaterials(uniqueMaterials);
        setSelectedMaterials([]);
    };

    const handleOptionClick = (option, typeText) => {
        setSelectedOption(option);
        setSelectedTypeText(typeText);
        setMenuOpen(false);
        setFilterActive(option !== "Todos");
        filterMaterialsByType(option);
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMaterialCheckboxChange = (material) => {
        // Atualiza o estado dos materiais selecionados
        setSelectedMaterials((prevMaterials) => {
            if (prevMaterials.includes(material)) {
                return prevMaterials.filter((m) => m !== material);
            } else {
                return [...prevMaterials, material];
            }
        });
    };

    const productTypes = [
        "Todos",
        ...Array.from(new Set(product_card.map((item) => item.type))),
    ];

    useEffect(() => {
        document.addEventListener("click", handleClickForaDropdown);

        return () => {
            document.removeEventListener("click", handleClickForaDropdown);
        };
    }, []); // ComponentDidMount e ComponentWillUnmount

    const listItem = filterItemsByTypeAndMaterial().map((item) => (
        <Link
            className="card"
            to={`/produto/${encodeURIComponent(item.product_name)}/${item.id}`}
            key={item.id}>
            <div className="card_img">
                <img
                    src={item.thumb}
                    alt={item.product_name}
                    style={{}}
                    loading="lazy"
                />
            </div>

            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.caption}</p>
                <p className="price">
                    <span>{item.currency} </span>
                    {item.price}
                </p>
                <Link
                    className="btn-comprar"
                    to={`/produto/${encodeURIComponent(item.product_name)}/${
                        item.id
                    }`}>
                    <div className="label-comprar">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <p>Comprar</p>
                    </div>
                </Link>
            </div>
        </Link>
    ));

    return (
        <div className="main_content">
            <div className="header-content">
                <div className="header-top">
                    <p>{product_card.length} Produtos</p>

                    <div className="filtro-escada">
                        <h1>Ordenar Por:</h1>
                        <div
                            ref={filtroGeralRef1}
                            className={`filtro-geral ${
                                mostrarDropdown ? "espelhado" : ""
                            }`}
                            onClick={alternarDropdown}>
                            <div className="texto-filtro">
                                <h1>{textoSelecionado}</h1>
                                <i
                                    className={`fa-solid fa-caret-down ${
                                        mostrarDropdown ? "icone-espelhado" : ""
                                    }`}></i>
                            </div>
                            <ul
                                className={`filtro-dropdown ${
                                    mostrarDropdown ? "visivel" : ""
                                }`}>
                                <li onClick={() => selecionarTexto("Padrão")}>
                                    Padrão
                                </li>
                                <li
                                    onClick={() =>
                                        selecionarTexto("Preço Crescente")
                                    }>
                                    Preço Crescente
                                </li>
                                <li
                                    onClick={() =>
                                        selecionarTexto("Preço Decrescente")
                                    }>
                                    Preço Decrescente
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`card_geral ${
                    isFilterActive ? "filter-active" : ""
                }`}>
                <div className="filtros">
                    <div className="drop-menu">
                        <div className="menu-trigger" onClick={toggleMenu}>
                            Filtrar
                            <i
                                className={`fa-solid fa-chevron-down ${
                                    isMenuOpen ? "flipped" : ""
                                }`}></i>
                        </div>
                        {isMenuOpen && (
                            <div
                                className={`menu-options ${
                                    isMenuOpen ? "show" : ""
                                }`}>
                                {/* Utiliza os tipos únicos como opções do filtro */}
                                {productTypes.map((type) => (
                                    <div
                                        className={`option ${
                                            selectedOption === type
                                                ? "selected"
                                                : ""
                                        }`}
                                        key={type}
                                        onClick={() =>
                                            handleOptionClick(
                                                type,
                                                type === "Todos"
                                                    ? "Todos"
                                                    : `Produto filtrado: ${type}s`
                                            )
                                        }>
                                        {type}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <h5 className="sub_title_product">{selectedTypeText}</h5>
                    <div
                        className="subtype-container"
                        style={{
                            display:
                                selectedOption === "Todos" ? "none" : "flex",
                        }}>
                        <div className="title-material">
                            <h2>Material</h2>
                        </div>
                        {/* Renderiza checkboxes para materiais filtrados */}
                        {filteredMaterials.map((material) => (
                            <div key={material}>
                                <input
                                    type="checkbox"
                                    id={material}
                                    checked={selectedMaterials.includes(
                                        material
                                    )}
                                    onChange={() =>
                                        handleMaterialCheckboxChange(material)
                                    }
                                />
                                <label htmlFor={material}>{material}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="header-top2">
                    <p>{product_card.length} Produtos</p>

                    <div className="filtro-escada">
                        <h1>Ordenar Por:</h1>
                        <div
                            ref={filtroGeralRef2}
                            className={`filtro-geral ${
                                mostrarDropdown ? "espelhado" : ""
                            }`}
                            onClick={alternarDropdown}>
                            <div className="texto-filtro">
                                <h1>{textoSelecionado}</h1>
                                <i
                                    className={`fa-solid fa-caret-down ${
                                        mostrarDropdown ? "icone-espelhado" : ""
                                    }`}></i>
                            </div>
                            <ul
                                className={`filtro-dropdown ${
                                    mostrarDropdown ? "visivel" : ""
                                }`}>
                                <li onClick={() => selecionarTexto("Padrão")}>
                                    Padrão
                                </li>
                                <li
                                    onClick={() =>
                                        selecionarTexto("Preço Crescente")
                                    }>
                                    Preço Crescente
                                </li>
                                <li
                                    onClick={() =>
                                        selecionarTexto("Preço Decrescente")
                                    }>
                                    Preço Decrescente
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div
                    className={`card_group ${
                        isFilterActive ? "filter-active" : ""
                    }`}
                    style={{
                        gridTemplateColumns: isFilterActive
                            ? "repeat(5, 1fr)"
                            : "repeat(5, 1fr)",
                    }}>
                    {listItem}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
