import "./Gallery.css";
import React, { useState, useEffect, useCallback, useMemo } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Imagem1 from "../assets/images/Galeria De Churrasqueiras/Imagem1.jpeg";
import Imagem2 from "../assets/images/Galeria De Churrasqueiras/Imagem2.jpeg";
import Imagem3 from "../assets/images/Galeria De Churrasqueiras/Imagem3.jpeg";
import Imagem4 from "../assets/images/Galeria De Churrasqueiras/Imagem4.jpeg";
import Imagem5 from "../assets/images/Galeria De Churrasqueiras/Imagem5.jpeg";
import Imagem6 from "../assets/images/Galeria De Churrasqueiras/Imagem6.jpeg";
import Imagem7 from "../assets/images/Galeria De Churrasqueiras/Imagem7.jpeg";
import Imagem8 from "../assets/images/Galeria De Churrasqueiras/Imagem8.jpeg";
import Imagem9 from "../assets/images/Galeria De Churrasqueiras/Imagem9.jpeg";
import Imagem10 from "../assets/images/Galeria De Churrasqueiras/Imagem10.jpeg";
import Imagem11 from "../assets/images/Galeria De Churrasqueiras/Imagem11.jpeg";
import Imagem12 from "../assets/images/Galeria De Churrasqueiras/Imagem12.jpeg";
import Imagem13 from "../assets/images/Galeria De Churrasqueiras/Imagem13.jpeg";
import Imagem14 from "../assets/images/Galeria De Churrasqueiras/Imagem14.jpeg";
import Imagem15 from "../assets/images/Galeria De Churrasqueiras/Imagem15.jpeg";
import Imagem16 from "../assets/images/Galeria De Churrasqueiras/Imagem16.jpeg";
import Imagem17 from "../assets/images/Galeria De Churrasqueiras/Imagem17.jpeg";
import Imagem18 from "../assets/images/Galeria De Churrasqueiras/Imagem18.jpeg";
import Imagem19 from "../assets/images/Galeria De Churrasqueiras/Imagem19.jpeg";
import Imagem20 from "../assets/images/Galeria De Churrasqueiras/Imagem20.jpeg";
import Imagem21 from "../assets/images/Galeria De Churrasqueiras/Imagem21.jpeg";
import Imagem22 from "../assets/images/Galeria De Churrasqueiras/Imagem22.jpeg";
import Imagem23 from "../assets/images/Galeria De Churrasqueiras/Imagem23.jpeg";
import Imagem24 from "../assets/images/Galeria De Churrasqueiras/Imagem24.jpeg";
import Imagem25 from "../assets/images/Galeria De Churrasqueiras/Imagem25.jpeg";
import Imagem26 from "../assets/images/Galeria De Churrasqueiras/Imagem26.jpeg";
import Imagem27 from "../assets/images/Galeria De Churrasqueiras/Imagem27.jpeg";
import Imagem28 from "../assets/images/Galeria De Churrasqueiras/Imagem28.jpeg";
import Imagem29 from "../assets/images/Galeria De Churrasqueiras/Imagem29.jpeg";

function Gallery() {
    const [data, setData] = useState({ img: "", i: 0 });
    const images = useMemo(
        () => [
            Imagem1,
            Imagem2,
            Imagem3,
            Imagem4,
            Imagem5,
            Imagem6,
            Imagem7,
            Imagem8,
            Imagem9,
            Imagem10,
            Imagem11,
            Imagem12,
            Imagem13,
            Imagem14,
            Imagem15,
            Imagem16,
            Imagem17,
            Imagem18,
            Imagem19,
            Imagem20,
            Imagem21,
            Imagem22,
            Imagem23,
            Imagem24,
            Imagem25,
            Imagem26,
            Imagem27,
            Imagem28,
            Imagem29,
        ],
        []
    );

    const viewImage = (img, i) => {
        setData({ img, i });
    };

    const imgAction = useCallback(
        (action) => {
            let i = data.i;

            if (action === "next-img") {
                // Verifica se há uma próxima imagem no array
                if (i < images.length - 1) {
                    setData({ img: images[i + 1], i: i + 1 });
                } else {
                    // Se não houver, volta para a primeira imagem
                    setData({ img: images[0], i: 0 });
                }
            }

            if (action === "previous-img") {
                // Verifica se há uma imagem anterior no array
                if (i > 0) {
                    setData({ img: images[i - 1], i: i - 1 });
                } else {
                    // Se não houver, vai para a última imagem
                    setData({
                        img: images[images.length - 1],
                        i: images.length - 1,
                    });
                }
            }

            if (!action) {
                setData({ img: "", i: 0 });
            }
        },
        [data.i, images]
    );

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape") {
                imgAction();
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [imgAction]);

    return (
        <>
            <div>Teste</div>
            {data.img && (
                <div className="fullImage">
                    <button
                        className="btn-close"
                        onClick={() => imgAction()}></button>

                    <button
                        onClick={() => imgAction("previous-img")}
                        className="btn-previous">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <img
                        loading="lazy"
                        src={data.img}
                        className="card-imagem-gallery"
                        alt="Churrasqueira"
                    />
                    <button
                        className="btn-next"
                        onClick={() => imgAction("next-img")}
                        style={{}}>
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            )}

            <div className="gallery">
                <div className="container">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 5 }}>
                        <Masonry gutter="20px">
                            {images.map((image, i) => (
                                <img
                                    loading="lazy"
                                    className="imagem-min"
                                    key={i}
                                    src={image}
                                    alt=""
                                    onClick={() => viewImage(image, i)}
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </>
    );
}

export default Gallery;
