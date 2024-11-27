import "../styles/BackToMe.css";
import { useState, useEffect } from "react";
export const BackToMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón solo cuando se haya desplazado hacia abajo
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Agregar el evento de scroll cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento de scroll cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <>
        <a href="#" className="back2me" onClick={scrollToTop}>
          <img
            className="back2me-image"
            alt="screenshot of vite initial webpage and file structure on vs code"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48dGl0bGU+aWNfYXJyb3dfdXB3YXJkXzQ4cHg8L3RpdGxlPg0KICAgIDxnIGNsYXNzPSJuYy1pY29uLXdyYXBwZXIiIGZpbGw9IiMxMTExMTEiPg0KICAgICAgICA8cGF0aCBkPSJNOCAyNGwyLjgzIDIuODNMMjIgMTUuNjZWNDBoNFYxNS42NmwxMS4xNyAxMS4xN0w0MCAyNCAyNCA4IDggMjR6Ii8+DQogICAgPC9nPg0KPC9zdmc+"
          />
        </a>
      </>
    )
  );
};
