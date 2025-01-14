import React, { useContext } from "react";

import LogingForm from "../../Componentes/LogingForm";
import PageNav from "../../Componentes/PageNav";
import LogoTitulo from "../../Componentes/LogoTitulo";
import { PasswordContext } from "../../PasswordContext/PasswordContext";
import DropdownMenu from "../../Componentes/DropdownMenu";

function Loging() {
  const { showPasswordState, isAuthenticated, role } = useContext(PasswordContext);

  if (!showPasswordState) {
    // Si el usuario está autenticado pero no tiene permisos adecuados, muestra "No autorizado"
    if (isAuthenticated && role !== "admin" && role !== "ventas") {
      return (
        <div>
          No autorizado
          <DropdownMenu />
          <LogingForm />
        </div>
      );
    }
  }

  return (
    <div>
      <LogoTitulo />
      {showPasswordState ? (
        <LogingForm />
      ) : (
        <>
          <PageNav />
          <DropdownMenu />
        </>
      )}
    </div>
  );
}

export default Loging;
