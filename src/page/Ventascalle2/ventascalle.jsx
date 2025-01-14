import React, { useState, useEffect, useContext } from "react";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import LogingForm from "../../Componentes/LogingForm";
import DropdownMenu from "./../../Componentes/DropdownMenu";
import "./ventascalle.css"; // Asegúrate de importar el archivo CSS

function Ventascalle() {
  const { showPasswordState, data, isLoading, error } = useContext(PasswordContext);

  const [TopUrb, setTopUrb] = useState([0, 3500]);
  const [estadosSeleccionados, setEstadosSeleccionados] = useState(["Anual"]);
  // const [estadosSeleccionadosType, setEstadosSeleccionadosType] = useState(["Todos"]);
  const [Vendedores, setVendedores] = useState("Vendedores/Todos");
  const [Ventasdelanoactual, setVentasdelanoactual] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [totalClientesGlobal, setTotalClientesGlobal] = useState(0);
  const [sumatoriaPrecios, SetsumatoriaPrecios] = useState(0);

  useEffect(() => {
    if (!data) return;
  
    // función para calcular el último día del mes
    function ultimoDiaDelMes(año, mes) {
      return new Date(año, mes + 1, 0);
    }
  
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth();
  
    const fechasMes = [
      { mes: 0, nombre: "Enero" },
      { mes: 1, nombre: "Febrero" },
      { mes: 2, nombre: "Marzo" },
      { mes: 3, nombre: "Abril" },
      { mes: 4, nombre: "Mayo" },
      { mes: 5, nombre: "Junio" },
      { mes: 6, nombre: "Julio" },
    ];
  
    const filtroFechas = fechasMes.map(({ mes, nombre }) => ({
      nombre,
      inicio: new Date(añoActual, mes, 1),
      fin: ultimoDiaDelMes(añoActual, mes)
    }));
  
    const primerDiaAñoActual = new Date(añoActual, 0, 1);
    const ultimoDiaAñoActual = new Date(añoActual, 11, 31);
    const primerDiaAñoPasado = new Date(añoActual - 1, 0, 1);
    const ultimoDiaAñoPasado = new Date(añoActual - 1, 11, 31);
    const primerDiadelMes = new Date(añoActual, mesActual, 1);
    const ultimoDiadelMes = ultimoDiaDelMes(añoActual, mesActual);
  
    
  
    const ventasFiltradas = data.results.filter(venta => {
      const fechaInstalacionStr = venta.fecha_instalacion;
      const [fecha, hora] = fechaInstalacionStr.split(' ');
      const [dia, mes, año] = fecha.split('/');
      const ventaFecha = new Date(año, mes - 1, dia, ...hora.split(':'));
  
      if (venta.id_servicio === 3219 || venta.id_servicio === 3218 || venta.id_servicio === 3226) {
        return false;
        
      }
  
      const filtroAnualActual = estadosSeleccionados.includes("Anual") &&
        (ventaFecha >= primerDiaAñoActual && ventaFecha <= ultimoDiaAñoActual);
      const filtroAnualPasado = estadosSeleccionados.includes("Año Pasado") &&
        (ventaFecha >= primerDiaAñoPasado && ventaFecha <= ultimoDiaAñoPasado);
      const filtroMensual = estadosSeleccionados.includes("Mensual") &&
        (ventaFecha >= primerDiadelMes && ventaFecha <= ultimoDiadelMes);
  
      const filtroMeses = filtroFechas.some(({ nombre, inicio, fin }) =>
        estadosSeleccionados.includes(nombre) && (ventaFecha >= inicio && ventaFecha <= fin)
      );
  
      // const tipoFiltrado = estadosSeleccionadosType.includes("Todos") ||
      //   estadosSeleccionadosType.includes(venta.informacion_adicional);
  
      const vendedoresPermitidos = ["Juan", "Barbara", "Eduardo", "Ysvet", "Nelsy", "Alejandro", "Cesar", "Hermary"];
const vendedorFiltrado = Vendedores.includes("Vendedores/Todos")
  ? vendedoresPermitidos.includes(venta.usuario_router_wifi)
  : Vendedores.includes(venta.usuario_router_wifi);
  
      return (filtroAnualActual || filtroAnualPasado || filtroMensual || filtroMeses)  && vendedorFiltrado;
    });
   
    const dataFiltradaConTipoDeServicio = ventasFiltradas.reduce((acc, curr) => {
      if (!acc[curr.localidad]) {
        acc[curr.localidad] = {
          cantidadClientes: 1,
          costodeinstalacionTotales: parseFloat(curr.costo_instalacion) || 0,
          costodePlanesTotales: parseFloat(curr.precio_plan) || 0,
          tipo: curr.informacion_adicional,
        };
      } else {
        acc[curr.localidad].cantidadClientes++;
        acc[curr.localidad].costodeinstalacionTotales += parseFloat(curr.costo_instalacion) || 0;
        acc[curr.localidad].costodePlanesTotales += parseFloat(curr.precio_plan) || 0;
      }
      return acc;
    }, {});
  
    const urbanismosTotalesArray = Object.keys(dataFiltradaConTipoDeServicio).map(
      localidad => ({
        urbanismo: localidad,
        ...dataFiltradaConTipoDeServicio[localidad],
      })
    );
  
    urbanismosTotalesArray.sort((a, b) => b.cantidadClientes - a.cantidadClientes);
  
    const topUrbanismosCalculados = urbanismosTotalesArray.slice(TopUrb[0], TopUrb[1]);
    setVentasdelanoactual(topUrbanismosCalculados);
  
    const ingresosTotalesCalculados = urbanismosTotalesArray.reduce(
      (acc, curr) => acc + curr.costodeinstalacionTotales,
      0
    );
    const totalClientes = urbanismosTotalesArray.reduce(
      (acc, curr) => acc + curr.cantidadClientes,
      0
    );
  
    const sumatoriaPreciosCalculada = urbanismosTotalesArray.reduce(
      (acc, curr) => acc + curr.costodePlanesTotales,
      0
    );
  
    setTotalIngresos(ingresosTotalesCalculados);
    setTotalClientesGlobal(totalClientes);
    SetsumatoriaPrecios(sumatoriaPreciosCalculada);
  }, [data, TopUrb, estadosSeleccionados,  Vendedores]);
  
  

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="ventas-container">
      <LogoTitulo />
      {showPasswordState ? (
        <div className="login-section">
          <h1>Inicia Sesión</h1>
          <LogingForm />
        </div>
      ) : (
        <div className="ventas-content">
          <DropdownMenu />
          <PageNav />

          <div className="selectors-container">
            <select
              id="estadoSelect"
              size="5"
              multiple
              value={estadosSeleccionados}
              onChange={(event) => {
                const selectedOptions = Array.from(
                  event.target.selectedOptions,
                  (option) => option.value
                );
                setEstadosSeleccionados(selectedOptions);
              }}
              className="estado-select"
            >
              <option value="Anual">Ventas del año 2024</option>
              <option value="Mayo">Mayo</option>
              <option value="Junio">Junio</option>
              <option value="Julio">Julio</option>
            </select>

            <select
  id="Vendedores"
  size="5"
  multiple
  value={Vendedores}
  onChange={(event) => {
    const vendedoresSeleccionados = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setVendedores(vendedoresSeleccionados);
  }}
  className="estado-select"
>
  <option value="Vendedores/Todos">Vendedores/Todos</option>
  <option value="Juan">Juan</option>
  <option value="Barbara">Barbara</option>
  <option value="Eduardo">Eduardo</option>
  <option value="Ysvet">Ysvet</option>
  <option value="Nelsy">Nelsy</option>
  <option value="Alejandro">Alejandro</option>
  <option value="Cesar">Cesar</option>
  <option value="Hermary">Hermary</option>
</select>

          </div>
          
          <div className="buttons-container">
            <button className="buttonIngreso">
              Total de Ventas: {totalClientesGlobal}
            </button>
            <button className="buttonIngreso marginbutton">
              Recurrente Ingresos de {estadosSeleccionados.join(", ")}:{" "}
              {sumatoriaPrecios.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
              })}$
            </button>

            <button className="buttonIngreso marginbutton">
              Total de Ingresos por instalación:{" "}
              {totalIngresos.toLocaleString("es-ES", {
                minimumFractionDigits: 2,
              })}$
            </button>
          </div>

          <UrbanismoList urbanismos={Ventasdelanoactual} />
        </div>
      )}
    </div>
  );
}

function UrbanismoList({ urbanismos }) {
  urbanismos.sort((a, b) => b.costodeinstalacionTotales - a.costodeinstalacionTotales);
  console.log(urbanismos

  )
  return (
    <ul className="urbanismo-list">
      {urbanismos.map((urbanismo, index) => (
        <li key={index} className="urbanismo-item encabezados contenedor">
          <span>
            <strong>{index + 1} - {urbanismo.urbanismo}</strong>
          </span>
          <br />
          <div className="encabezados">
            <span>
              <strong>Cantidad de Ventas:</strong> {urbanismo.cantidadClientes}
            </span>
            <br />
            
            <span>
              <strong>Ingreso Instalacion:</strong>{" "}
              {isNaN(urbanismo.costodeinstalacionTotales) ? 'No disponible' : Math.round(urbanismo.costodeinstalacionTotales)}$
            
            </span>
             
          </div>
          <br />
          <div>
            <span>
              <strong>Ingreso Recurrente:</strong>{" "}
              {isNaN(urbanismo.costodePlanesTotales) ? 'No disponible' : urbanismo.costodePlanesTotales.toFixed(2)}$
            </span>
          </div>
          <br />
        </li>
      ))}
    </ul>
  );
}

export default Ventascalle;
