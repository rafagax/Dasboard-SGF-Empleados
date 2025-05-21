import React, { useState, useEffect, useContext } from "react";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import LogingForm from "../../Componentes/LogingForm";
import "./TopUrbanismo.css";
import ChartComponent from "../../Componentes/ChartComponent";
import DropdownMenu from "./../../Componentes/DropdownMenu";
import * as XLSX from "xlsx";

// Mapeo de sectores a agencias
const sectorAgenciaMap = {
  "Guerito": "AGENCIA MACARO",
  "Isaac Oliveira": "AGENCIA MACARO",
  "La Casona I": "AGENCIA MACARO",
  "La Casona I Edificios": "AGENCIA MACARO",
  "La Casona II": "AGENCIA MACARO",
  "La Casona II Edificios": "AGENCIA MACARO",
  "La Concepcion": "AGENCIA MACARO",
  "La Concepcion III": "AGENCIA MACARO",
  "La Julia": "AGENCIA MACARO",
  "La Magdalena": "AGENCIA MACARO",
  "Leocolbo": "AGENCIA MACARO",
  "Los Caobos": "AGENCIA MACARO",
  "Narayola II": "AGENCIA MACARO",
  "Palmeras I": "AGENCIA MACARO",
  "Palmeras II": "AGENCIA MACARO",
  "Plaza Jardin": "AGENCIA MACARO",
  "Salto Angel": "AGENCIA MACARO",
  "Saman de Guere": "AGENCIA MACARO",
  "Saman Tarazonero I": "AGENCIA MACARO",
  "Saman Tarazonero II": "AGENCIA MACARO",
  "Santa Eduviges": "AGENCIA MACARO",
  "Terrazas de Juan Pablo": "AGENCIA MACARO",
  "Villas Del Sur": "AGENCIA MACARO",
  "Antonio Jose de Sucre": "AGENCIA MACARO",
  "Arturo Luis Berti": "AGENCIA MACARO",
  "El Paraiso": "AGENCIA MACARO",
  "Jabillar": "AGENCIA MACARO",
  "La Esperanza": "AGENCIA MACARO",
  "La Macarena": "AGENCIA MACARO",
  "Lascenio Guerrero": "AGENCIA MACARO",
  "San Sebastian": "AGENCIA MACARO",
  "Santa Barbara": "AGENCIA MACARO",
  "Simon Bolivar": "AGENCIA MACARO",
  "Valle del Rosario": "AGENCIA MACARO",
  "Villa De San Jose": "AGENCIA MACARO",
  "Villa Los Tamarindos": "AGENCIA MACARO",
  "Villas El Carmen": "AGENCIA MACARO",
  
  "1ro de Mayo Norte": "AGENCIA PAYA",
  "1ro de Mayo Sur": "AGENCIA PAYA",
  "Antigua Hacienda De Paya": "AGENCIA PAYA",
  "Betania": "AGENCIA PAYA",
  "Bicentenario": "AGENCIA PAYA",
  "Brisas de Paya": "AGENCIA PAYA",
  "Callejon Los Mamones": "AGENCIA PAYA",
  "Canaima": "AGENCIA PAYA",
  "Durpa": "AGENCIA PAYA",
  "El Bosque": "AGENCIA PAYA",
  "El Cambur": "AGENCIA PAYA",
  "El Naranjal": "AGENCIA PAYA",
  "Ezequiel Zamora": "AGENCIA PAYA",
  "Guayabita": "AGENCIA PAYA",
  "La Arboleda": "AGENCIA PAYA",
  "La Guzman": "AGENCIA PAYA",
  "La Marcelota": "AGENCIA PAYA",
  "La Orquidea": "AGENCIA PAYA",
  "Las Palmas": "AGENCIA PAYA",
  "Las Rurales": "AGENCIA PAYA",
  "Los Hornos": "AGENCIA PAYA",
  "Luz y Vida": "AGENCIA PAYA",
  "Manirito": "AGENCIA PAYA",
  "Mata Caballo": "AGENCIA PAYA",
  "Palma Real": "AGENCIA PAYA",
  "Pantin": "AGENCIA PAYA",
  "Paraguatan": "AGENCIA PAYA",
  "Paya Abajo": "AGENCIA PAYA",
  "Payita": "AGENCIA PAYA",
  "Polvorin": "AGENCIA PAYA",
  "Ppal Paya": "AGENCIA PAYA",
  "Prados": "AGENCIA PAYA",
  "Prados I": "AGENCIA PAYA",
  "Prados II": "AGENCIA PAYA",
  "Prados III": "AGENCIA PAYA",
  "Rio Seco": "AGENCIA PAYA",
  "Sector los Mangos": "AGENCIA PAYA",
  "Taguapire": "AGENCIA PAYA",
  "Terrazas de Paya": "AGENCIA PAYA",
  "Valle Verde": "AGENCIA PAYA",
  "Vallecito": "AGENCIA PAYA",
  "Vista Hermosa": "AGENCIA PAYA",
  "Antigua Hacienda De Paya II": "AGENCIA PAYA",
  
  "Calle Peñalver": "AGENCIA TURMERO",
  "Callejon 17": "AGENCIA TURMERO",
  "Callejon Cañaveral": "AGENCIA TURMERO",
  "Callejon Lim": "AGENCIA TURMERO",
  "Callejon Los Jabillos": "AGENCIA TURMERO",
  "Callejon Rosales": "AGENCIA TURMERO",
  "Ciudad Bendita": "AGENCIA TURMERO",
  "Dios Es Mi Refugio": "AGENCIA TURMERO",
  "El Macaro": "AGENCIA TURMERO",
  "El Nispero": "AGENCIA TURMERO",
  "Guanarito": "AGENCIA TURMERO",
  "Haras de San Pablo": "AGENCIA TURMERO",
  "Huerta Los Pajaros": "AGENCIA TURMERO",
  "La Aduana": "AGENCIA TURMERO",
  "La Floresta": "AGENCIA TURMERO",
  "La Montaña": "AGENCIA TURMERO",
  "La Montañita": "AGENCIA TURMERO",
  "Laguna II": "AGENCIA TURMERO",
  "Laguna Plaza": "AGENCIA TURMERO",
  "Los Mangos": "AGENCIA TURMERO",
  "Los Nisperos": "AGENCIA TURMERO",
  "Marina Caribe": "AGENCIA TURMERO",
  "Prados de Cafetal": "AGENCIA TURMERO",
  "Residencias Candys": "AGENCIA TURMERO",
  "Residencias Mariño": "AGENCIA TURMERO",
  "San Carlos": "AGENCIA TURMERO",
  "San Pablo": "AGENCIA TURMERO",
  "Terrazas de Turmero": "AGENCIA TURMERO",
  "Tibisay Guevara": "AGENCIA TURMERO",
  "Valle Fresco": "AGENCIA TURMERO",
  "Valle lindo": "AGENCIA TURMERO",
  "Valle Paraiso": "AGENCIA TURMERO",
  "Villeguita": "AGENCIA TURMERO",
  "Villa Caribe": "AGENCIA TURMERO",
  "Casco de Turmero": "AGENCIA TURMERO",

};


