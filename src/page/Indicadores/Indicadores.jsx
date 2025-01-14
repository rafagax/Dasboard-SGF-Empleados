import React, { useState, useEffect, useContext } from "react";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import Loging from "../Loging/Loging";
import DropdownMenu from "../../Componentes/DropdownMenu";
import "./Indicadores.css"; // Archivo CSS para los estilos específicos de este componente

function Indicadores() {
  const { showPasswordState, data } = useContext(PasswordContext);

  const [clientesFiltrados, setClientesFiltrados] = useState([]);
  const [tipoFiltro, setTipoFiltro] = useState("Todos"); // Estado para el filtro
  const [mostrarLista, setMostrarLista] = useState(true); // Estado para mostrar/ocultar la lista

  // Función para filtrar clientes por tipo
  const filtrarClientes = (tipo) => {
    if (tipo === "Todos") {
      setClientesFiltrados(data.results || []);
    } else {
      const filtrados = (data.results || []).filter(
        (cliente) => cliente.status_name === tipo
      );
      setClientesFiltrados(filtrados);
    }
    setTipoFiltro(tipo);
  };

  // Contar clientes por estado
  const contarEstados = () => {
    const conteo = { Todos: data?.results?.length || 0 };
    if (data && data.results) {
      data.results.forEach((cliente) => {
        conteo[cliente.status_name] = (conteo[cliente.status_name] || 0) + 1;
      });
    }
    return conteo;
  };

  const conteos = contarEstados();

  // Cargar todos los clientes al inicio
  useEffect(() => {
    if (data && data.results) {
      setClientesFiltrados(data.results);
    }
  }, [data]);

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

          <h2>Indicadores de Clientes</h2>

          {/* Mostrar el conteo de clientes por estado */}
          <div className="conteos">
            <p>Total de clientes: {conteos.Todos}</p>
            {Object.keys(conteos).map(
              (estado) =>
                estado !== "Todos" && (
                  <p key={estado}>
                    {estado}: {conteos[estado]}
                  </p>
                )
            )}
          </div>

          {/* Botones de filtro */}
          <div className="filtros">
            {Object.keys(conteos).map((estado) => (
              <button
                key={estado}
                onClick={() => filtrarClientes(estado)}
                className={tipoFiltro === estado ? "activo" : ""}
              >
                {estado}
              </button>
            ))}
          </div>

          {/* Botón para mostrar/ocultar lista */}
          <button
            onClick={() => setMostrarLista((prev) => !prev)}
            className="mostrar-ocultar"
          >
            {mostrarLista ? "Ocultar Lista" : "Mostrar Lista"}
          </button>

          {/* Lista de clientes filtrados */}
          {mostrarLista && (
            <ul className="lista-clientes">
              {clientesFiltrados.map((cliente) => (
                <li key={cliente.id}>
                  <p>
                    <strong>Nombre:</strong> {cliente.client_name}
                  </p>
                  <p>
                    <strong>Estado:</strong> {cliente.status_name}
                  </p>
                  <p>
                    <strong>Sector:</strong> {cliente.sector_name}
                  </p>
                  <p>
                    <strong>Plan:</strong> {cliente.plan.name} (${cliente.plan.cost})
                  </p>
                  <p>
  <strong>Teléfono:</strong> {cliente.client_mobile} {/* Aquí se agrega el teléfono */}
</p>

                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Indicadores;
