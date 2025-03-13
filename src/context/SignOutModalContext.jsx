// SignOutModalContext.jsx
import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SignOutModal.css";

// Crear el contexto
const SignOutModalContext = createContext();

// Hook personalizado para acceder al contexto
export const useSignOutModal = () => useContext(SignOutModalContext);

// Proveedor del contexto
export const SignOutModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Funciones para controlar el modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Función para salir y redirigir a la pantalla de SignOut
  const exitApp = () => {
    navigate("/signOut");
    closeModal();
  };

  return (
    <SignOutModalContext.Provider value={{ openModal }}>
      {children}

      {isOpen && (
        <div className="signoutModalOverlay" onClick={closeModal}>
            <div className="signoutModal" onClick={(e) => e.stopPropagation()}>
                <div className="confirmationSignout">
                    <h3 className="titleSignout">Salida segura</h3>
                    <p className="subtitleSignout">¿Qué deseas hacer?</p>
                </div>
                <di className="modalButtons">
                    <button className="confirmButton" onClick={exitApp}>
                      Salir
                    </button>
                    <button className="cancelButton" onClick={closeModal}>
                      Continuar
                    </button>
                </di>
            </div>
        </div>
      )}
    </SignOutModalContext.Provider>
  );
};