const urbanismosAprobados = {
  "AGENCIA MACARO": [
    "Guerito", "Isaac Oliveira", "La Casona I", "La Casona I Edificios",
    "La Casona II", "La Casona II Edificios", "La Concepcion", "La Concepcion III",
    "La Julia", "La Magdalena", "Leocolbo", "Los Caobos", "Narayola II",
    "Palmeras I", "Palmeras II", "Plaza Jardin", "Salto Angel", "Saman de Guere",
    "Saman Tarazonero I", "Saman Tarazonero II", "Santa Eduviges",
    "Terrazas de Juan Pablo", "Villas Del Sur", "Antonio Jose de Sucre",
    "Arturo Luis Berti", "El Paraiso", "Jabillar", "La Esperanza",
    "La Macarena", "Lascenio Guerrero", "San Sebastian", "Santa Barbara",
    "Simon Bolivar", "Valle del Rosario", "Villa De San Jose",
    "Villa Los Tamarindos", "Villas El Carmen"
  ],
  "AGENCIA PAYA": [
    "1ro de Mayo Norte", "1ro de Mayo Sur", "Antigua Hacienda De Paya", "Betania",
    "Bicentenario", "Brisas de Paya", "Callejon Los Mamones", "Canaima",
    "Casco de Turmero", "Durpa", "El Bosque", "El Cambur", "El Naranjal",
    "Ezequiel Zamora", "Guayabita", "La Arboleda", "La Guzman", "La Marcelota",
    "La Orquidea", "Las Palmas", "Las Rurales", "Los Hornos", "Luz y Vida",
    "Manirito", "Mata Caballo", "Palma Real", "Pantin", "Paraguatan",
    "Paya Abajo", "Payita", "Polvorin", "Ppal Paya", "Prados", "Prados I",
    "Prados II", "Prados III", "Rio Seco", "Sector los Mangos", "Taguapire",
    "Terrazas de Paya", "Valle Verde", "Vallecito", "Vista Hermosa",
    "Antigua Hacienda De Paya II"
  ],
  "AGENCIA TURMERO": [
    "Calle Peñalver", "Callejon 17", "Callejon Cañaveral", "Callejon Lim",
    "Callejon Los Jabillos", "Callejon Rosales", "Ciudad Bendita",
    "Dios Es Mi Refugio", "El Macaro", "El Nispero", "Guanarito",
    "Haras de San Pablo", "Huerta Los Pajaros", "La Aduana", "La Floresta",
    "La Montaña", "La Montañita", "Laguna II", "Laguna Plaza", "Los Mangos",
    "Los Nisperos", "Marina Caribe", "Prados de Cafetal", "Residencias Candys",
    "Residencias Mariño", "San Carlos", "San Pablo", "Terrazas de Turmero",
    "Tibisay Guevara", "Valle Fresco", "Valle lindo", "Valle Paraiso",
    "Villeguita", "Villa Caribe", "Casco de Turmero"
  ]
};


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
  const [sectoresSeleccionados, setSectoresSeleccionados] = useState([]);
  const [urbanismosSeleccionados, setUrbanismosSeleccionados] = useState([]);

  const handleTop10Urb = () => setTopUrb([0, 10]);
  const handleTopUrb = () => setTopUrb([0, 3500]);

  const handleSectoresChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSectoresSeleccionados(selectedOptions);
    setUrbanismosSeleccionados([]); // Resetear la selección de urbanismos
  };

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

  // Función para calcular días hábiles entre dos fechas
  function calcularDiasHabiles(fechaInicio, fechaFin) {
    let count = 0;
    let current = new Date(fechaInicio);

    while (current <= fechaFin) {
      const day = current.getDay();
      if (day !== 0 && day !== 6) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }

    return count;
  }

  const hoy = new Date();



  const worksheetData = topUrbanismos.flatMap((urbanismo) => {
  return urbanismo.clientes.map((cliente, clientIndex) => {
    const service = cliente.service_detail || {};
    const created_at_raw = cliente.created_at || "";
    const created_at = created_at_raw ? new Date(created_at_raw) : null;
    const diasHabiles = created_at ? calcularDiasHabiles(created_at, hoy) : "";

    return {
      "N° Cliente": clientIndex + 1,
      id: cliente.id,
       "Días Hábiles-": diasHabiles,
      Cliente: cliente.client_name,
      Urbanismo: urbanismo.urbanismo,
      Dirección: cliente.address,
      Teléfono: cliente.client_mobile,
      nap_box_name: service.nap_box_name || "",
      IP: service.ip || "",
      MAC: service.mac || "",
      "Fecha_Creación": created_at_raw.slice(0, 10),
      "Días Hábiles": diasHabiles,
      Tipo_Cliente: cliente.client_type_name,
      
    };
  });
});

