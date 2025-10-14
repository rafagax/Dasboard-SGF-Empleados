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





        {/* Nuevo informe agregado al inicio */}
        <iframe 
          title="indicadores con api"
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/reportEmbed?reportId=78f2bab4-9a26-4984-ba96-87a16624d95a&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0" 
          allowFullScreen={true}
          style={{marginBottom: '20px'}}
        ></iframe>

       

        <iframe 
          title="Ingresos diarios" // El primer informe original
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/reportEmbed?reportId=565040ba-9c50-41cb-9f9a-0a658efff269&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0" 
          allowFullScreen={true}
          style={{marginBottom: '20px'}}
        ></iframe>
        
        <iframe 
          title="activos por dia" // El segundo informe original
          width="100%" 
          height="600" 
          src="https://app.powerbi.com/reportEmbed?reportId=949df888-de93-4f99-897e-d230226bbfb8&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0" 
          allowFullScreen={true}
        ></iframe>

 {/* Nuevo iframe insertado: VENTAS */}
        <iframe 
          title="ventas Drive" 
          width="100%" 
          height="600"
          src="https://app.powerbi.com/reportEmbed?reportId=5d6e8d49-786d-451e-826d-2e75442d8faa&autoAuth=true&ctid=f4c24cea-686c-4674-8805-f12b558b2133"
          frameBorder="0" 
          allowFullScreen={true}
          style={{marginBottom: '20px'}}
        ></iframe>

      </div>
    </div>
  );
}

export default PageNotFound;

