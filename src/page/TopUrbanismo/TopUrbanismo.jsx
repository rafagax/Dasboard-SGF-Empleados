import React, { useState, useEffect, useContext } from "react";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import LogingForm from "../../Componentes/LogingForm";
import "./TopUrbanismo.css";
import ChartComponent from "../../Componentes/ChartComponent";
import DropdownMenu from "./../../Componentes/DropdownMenu";
import * as XLSX from "xlsx"; // Importa la librería XLSX

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

  const handleTop10Urb = () => setTopUrb([0, 10]);
  const handleTopUrb = () => setTopUrb([0, 3500]);

  const handleMigradosChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setMigradosSeleccionados(selectedOptions);
  };

  const handleEstadoChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setEstadosSeleccionados(selectedOptions);
  };

  const toggleGraficos = () => setHandleGrafico2(!handleGrafico2);

  const handleEstadoChange2 = (event) => {
    const selectedOptions2 = Array.from(event.target.selectedOptions, (option) => option.value);
    setEstadosSeleccionadosType(selectedOptions2);
  };

  const handleCiclosChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setCiclosSeleccionados(selectedOptions);
  };

  const handleDownloadExcel = () => {
    const workbook = XLSX.utils.book_new();
  
    // Generar datos de urbanismos
const worksheetData = topUrbanismos.flatMap((urbanismo, index) => {
  return urbanismo.clientes.map((cliente, clientIndex) => ({
    // "N° Urbanismo": index + 1,
    "N° Cliente": clientIndex + 1,
    Cliente: cliente.client_name,
    Urbanismo: urbanismo.urbanismo,
    Estado: cliente.status_name,
    // Sector: cliente.sector_name,
    Plan: `${cliente.plan.name} (${cliente.plan.cost}$)`,
    costo_plan: Number(cliente.plan.cost),
    Teléfono: cliente.client_mobile,
    Ciclo: cliente.cycle, // Campo agregado
  }));
});


  
    // Crear la hoja de trabajo con los datos generados
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
  // Ajustar el ancho de las columnas para que no se vean amontonadas
  const columnWidths = worksheetData.reduce((acc, row) => {
    Object.keys(row).forEach((key, idx) => {
      const cellValue = String(row[key]);
      const currentWidth = acc[idx] || 0;
      acc[idx] = Math.max(currentWidth, cellValue.length);
    });
    return acc;
  }, []);

  worksheet['!cols'] = columnWidths.map(width => ({ wpx: width * 6 })); // Multiplica por 10 para ajustar el tamaño


    // Agregar la hoja de trabajo al libro
    XLSX.utils.book_append_sheet(workbook, worksheet, "Clientes por Urbanismo");
  
    // Obtener el estado seleccionado
    const estadoSeleccionado = estadosSeleccionados.join('_'); // Une todos los estados seleccionados con un guion bajo (si es necesario)
  
    // Generar el nombre del archivo con el estado seleccionado
    const nombreArchivo = `listado_de_clientes_${estadoSeleccionado}.xlsx`;
  
    // Descargar el archivo Excel
    XLSX.writeFile(workbook, nombreArchivo);
  };
  

  useEffect(() => {
    if (!data) return;

    const urbanismosTotales = data.results
      .filter((servicio) => {
        const estadoFiltrado = estadosSeleccionados.includes("Todos") || estadosSeleccionados.includes(servicio.status_name);
        const tipoFiltrado = estadosSeleccionadosType.includes("Todos") || estadosSeleccionadosType.includes(servicio.client_type_name);
        const migradoFiltrado = migradosSeleccionados.includes("Todos") || migradosSeleccionados.includes(servicio.migrate ? "Migrado" : "No migrado");
        const cicloFiltrado = ciclosSeleccionados.includes("Todos") || ciclosSeleccionados.includes(servicio.cycle ? servicio.cycle.toString() : "");

        return estadoFiltrado && tipoFiltrado && migradoFiltrado && cicloFiltrado;
      })
      .reduce((acc, curr) => {
        if (!acc[curr.sector_name]) {
          acc[curr.sector_name] = {
            cantidadClientes: 1,
            ingresosTotales: parseFloat(curr.plan.cost),
            estado: curr.status_name,
            tipo: curr.client_type_name,
            clientes: [curr]
          };
        } else {
          acc[curr.sector_name].cantidadClientes++;
          acc[curr.sector_name].ingresosTotales += parseFloat(curr.plan.cost);
          acc[curr.sector_name].clientes.push(curr);
        }
        return acc;
      }, {});

    const urbanismosTotalesArray = Object.keys(urbanismosTotales).map((sector) => ({
      urbanismo: sector,
      ...urbanismosTotales[sector],
    }));

    urbanismosTotalesArray.sort((a, b) => b.ingresosTotales - a.ingresosTotales);

    const topUrbanismosCalculados = urbanismosTotalesArray.slice(...TopUrb);
    const ingresosTotalesCalculados = urbanismosTotalesArray.reduce((acc, curr) => acc + curr.ingresosTotales, 0);
    const totalClientes = urbanismosTotalesArray.reduce((acc, curr) => acc + curr.cantidadClientes, 0);

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
            <button className="button" onClick={handleTop10Urb}>Top 10</button>
            <button className="button" onClick={handleTopUrb}>Top Global</button>
          </div>
          
        

          <select id="estadoSelect" size="5" multiple value={estadosSeleccionados} onChange={handleEstadoChange}>
            <option value="Todos">Todos</option>
            <option value="Activo">Activos</option>
            <option value="Suspendido">Suspendidos</option>
            <option value="Por instalar">Por instalar</option>
            <option value="Pausado">Pausado</option>
            <option value="Cancelado">Cancelados</option>
          </select>

          <select id="estadoSelect2" size="5" multiple value={estadosSeleccionadosType} onChange={handleEstadoChange2}>
            <option value="Todos">Tipo de Cliente/Todos</option>
            <option value="PYME">Pyme</option>
            <option value="RESIDENCIAL">Residenciales</option>
            <option value="INTERCAMBIO">Institucionales</option>
          </select>

          <select id="migradosSelect" size="2" multiple value={migradosSeleccionados} onChange={handleMigradosChange}>
            <option value="Todos">Todos</option>
            <option value="Migrado">Migrados</option>
            <option value="No migrado">No migrados</option>
          </select>

          <select id="ciclosSelect" size="3" multiple value={ciclosSeleccionados} onChange={handleCiclosChange}>
            <option value="Todos">Todos</option>
            <option value="15">Ciclo 15</option>
            <option value="25">Ciclo 25</option>
          </select>

          <button className="buttonIngreso">Total de clientes: {totalClientesGlobal}</button>
          <button className="buttonIngreso marginbutton">
            {estadosSeleccionados.includes("Cancelado")
              ? `Total de Pérdida: ${totalIngresos.toLocaleString("es-ES", { minimumFractionDigits: 2 })}$`
              : `Total de Ingresos: ${totalIngresos.toLocaleString("es-ES", { minimumFractionDigits: 2 })}$`}
          </button>

          <button className={!handleGrafico2 ? "button" : "buttonCerrar"} onClick={toggleGraficos}>
            {handleGrafico2 ? "Cerrar Gráficos" : "Abrir Gráficos"}
          </button> 
          <button className="buttonDescargar" onClick={handleDownloadExcel}>Descargar Excel</button>

          {handleGrafico2 && <ChartComponent urbanismos={topUrbanismos} />}
          <h3 className="h3">Top Urbanismos</h3>

          <UrbanismoList urbanismos={topUrbanismos} />
        </>
      )}
    </div>
  );
}

