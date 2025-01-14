import React, { useState, useContext, useEffect } from "react";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import "./Indicadores.css"; // Archivo CSS para los estilos específicos de este componente
import Loging from "../Loging/Loging";
import Api from "../../Componentes/Api";
import DropdownMenu from "../../Componentes/DropdownMenu";

function Indicadores(props) {
  const { showPasswordState, data } = useContext(PasswordContext);

  // Estados para los indicadores y visibilidad de la API
  const [clientesActivos, setClientesActivos] = useState(0);
  const [clientesCancelados, setClientesCancelados] = useState(0);
  const [clientesSuspendidos, setClientesSuspendidos] = useState(0);
  const [clientesPorInstalar, setClientesPorInstalar] = useState(0);
  const [mostrarApi, setMostrarApi] = useState(false);

  // Función para calcular y actualizar los indicadores
  useEffect(() => {
    if (data && data.results) {
      let activos = 0;
      let cancelados = 0;
      let suspendidos = 0;
      let porInstalar = 0;

      data.results.forEach((cliente) => {
        switch (cliente.status_name) {
          case "Activo":
            activos++;
            break;
          case "Cancelado":
            cancelados++;
            break;
          case "Suspendido":
            suspendidos++;
            break;
          case "Por instalar":
            porInstalar++;
            break;
          default:
            break;
        }
      });

      setClientesActivos(activos);
      setClientesCancelados(cancelados);
      setClientesSuspendidos(suspendidos);
      setClientesPorInstalar(porInstalar);
    }
  }, [data]);

  // Función para alternar la visibilidad de la API
  const toggleMostrarApi = () => {
    setMostrarApi(!mostrarApi);
  };

  return (
    <div>
      {showPasswordState ? (
        <>
          <h1>Inicia Sesión</h1>
          <Loging />
        </>
      ) : (
        <>
          <LogoTitulo />
          <DropdownMenu />
          <PageNav />

          {/* Indicadores de clientes */}
          <ul className="urbanismo-item encabezados">
            <li>
              <h4>Clientes Activos</h4>
              <p>{clientesActivos}</p>
            </li>
            <li>
              <h4>Clientes Cancelados</h4>
              <p>{clientesCancelados}</p>
            </li>
            <li>
              <h4>Clientes Suspendidos</h4>
              <p>{clientesSuspendidos}</p>
            </li>
            <li>
              <h4>Clientes Por Instalar</h4>
              <p>{clientesPorInstalar}</p>
            </li>
          </ul>

          {/* Botón para mostrar/ocultar la API */}
          <button onClick={toggleMostrarApi} className="buttonMenuIndicadores">
            {mostrarApi ? "Ocultar Lista de clientes" : "Cargar Lista de clientes"}
          </button>

          {/* Componente Api para mostrar la lista de clientes */}
          {mostrarApi && <Api />}
        </>
      )}
    </div>
  );
}

export default Indicadores;

