import React, { useContext } from 'react';
import { PasswordContext } from './../PasswordContext/PasswordContext';

const Api = () => {
  const { data, isLoading, error } = useContext(PasswordContext);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalClientes = data && data.count ? data.count : 0;

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <p>Total de Clientes: {totalClientes}</p>
      {data && data.results && (
        <ul>
          {data.results.map(item => (
            <li key={item.id}>
              <p>ID de Servicio: {item.id}</p>
              <p>Nombre: {item.client_name}</p>
              <p>Cédula: {item.client_identification}</p>
              <p>Número de Teléfono: {item.client_mobile}</p>
              <p>Tipo de Cliente: {item.client_type_name}</p>
              <p>Estado: {item.status_name}</p>
              <p>Dirección: {item.address}</p>
              {/* Agrega más campos según sea necesario */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Api;