// ✅ Ordenar por días hábiles de mayor a menor
worksheetData.sort((a, b) => b["Días Hábiles"] - a["Días Hábiles"]);

  // Crear la hoja de trabajo con los datos generados
  const worksheet = XLSX.utils.json_to_sheet(worksheetData);

  // Ajustar el ancho de las columnas
  const columnWidths = worksheetData.reduce((acc, row) => {
    Object.keys(row).forEach((key, idx) => {
      const cellValue = String(row[key]);
      const currentWidth = acc[idx] || 0;
      acc[idx] = Math.max(currentWidth, cellValue.length);
    });
    return acc;
  }, []);

  worksheet["!cols"] = columnWidths.map((width) => ({ wpx: width * 6 }));

  // Agregar la hoja al libro
  XLSX.utils.book_append_sheet(workbook, worksheet, "Clientes por Urbanismo");

  // Nombre del archivo
  const estadoSeleccionado = estadosSeleccionados.join("_");
  const nombreArchivo = `listado_de_clientes_${estadoSeleccionado}.xlsx`;

  // Descargar el archivo
  XLSX.writeFile(workbook, nombreArchivo);
};

  useEffect(() => {
    if (!data) return;

   

    const urbanismosTotales = data.results
    .filter((servicio) => !servicio.client_name.includes("PRUEBA")) // Filtra clientes que no incluyan "PRUEBA"
    .filter((servicio) => {
    
        const estadoFiltrado = estadosSeleccionados.includes("Todos") || estadosSeleccionados.includes(servicio.status_name);
        const tipoFiltrado = estadosSeleccionadosType.includes("Todos") || estadosSeleccionadosType.includes(servicio.client_type_name);
        const migradoFiltrado = migradosSeleccionados.includes("Todos") || migradosSeleccionados.includes(servicio.migrate ? "Migrado" : "No migrado");
        const cicloFiltrado = ciclosSeleccionados.includes("Todos") || ciclosSeleccionados.includes(servicio.cycle ? servicio.cycle.toString() : "");
        const sectorFiltrado =
  sectoresSeleccionados.length === 0 ||
  sectoresSeleccionados.includes("Todos") || // Se añade la verificación de "Todos"
  (servicio.sector_name && sectoresSeleccionados.includes(sectorAgenciaMap[servicio.sector_name]));

const urbanismoFiltrado =
  urbanismosSeleccionados.length === 0 ||
  urbanismosSeleccionados.includes("Todos") || // Se añade la verificación de "Todos"
  (servicio.sector_name && urbanismosSeleccionados.includes(servicio.sector_name));

       

        return estadoFiltrado && tipoFiltrado && migradoFiltrado && cicloFiltrado && sectorFiltrado && urbanismoFiltrado;
      })
      .reduce((acc, curr) => {
        if (!acc[curr.sector_name]) {
          acc[curr.sector_name] = {
            cantidadClientes: 1,
            ingresosTotales: parseFloat(curr.plan.cost),
            estado: curr.status_name,
            tipo: curr.client_type_name,
            clientes: [curr],
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
  }, [data, TopUrb, estadosSeleccionados, estadosSeleccionadosType, migradosSeleccionados, ciclosSeleccionados, sectoresSeleccionados, urbanismosSeleccionados]);

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

          <select id="sectoresSelect" size="5" multiple value={sectoresSeleccionados} onChange={handleSectoresChange}>
            <option value="Todos">Todas las agencias</option>
            <option value="AGENCIA MACARO">AGENCIA MACARO</option>
            <option value="AGENCIA PAYA">AGENCIA PAYA</option>
            <option value="AGENCIA TURMERO">AGENCIA TURMERO</option>
          </select>

          <select id="urbanismosSelect" size="5" multiple value={urbanismosSeleccionados} onChange={(e) => setUrbanismosSeleccionados(Array.from(e.target.selectedOptions, (option) => option.value))}>
            <option value="Todos">Todos los urbanismos</option>
            {sectoresSeleccionados.map((sector) =>
              urbanismosAprobados[sector]?.map((urbanismo) => (
                <option key={urbanismo} value={urbanismo}>
                  {urbanismo}
                </option>
              ))
            )}
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
    <span><strong>Ingreso total:</strong> { Math.round(urbanismo.ingresosTotales)}$</span>
  )}
</div>


          <button onClick={() => toggleMostrarLista(index)} className="mostrar-ocultar">
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
                    <p><strong>Ciclo:</strong> {cliente.cycle}</p>
                    <p><strong>Dirección:</strong> {cliente.address}</p>
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