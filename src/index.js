import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./GalleryPage/Gallery";
import ErrorPage from "./ErrorPage/ErrorPage";
import ProductPage from "./ProductPage/ProductPage";
import Product from "./ProductPage/Product/Product";
import ContactPage from "./ContactPage/ContactPage";
import AboutUs from "./AboutUsPage/AboutUs";
import Gourmet from "./GourmetPage/Gourmet";
import Alvenaria from "./AlvenariaPage/Alvenaria";
import Premoldada from "./Pre-MoldadaPage/Premoldada";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <AboutUs> </AboutUs>,
            },
            {
                path: "galeria",
                element: <Gallery></Gallery>,
            },
            {
                path: "produtos",
                element: <ProductPage></ProductPage>,
            },
            {
                path: "produto/:productName/:productId",
                element: <Product />,
            },
            {
                path: "contato",
                element: <ContactPage />,
            },
            {
                path: "sobre-nos",
                element: <AboutUs />,
            },
            {
                path: "gourmet",
                element: <Gourmet />,
            },
            {
                path: "alvenaria",
                element: <Alvenaria />,
            },
            {
                path: "pre-moldada",
                element: <Premoldada />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
