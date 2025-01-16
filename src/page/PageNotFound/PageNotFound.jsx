import DropdownMenu from "../../Componentes/DropdownMenu";
import PageNav from "../../Componentes/PageNav";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <DropdownMenu />
      <PageNav />
      <img
        src="https://pinguinodigital.com/wp-content/uploads/2020/08/pagina-en-construcci%C3%B3n4.png"
        alt="Page Under Construction"
        className="construction-image"
      />
      <p>Page Not Found or Page Under Construction</p>
    </div>
  );
}
export default PageNotFound;
