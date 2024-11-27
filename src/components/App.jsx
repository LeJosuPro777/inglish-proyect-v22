import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { GameContentRoutes } from "./RoutesGames";
import axios from "axios";

export const App = () => {
  const [memoryContent, setMemoryContent] = useState(() => {
    const savedMemoryContent = localStorage.getItem("memoryContent");
    return savedMemoryContent ? JSON.parse(savedMemoryContent) : [];
  });
  //revisa si en el localStorage hay un item llamado memoryContent si no con la ternaria el memoryContent se iniciaria con un array vacio

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://papusdb-1.onrender.com/api/memoryContent") //fecth de la data con un method get
        .then((response) => {
          const { data } = response;
          if (JSON.stringify(data) !== JSON.stringify(memoryContent)) {
            // Verificar si los datos han cambiado
            setMemoryContent(data); // Actualizar el estado con los datos del servidor
            localStorage.setItem("memoryContent", JSON.stringify(data)); // Actualizar localStorage
          }
        })
        .catch((error) => console.error("Error al cargar los datos:", error));
    };
    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, [memoryContent]);

  return (
    <Router>
      <GameContentRoutes memoryContent={memoryContent} />
    </Router>
  );
};
