import { useEffect, useRef } from "react";
import "./Loader.css";

const Loader = () => {
  const loaderRef = useRef(null); // Crear una referencia

    useEffect(() => {
        if (loaderRef.current) {
        setTimeout(() => {
            loaderRef.current.style.opacity = "0"; // Desvanecer
            setTimeout(() => {
            loaderRef.current.style.display = "none"; // Ocultar después de la animación
            }, 500); // Tiempo extra para la transición
        }, 1200); // Retraso inicial de 2 segundos
        }
    }, []);

    return (
        <div ref={loaderRef} id="loader">
        <div className="spinner"></div>
        </div>
    );
};

export default Loader;