function UrbanismoList({ urbanismos }) {
  const [mostrarLista, setMostrarLista] = useState({});

  const toggleMostrarLista = (index) => {
    setMostrarLista((prevState) => ({ ...prevState, [index]: !prevState[index] }));
  };

  return (
    <ul>
      {urbanismos.map((urbanismo, index) => (
        <li className="urbanismo-item encabezados" key={index}>
          <span className="urbanismo-nombre">
            {index + 1}. {urbanismo.urbanismo}
          </span>

          <br />
          <div className="encabezados">
            <span><strong>Cantidad de Clientes:</strong> {urbanismo.cantidadClientes}</span>
            <br />
            {!(
              urbanismo.estado === "Cancelado" || urbanismo.estado === "Gratis"
            ) && (
              <span><strong>Ingreso total:</strong> {Math.round(urbanismo.ingresosTotales)}$</span>
            )}
          </div>

          <button
            onClick={() => toggleMostrarLista(index)}
            className="mostrar-ocultar"
          >
            {mostrarLista[index] ? "Ocultar Lista" : "Mostrar Lista"}
          </button>

          <div>
            {mostrarLista[index] && (
              <ul className="lista-clientes">
                {urbanismo.clientes.map((cliente, idx) => (
                  <li key={idx}>
                    <p><strong>Nombre:</strong> {cliente.client_name}</p>
                    <p><strong>Estado:</strong> {cliente.status_name}</p>
                    <p><strong>Sector:</strong> {cliente.sector_name}</p>
                    <p><strong>Plan:</strong> {cliente.plan.name} (${cliente.plan.cost})</p>
                    <p><strong>Teléfono:</strong> {cliente.client_mobile}</p>
                    <p><strong>ciclo:</strong>{cliente.cycle}</p>
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
