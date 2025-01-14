import React, { useState, useEffect, useContext } from "react";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import LogingForm from "../../Componentes/LogingForm";
import "./TopUrbanismo.css";
import ChartComponent from "../../Componentes/ChartComponent";
import DropdownMenu from "./../../Componentes/DropdownMenu";

function TopUrbanismo() {
  const { showPasswordState, data, isLoading, error } = useContext(PasswordContext);

  const [TopUrb, setTopUrb] = useState([0, 10]);
  const [estadosSeleccionados, setEstadosSeleccionados] = useState(["Activo"]);
  const [estadosSeleccionadosType, setEstadosSeleccionadosType] = useState(["Todos"]);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [topUrbanismos, setTopUrbanismos] = useState([]);
  const [totalClientesGlobal, setTotalClientesGlobal] = useState(0);
  const [handleGrafico2, setHandleGrafico2] = useState(true);
  const [migradosSeleccionados, setMigradosSeleccionados] = useState(["Todos"]);
  const [ciclosSeleccionados, setCiclosSeleccionados] = useState(["Todos"]);
  const [mostrarLista, setMostrarLista] = useState(true); // Estado para mostrar/ocultar la lista

  const handleTop10Urb = () => {
    setTopUrb([0, 10]);
  };

  const handleTopUrb = () => {
    setTopUrb([0, 3500]);
  };

  const handleMigradosChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setMigradosSeleccionados(selectedOptions);
  };

  const handleEstadoChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setEstadosSeleccionados(selectedOptions);
  };

  const toggleGraficos = () => {
    setHandleGrafico2(!handleGrafico2); // Alternar entre true y false
  };

  const handleEstadoChange2 = (event) => {
    const selectedOptions2 = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setEstadosSeleccionadosType(selectedOptions2);
  };

  const handleCiclosChange = (event) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setCiclosSeleccionados(selectedOptions);
  };

  useEffect(() => {
    if (!data) return;

    const urbanismosTotales = data.results
      .filter((servicio) => {
        const estadoFiltrado =
          estadosSeleccionados.includes("Todos") ||
          estadosSeleccionados.includes(servicio.status_name);
        const tipoFiltrado =
          estadosSeleccionadosType.includes("Todos") ||
          estadosSeleccionadosType.includes(servicio.client_type_name);
        const migradoFiltrado =
          migradosSeleccionados.includes("Todos") ||
          migradosSeleccionados.includes(servicio.migrate ? "Migrado" : "No migrado");
        const cicloFiltrado =
          ciclosSeleccionados.includes("Todos") ||
          ciclosSeleccionados.includes(servicio.cycle ? servicio.cycle.toString() : ""); // Verificación para null

        return estadoFiltrado && tipoFiltrado && migradoFiltrado && cicloFiltrado;
      })
      .reduce((acc, curr) => {
        if (!acc[curr.sector_name]) {
          acc[curr.sector_name] = {
            cantidadClientes: 1,
            ingresosTotales: parseFloat(curr.plan.cost),
            estado: curr.status_name,
            tipo: curr.client_type_name,
            clientes: [curr] // Agregar el cliente a la lista
          };
        } else {
          acc[curr.sector_name].cantidadClientes++;
          acc[curr.sector_name].ingresosTotales += parseFloat(curr.plan.cost);
          acc[curr.sector_name].clientes.push(curr); // Agregar cliente a la lista existente
        }
        return acc;
      }, {});

    const urbanismosTotalesArray = Object.keys(urbanismosTotales).map(
      (sector) => ({
        urbanismo: sector,
        ...urbanismosTotales[sector],
      })
    );

    urbanismosTotalesArray.sort(
      (a, b) => b.ingresosTotales - a.ingresosTotales
    );

    const topUrbanismosCalculados = urbanismosTotalesArray.slice(...TopUrb);
    const ingresosTotalesCalculados = urbanismosTotalesArray.reduce(
      (acc, curr) => acc + curr.ingresosTotales,
      0
    );
    const totalClientes = urbanismosTotalesArray.reduce(
      (acc, curr) => acc + curr.cantidadClientes,
      0
    );

    setTotalClientesGlobal(totalClientes);
    setTotalIngresos(ingresosTotalesCalculados);
    setTopUrbanismos(topUrbanismosCalculados);
  }, [data, TopUrb, estadosSeleccionados, estadosSeleccionadosType, migradosSeleccionados, ciclosSeleccionados]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <LogoTitulo />
      {showPasswordState ? (
        <>
          <h1>Inicia Sesión</h1>
          <LogingForm />
        </>
      ) : (
        <>
          <DropdownMenu />
          <PageNav />
          <div>
            <button className="button" type="submit" onClick={handleTop10Urb}>
              Top 10
            </button>
            <button className="button" type="submit" onClick={handleTopUrb}>
              Top Global
            </button>
          </div>

          <select
            id="estadoSelect"
            size="5"
            multiple
            value={estadosSeleccionados}
            onChange={handleEstadoChange}
            style={{ fontSize: '12px' }}
          >
            <option value="Todos">Todos</option>
            <option value="Activo">Activos</option>
            <option value="Suspendido">Suspendidos</option>
            <option value="Por instalar">Por instalar</option>
            <option value="Pausado">Pausado</option>
            <option value="Cancelado">Cancelados</option>
          </select>

          <select
            id="estadoSelect2"
            size="5"
            multiple
            value={estadosSeleccionadosType}
            onChange={handleEstadoChange2}
            style={{ fontSize: '10px' }}
          >
            <option value="Todos">Tipo de Cliente/Todos</option>
            <option value="PYME">Pyme</option>
            <option value="RESIDENCIAL">Residenciales</option>
            <option value="INTERCAMBIO">Institucionales</option>
          </select>

          <select
            id="migradosSelect"
            size="2"
            multiple
            value={migradosSeleccionados}
            onChange={handleMigradosChange}
            style={{ fontSize: '12px' }}
          >
            <option value="Todos">Todos</option>
            <option value="Migrado">Migrados</option>
            <option value="No migrado">No migrados</option>
          </select>

          <select
            id="ciclosSelect"
            size="3"
            multiple
            value={ciclosSeleccionados}
            onChange={handleCiclosChange}
            style={{ fontSize: '12px' }}
          >
            <option value="Todos">Todos</option>
            <option value="15">Ciclo 15</option>
            <option value="25">Ciclo 25</option>
          </select>

          <button className="buttonIngreso">
            Total de clientes: {totalClientesGlobal}
          </button>
          {estadosSeleccionados.includes("Cancelado") ? (
            <button className="buttonIngreso marginbutton">
              Total de Pérdida:{" "}
              {totalIngresos.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
              })}$
            </button>
          ) : (
            <button className="buttonIngreso marginbutton">
              Total de Ingresos:{" "}
              {totalIngresos.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
              })}$
            </button>
          )}

          <button
            className={!handleGrafico2 ? "button" : "buttonCerrar"}
            onClick={toggleGraficos}
          >
            {handleGrafico2 ? "Cerrar Gráficos" : "Abrir Gráficos"}
          </button>

          {/* Botón para mostrar/ocultar lista */}
          <button
            onClick={() => setMostrarLista((prev) => !prev)}
            className="mostrar-ocultar"
          >
            {mostrarLista ? "Ocultar Lista" : "Mostrar Lista"}
          </button>

          {handleGrafico2 && <ChartComponent urbanismos={topUrbanismos} />}
          <h3 className="h3"> Top Urbanismos</h3>

          {/* Pasa 'mostrarLista' como prop */}
          <UrbanismoList urbanismos={topUrbanismos} mostrarLista={mostrarLista} />
        </>
      )}
    </div>
  );
}

function UrbanismoList({ urbanismos, mostrarLista }) {
  return (
    <ul>
      {urbanismos.map((urbanismo, index) => (
        <li className="urbanismo-item encabezados" key={index}>
          <span className="urbanismo-nombre">
            {index + 1}. {urbanismo.urbanismo}
          </span>
          <br />
          <div className="encabezados">
            <span>
              <strong>Cantidad de Clientes:</strong>{" "}
              {urbanismo.cantidadClientes}
            </span>
            <br />
            {!(
              urbanismo.estado === "Cancelado" || urbanismo.estado === "Gratis"
            ) && (
              <span>
                <strong>Ingreso total:</strong>{" "}
                {Math.round(urbanismo.ingresosTotales)}$
              </span>
            )}
          </div>
          <div>
            {/* Mostrar la lista de clientes si 'mostrarLista' es true */}
            {mostrarLista && (
              <ul className="lista-clientes">
                {urbanismo.clientes?.map((cliente, index) => (
                  <li key={index}>
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
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TopUrbanismo;
