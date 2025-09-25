import DropdownMenu from "../../Componentes/DropdownMenu";
import PageNav from "../../Componentes/PageNav";
import "./PageNotFound.css"; // Asegúrate de que este CSS esté actualizado

function PageNotFound() {
  return (
    <div className="page-not-found">
      <DropdownMenu />
{/* Contenedor para el logo y el texto "Realizado por" */}
      <div className="report-header-info">
        <img 
          src="./logo_sgf.png" // ¡IMPORTANTE! Reemplaza con la URL de tu logo
          alt="Logo de la empresa" 
          className="company-logo" 
        />
        <p className="author-text">Realizado por Ing. Jesus Vasquez</p>
      </div>
      <PageNav />
      
      

      {/* Contenedor para los informes de Power BI con un diseño responsivo */}
      <div className="report-container">
        <iframe 
          title="Ingresos diarios" // El primer informe en tu imagen
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/reportEmbed?reportId=565040ba-9c50-41cb-9f9a-0a658efff269&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0" 
          allowFullScreen={true}
          style={{marginBottom: '20px'}}
        ></iframe>
        
        <iframe 
          title="activos por dia" // El segundo informe en tu imagen
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/reportEmbed?reportId=cc94b1f7-a31c-4bd9-b22a-79a0c6d42a5b&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0" 
          allowFullScreen={true}
        ></iframe>
      </div>
      
    </div>
  );
}

export default PageNotFound;