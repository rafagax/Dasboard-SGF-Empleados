import React, { createContext, useState, useEffect } from "react";

const PasswordContext = createContext();

function PasswordProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordState, setShowPasswordState] = useState(true);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Aquí está setIsAuthenticated
  const token = process.env.REACT_APP_TOKEN_KEY;
  const api = process.env.REACT_APP_API;

  const users = [
    { email: process.env.REACT_APP_USER1_EMAIL, password: process.env.REACT_APP_USER1_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER2_EMAIL, password: process.env.REACT_APP_USER2_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER3_EMAIL, password: process.env.REACT_APP_USER3_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER4_EMAIL, password: process.env.REACT_APP_USER4_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER5_EMAIL, password: process.env.REACT_APP_USER5_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER6_EMAIL, password: process.env.REACT_APP_USER6_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER7_EMAIL, password: process.env.REACT_APP_USER7_PASSWORD, role: "ventas" },
    { email: process.env.REACT_APP_USER8_EMAIL, password: process.env.REACT_APP_USER8_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER9_EMAIL, password: process.env.REACT_APP_USER9_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER10_EMAIL, password: process.env.REACT_APP_USER10_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER11_EMAIL, password: process.env.REACT_APP_USER11_PASSWORD, role: "admin" },
    { email: process.env.REACT_APP_USER12_EMAIL, password: process.env.REACT_APP_USER11_PASSWORD, role: "ventas" },
    { email: process.env.REACT_APP_USER13_EMAIL, password: process.env.REACT_APP_USER11_PASSWORD, role: "admin" },
  ];

  const handleLoginClick = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setRole(user.role);
      setShowPasswordState(false);
      setIsAuthenticated(true); // Establecer como autenticado si el usuario es válido
    } else {
      setPassword("");
      setError("Credenciales incorrectas");
      setIsAuthenticated(false); // Establecer como no autenticado si las credenciales son incorrectas
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log("URL:", api);
        // console.log("Token:", token);

        // const response = await fetch(api, {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // });

        // if (!response.ok) {
        //   throw new Error(`Error al cargar los datos: ${response.statusText}`);
        // }

        // const jsonData = await response.json();
        //               **            //
        // aqui en vez de usar la api usare datos fiticios ya que es informacion privada de la empresa//
        const jsonData =  {
          count: 300,
          results: [
            {
              "id": 7388,
              "client_name": "BBBBBBBBBBBB CCCCCCCCCCCCC",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7387,
              "client_name": "BBBBBBBBBBBB CCCCCCCCCCCCC",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7386,
              "client_name": "BBBBBBBBBBBB CCCCCCCCCCCCC",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7385,
              "client_name": "LEGAL NAME LEGAL APELLIDO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7384,
              "client_name": "LEGAL NAME LEGAL APELLIDO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7383,
              "client_name": "ARGEN PRUEBA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7382,
              "client_name": "PRUEBA POST",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "La Arboleda",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7381,
              "client_name": "PRUEBA POST",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "La Arboleda",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7380,
              "client_name": "PRUEBA POST",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "La Arboleda",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7379,
              "client_name": "ARGENIS DIAZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Jabillar",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7378,
              "client_name": "PRUEBA POST",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "La Arboleda",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7377,
              "client_name": "LUISA HERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7376,
              "client_name": "PRUEBA POST",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "La Arboleda",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7375,
              "client_name": "DALLANA COROMOTO AGUILAR LOYO",
              "client_type_name": "EMPLEADO",
              "status_name": "Por instalar",
              "cycle": null,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 78,
                "name": "Plan empleado 80MB",
                "cost": "0.00",
                "code": "FO-80M",
                "profile": "80M/80M"
              }
            },
            {
              "id": 7374,
              "client_name": "RUFO JEAN PAUL MORALES TERAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Magdalena",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7373,
              "client_name": "DANIELA ALICIA PEREZ SEGOVIA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7372,
              "client_name": "MIGUELINA GARCIA DE JASPE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7371,
              "client_name": "HECTOR ANTONIO GUZMAN ACHE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Callejon Los Jabillos",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7370,
              "client_name": "MANOLO ALEXANDER CORREA HERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7369,
              "client_name": "KERINYER DAYERLIN SANCHEZ FANEITE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7368,
              "client_name": "EGILDA RAMONA CERMEÑO DE VEGAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7367,
              "client_name": "MERY COROMOTO PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Macarena",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7366,
              "client_name": "ANDRISMAR ANDREINA OCHOA ESCORCHA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "El Cambur",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7365,
              "client_name": "EVELYN JOSEFINA GARCIA REYES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados de Cafetal",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7364,
              "client_name": "FILADELFO JAVIER CARRUYO CHACIN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Marina Caribe",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7363,
              "client_name": "PRUEBA FREDDY FREDDY",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Calle Peñalver",
              "plan": {
                "id": 96,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "9.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7362,
              "client_name": "INSTITUTO DE VIVIENDA Y HÁBITAT",
              "client_type_name": "INTERCAMBIO",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 83,
                "name": "RECURRENTE INSTITUCIONAL 80M",
                "cost": "0.00",
                "code": "FO-R80",
                "profile": "80M/80M"
              }
            },
            {
              "id": 7361,
              "client_name": "MILANYER NATACHA ALFONZO ALFONZO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Manirito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7360,
              "client_name": "JESUS DANIEL ALBARRAN CARDENAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Pausado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Villa De San Jose",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7359,
              "client_name": "ESTHEFANY ROSMARY ESPINOZA ROSADO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7358,
              "client_name": "BARBARA JOSE VICTORIA MEDINA PINTO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Terrazas de Paya",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7357,
              "client_name": "FERNANDO SIMON ALVAREZ VILLAMIZAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Canaima",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7356,
              "client_name": "RAFAEL JOSE THEIS CONTRERAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "San Pablo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7355,
              "client_name": "OMAR ALEXANDER REQUENA OLMOS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7354,
              "client_name": "YUBELIS JOSEFINA MENDOZA OLIVAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7353,
              "client_name": "JESSICA ANDREINA HENRIQUEZ MORIN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7352,
              "client_name": "JHONNY OSWALDO PERNIA GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Bicentenario",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7351,
              "client_name": "KLEBERSON ARQUIMEDES MEDINA ZAPATA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7350,
              "client_name": "VICKY ALEXANDRA BRITO ALFONZO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "El Cambur",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7349,
              "client_name": "ODALYS ANTONIETA TOVAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7348,
              "client_name": "ANA ESTHER BECERRA ROMERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7347,
              "client_name": "ANNY BISKEY YANEZ RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Luz y Vida",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7346,
              "client_name": "ANA ESTHER BECERRA ROMERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7345,
              "client_name": "JOSELINE YINSAUMMYY RIVAS LOBO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Valle Fresco",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7344,
              "client_name": "ANGELA MARIA SUAREZ CALDERON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7343,
              "client_name": "EVELIN DAMARIS JIMENEZ MORENO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7342,
              "client_name": "DEILY YSMENIA MEDINA LINARES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados II",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7341,
              "client_name": "ANAIS ANDREINA EUGENIO SANCHEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "El Naranjal",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7340,
              "client_name": "YESENIA MARGARITA HERRERA LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Paraguatan",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7339,
              "client_name": "JOSE DIONICIO RIVAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7338,
              "client_name": "MOISES ALEJANDRO GONZALEZ NAVAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7337,
              "client_name": "YELISMAR DEL VALLE VIRGUEZ MELENDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7336,
              "client_name": "SILOET MARIA TOVAR PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7335,
              "client_name": "GENESIS ANDREINA GARCIA MURGUEZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7334,
              "client_name": "TERESA DE JESUS SEQUERA MENDOZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Las Rurales",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7333,
              "client_name": "ANGEL GABRIEL ALVARES SIVIRA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7332,
              "client_name": "CHRISTIAN NAILIBETH MAIRUVITH RAIVELKS CASTILLO PARRA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7331,
              "client_name": "BARBARA YAQUELIN AREVALO FARFAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Saman Tarazonero I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7330,
              "client_name": "JACKSON ANDRES GONZALEZ AVENDAÑO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7329,
              "client_name": "ESTEFANI DANIELA FERNANDEZ  POVEDA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Guzman",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7328,
              "client_name": "WILMAR  YECENIA PALACIOS ARENA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Las Rurales",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7327,
              "client_name": "LAURIANA YERALDINE OJEDA CENTENO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Callejon Lim",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7326,
              "client_name": "HENRY GARCIA JARAMILLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7325,
              "client_name": "YORMAN JOHAN MOSQUEDA FAJARDO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7324,
              "client_name": "MARIA ARGELYS CARRILLO MECIA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7323,
              "client_name": "JHON WILSON BETANCOURT TOLEDO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7322,
              "client_name": "ANDREINA ESTEFANI ARTEAGA PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7321,
              "client_name": "JULIO RAFAEL LEONES SILVA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7320,
              "client_name": "ELIANI JACKELINE LOPEZ MORALES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Palma Real",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7319,
              "client_name": "REYMING ESTEBAN MACHADO MARTINEZ",
              "client_type_name": "EMPLEADO",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Palmeras II",
              "plan": {
                "id": 78,
                "name": "Plan empleado 80MB",
                "cost": "0.00",
                "code": "FO-80M",
                "profile": "80M/80M"
              }
            },
            {
              "id": 7318,
              "client_name": "AUSENSIO HUMBERTO LUIS PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7317,
              "client_name": "GABRIELA SARAY LINARES YROBA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Palmeras II",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7316,
              "client_name": "YULITZA DEL CARMEN VALLERA QUINTERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7315,
              "client_name": "ALBERTA FIDENCIA GOMEZ DE MARIN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7314,
              "client_name": "FELIPE ANTONIO GIMENEZ SEQUERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7313,
              "client_name": "BRYANT JOSE REYES AVILA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 92,
                "name": "prueba",
                "cost": "0.00",
                "code": "p",
                "profile": "0Mbps/0Mbps"
              }
            },
            {
              "id": 7312,
              "client_name": "LUZ MARBELIA DA ROCHA ACOSTA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Callejon Los Jabillos",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7311,
              "client_name": "MEURY BRENNY RIVERO RICO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7310,
              "client_name": "AURELIO NICANOR HAYA AJA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7309,
              "client_name": "CRISTINA LIZMAR GUEVARA SALAZAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Valle Fresco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7308,
              "client_name": "JOSE JAIME DE LOS SANTOS DELGADO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "1ro de Mayo Sur",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7307,
              "client_name": "YOSEANNELIE ARIANA ZAMBRANO MORILLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7306,
              "client_name": "ROSBEL DEL VALLE JIMENEZ MORA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7305,
              "client_name": "YOKSELIN KARINA VASQUEZ REYES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7304,
              "client_name": "MARIBEL MARGARITA CARMONA TOVAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7303,
              "client_name": "FREDDY EMILIO OROPEZA REYES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Paraguatan",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7302,
              "client_name": "CARLOS ALFREDO CARRERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "El Naranjal",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7301,
              "client_name": "JUAN CARLOS BRICEÑO MORENO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Canaima",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7300,
              "client_name": "JOHANDER ALEXIS DUARTE  VILLAMIZAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Las Rurales",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7299,
              "client_name": "LILIANA DEL CARMEN GUERRERO CEGARRA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Palma Real",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7298,
              "client_name": "MERCEDES CAROLINA CARABALLO IZAGUIRRE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Taguapire",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7297,
              "client_name": "YENIFER VICTORIA MONTIEL TIRRE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7296,
              "client_name": "RICARDO SUAREZ JIMENEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Simon Bolivar",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7295,
              "client_name": "CARLOS ALBERTO SORIA ROCHE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 21,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7294,
              "client_name": "SATURNINA YUBISNARDA MARQUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7293,
              "client_name": "RICHARD IVAN GUTIERREZ ZAMBRANO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7292,
              "client_name": "DULCE KARINA MUÑEZ ORELLANA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Luz y Vida",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7291,
              "client_name": "YENNI CAROLINA FLORES PEROZO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7290,
              "client_name": "LEIVIS JOSEFINA HERNANDEZ HIDALGO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Paraguatan",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7289,
              "client_name": "ANTONIO JOSE PARRA AGUIRRE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Valle Verde",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7288,
              "client_name": "LOURDES DEL ROSARIO MARTINEZ DE COLMENARES",
              "client_type_name": "GRATIS",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": false,
              "sector_name": "Valle lindo",
              "plan": {
                "id": 86,
                "name": "PLAN RECURRENTE 80M GRATIS",
                "cost": "0.00",
                "code": "FO-G80",
                "profile": "80M/80M"
              }
            },
            {
              "id": 7287,
              "client_name": "YESENIA YELISBETH LANDAETA NIEVES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Vallecito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7286,
              "client_name": "EUDES JESUS RENGIFO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7285,
              "client_name": "SANTIAGO ALBERTO CASTRO SALAZAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7284,
              "client_name": "HILDA JAMILET SALAZAR BELTRAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Casona II",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7283,
              "client_name": "GUZMAN ENRIQUE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7282,
              "client_name": "YUSENKI MAYERLIN MEDINA LUBO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Payita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7281,
              "client_name": "JESUS ALBERTO DANELLO BRUCE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Vallecito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7280,
              "client_name": "YERALDIN CAROLINA MEJIAS RANGEL",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Palma Real",
              "plan": {
                "id": 16,
                "name": "RECURRENTE RESIDENCIAL PLAN 650M",
                "cost": "48.00",
                "code": "FOR650",
                "profile": "650M/650M"
              }
            },
            {
              "id": 7279,
              "client_name": "LEANDRO JOSE PEREZ CASTILLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7278,
              "client_name": "YARGELIS JOSEFINA CHOURIO BETANCOURT",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados III",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7277,
              "client_name": "KATHERINE DEL AMPARO PAEZ HERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7276,
              "client_name": "CESAR ENRIQUE LINARES URBINA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Brisas de Paya",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7275,
              "client_name": "EVELIS KARINA BARRETO HERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Julia",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7274,
              "client_name": "JONNY RIVIER SAAVEDRA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Los Hornos",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7273,
              "client_name": "JHON RAFAEL CRISTOBAL CONTRERAS LOVERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "El Bosque",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7272,
              "client_name": "JUAN MANUEL CORRO QUINTERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7271,
              "client_name": "JHON ERICK CORRO BRICEÑO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7270,
              "client_name": "JUAN ANTONIO ESPINOZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7269,
              "client_name": "YONDIS ALEXANDER CABRERA LARA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7268,
              "client_name": "CARMEN TERESA DIAZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados III",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7267,
              "client_name": "JULEXI BETSABE REYES PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Las Rurales",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7266,
              "client_name": "CARMEN ADELINA RAMOS UGARTE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Payita",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7265,
              "client_name": "YERKIS GREGORIA MELENDEZ CORREA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7264,
              "client_name": "MARTHA CAROLINA ESTRADA TABLANTE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7263,
              "client_name": "ROSA COROMOTO TARAZONA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7262,
              "client_name": "ZULAY COROMOTO AVILA AULAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7261,
              "client_name": "JOSE ALEJANDRO REA CASTILLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7260,
              "client_name": "JULIO CESAR PEÑA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Vallecito",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7259,
              "client_name": "BELITZA MADELEY BORGES PALACIOS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7258,
              "client_name": "HERACLIO JOSE RAMON MARTINEZ ACOSTA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7257,
              "client_name": "MARIA EMILIA MOY CARABALLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7256,
              "client_name": "ALVARO AMEIJENDA SANTANA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7255,
              "client_name": "LEOANGELYS EMIBEL SEIJAS MORENO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Payita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7254,
              "client_name": "JESUS EDUARDO OJEDA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7253,
              "client_name": "YENNIBE COROMOTO PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7252,
              "client_name": "JOSE ANTONIO TESORERO NAVARRO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7251,
              "client_name": "ANDRU ISAI CALDERON RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Valle Fresco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7250,
              "client_name": "AMERICO KALINHOFF DIAZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7249,
              "client_name": "POMPEYO HAYA PONSON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7248,
              "client_name": "JOHELY DEL CARMEN GARCIA COLMENAREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7247,
              "client_name": "GUSTAVO ENRIQUE CONTRERAS ULLOA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7246,
              "client_name": "YONNY RAMON PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7245,
              "client_name": "CARLOS JESUS GOMEZ BLANCO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Guzman",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7244,
              "client_name": "JAIRO ARNEDO ROMERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7243,
              "client_name": "MANUEL ANTONIO TESORERO NAVARRO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7242,
              "client_name": "CRISTIAN VALERIO RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 21,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7241,
              "client_name": "DIANA OLIMAR LAYA MARQUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7240,
              "client_name": "ANGELINA ROSA PACHECO LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Paraguatan",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7239,
              "client_name": "CARMEN ALICIA PERDOMO GUTIERREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Sur",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7238,
              "client_name": "FRANK ANIBAL ALAMO GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7237,
              "client_name": "MICHELLE ALEJANDRA MELENDEZ RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Valle Fresco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7236,
              "client_name": "YASMELYS NAKARY GARCIA BELLORIN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7235,
              "client_name": "YUMILETH SINAI COLON TORRES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7234,
              "client_name": "DANIELA SOFIA RODRIGUEZ ALFONZO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Manirito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7233,
              "client_name": "VICTOR SEGUNDO MENDEZ PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "El Naranjal",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7232,
              "client_name": "DENNIS ANTONIO HERRERA GUZMAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7231,
              "client_name": "ENMY CARELYS CASTILLO MORALES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7230,
              "client_name": "MARIBEL PIMENTEL MARTINEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7229,
              "client_name": "VANESSA CAROLINA CEDEÑO MENDOZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Taguapire",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7228,
              "client_name": "ROSA MARIA FIGUEREDO ARTEAGA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7227,
              "client_name": "NORA JOSEFINA PICHARDO MONSALVE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7226,
              "client_name": "FERNANDO GODOY GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Vallecito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7225,
              "client_name": "GLEIDY CAROLINA FLORES PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7224,
              "client_name": "RAMON EDUARDO SOTELDO LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guanarito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7223,
              "client_name": "NORELIS CAROLINA LUCERO MARTINEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Sur",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7222,
              "client_name": "BEATRIZ ROSALBA FLORES BELLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7221,
              "client_name": "MAYELIN THAYS GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Durpa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7220,
              "client_name": "JULENNY DEL CARMEN CHIRINOS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7219,
              "client_name": "WILLIAMS JOSE MEDINA TANCO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Bicentenario",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7218,
              "client_name": "CALEIXIS MARIELENA LOPEZ GARCIA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Paya Abajo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7217,
              "client_name": "ELIZABETH CAROLINA FERRINI ARRIECHE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7216,
              "client_name": "NELSON ALBERTO MARTINEZ RODIL",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7215,
              "client_name": "HENRY RAFAEL BLANCO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7214,
              "client_name": "GABRIELA VALENTINA CABALLERO PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7213,
              "client_name": "RUSMARY YUSLIET BLANCO LUNA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7212,
              "client_name": "DALILA COROMOTO CHACON RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Canaima",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7211,
              "client_name": "BALBINA YSABEL ROSALES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Bicentenario",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7210,
              "client_name": "MIRIAN JOSEFINA OSAL",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Guzman",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7209,
              "client_name": "LISSETH CAROLINA GAMBOA NIEVES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7208,
              "client_name": "FELIX FERNANDO CABRERA CORTEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7207,
              "client_name": "NELY JOSEFINA ARZOLA DE STRAUSS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7206,
              "client_name": "YULI YANIBEL BERNAL REYES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7205,
              "client_name": "GUSTAVO ALBERTO MARINO CABELLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7204,
              "client_name": "YANET ARELYS VILLEGAS FERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7203,
              "client_name": "YESICA YESENIA CASTRO MORENO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7202,
              "client_name": "MAURA LEONIDES RODRIGUEZ OROPEZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7201,
              "client_name": "DAVID EDUARDO RISSO MARTINEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7200,
              "client_name": "ALEYDA JOSEFINA CISNEROS DE CALDERON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7199,
              "client_name": "HOMER ANTONIO RAMIREZ CELIS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7198,
              "client_name": "ORIANA JENIREE CARRILLO GARCIA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Valle Verde",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7197,
              "client_name": "ALFREDO JOSE ALEJANDRO VELIZ PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Canaima",
              "plan": {
                "id": 8,
                "name": "RECURRENTE RESIDENCIAL PLAN 620M",
                "cost": "43.00",
                "code": "FOR620",
                "profile": "620M/620M"
              }
            },
            {
              "id": 7196,
              "client_name": "JHOALFRE ELI RODRIGUEZ RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Guayabita",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7195,
              "client_name": "IRIS MARGARITA SALAS SANCHEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7194,
              "client_name": "LUIS ENRIQUE MARTINEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7193,
              "client_name": "MARIA DEL VALLE RONDON ESPIDEA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7192,
              "client_name": "MARLIN YASNELLY MIJARES ACHE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7191,
              "client_name": "MIRIAN JOSEFINA LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Luz y Vida",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7190,
              "client_name": "YEIDIMAR ALEXANDRA PALMA YANEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7189,
              "client_name": "FRANKLIN DE JESUS HERNANDEZ BLANCO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "1ro de Mayo Norte",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7188,
              "client_name": "PEDRO REINALDO LEAL SANCHEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "El Naranjal",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7187,
              "client_name": "MARIA ZENAIDA LUNA DE ROJAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Vallecito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7186,
              "client_name": "MARIA EUGENIA MARQUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7185,
              "client_name": "GEIVYS ALFONSO PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Casona II",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7184,
              "client_name": "NEUDI LISNEYDI FLORES AVILA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Sector los Mangos",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7183,
              "client_name": "BEATRIZ ELENA RONDON DE RODRIGUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7182,
              "client_name": "AIDA DEL CARMEN MOLINA MOLINA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7181,
              "client_name": "NELIDA JOSEFINA GRATEROL RIVAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7180,
              "client_name": "JEFRESON YOSSUNE MEJIAS PINEDA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "El Macaro",
              "plan": {
                "id": 8,
                "name": "RECURRENTE RESIDENCIAL PLAN 620M",
                "cost": "43.00",
                "code": "FOR620",
                "profile": "620M/620M"
              }
            },
            {
              "id": 7179,
              "client_name": "MILAGROS COROMOTO COLINA DE ESCUDERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7178,
              "client_name": "ANDELEXMAR NAZARETH SOLORZANO HERRERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7177,
              "client_name": "JEAN SNEIDHER PEREZ GUARACO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Brisas de Paya",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7176,
              "client_name": "TONY JOSE MAYORA ACOSTA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7175,
              "client_name": "ENSLER GLADIELIZ FRANCO LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Vallecito",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7174,
              "client_name": "ALBA MARINA LOPEZ CASTRO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Ezequiel Zamora",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7173,
              "client_name": "ZHORENI YAHIR VIELMA MOLINA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7172,
              "client_name": "GONZALO ANTONIO REQUENA SOLIS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 97,
                "name": "RECURRENTE RESIDENCIAL PLAN 10M [FOR10]",
                "cost": "18.00",
                "code": "FOR10",
                "profile": "10Mbps/10Mbps"
              }
            },
            {
              "id": 7171,
              "client_name": "JESUS ALBERTO ALFONZO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7170,
              "client_name": "JEAN GABRIEL YEPEZ GRANADILLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7169,
              "client_name": "MANUEL ANTONIO ALFONZO SILVA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7168,
              "client_name": "JULIO CESAR GARCIA VALERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Payita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7167,
              "client_name": "DINA MARIA RODRIGUEZ GAMBOA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7166,
              "client_name": "LORENA DEL MAR MOROCOIMA PINEDA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7165,
              "client_name": "MANUEL FELIPE CAMERO MENDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7164,
              "client_name": "ROSA ADELFINA JAIMES CASTRO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7163,
              "client_name": "RICHARD HUMBERTO CAGUANA SANCHEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7162,
              "client_name": "CARMEN DEL VALLE GUZMAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7161,
              "client_name": "FLORENCIO ANTONIO FERNANDEZ PEÑALVER",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Marcelota",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7160,
              "client_name": "DULCE MARIA GUTIERREZ MORA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7159,
              "client_name": "RICARDO JOSE OZAL ROMERO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Guayabita",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7158,
              "client_name": "AMANDA YSABEL HERRERA RIVAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7157,
              "client_name": "RAFAEL SIMON PAEZ ALVARADO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7156,
              "client_name": "KENIA CAROLINA HIDALGO RONDON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7155,
              "client_name": "IRIS MARGARITA SALAS SANCHEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7154,
              "client_name": "YANEIBY YAMILETH AGUIRRE LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7153,
              "client_name": "BEDO CARMEN URBANO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Huerta Los Pajaros",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7152,
              "client_name": "MARIAM BETZABET GONZALEZ HERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Las Rurales",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7151,
              "client_name": "RUTH REBECA CRESPO MORALES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Dios Es Mi Refugio",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7150,
              "client_name": "PAULA MERCEDES BRICEÑO DE MIJARES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7149,
              "client_name": "STEFANY GABRIELA JASPE SERRANO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "La Orquidea",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7148,
              "client_name": "YONAIKER JOSE CHACON COLMENARES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Simon Bolivar",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7147,
              "client_name": "BARBARA AISEL GONZALEZ URBINA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7146,
              "client_name": "YOLEIDYS ISBETH MORALES PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Simon Bolivar",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7145,
              "client_name": "JANETTE  JOSEFINA HERNANDEZ PEREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Simon Bolivar",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7144,
              "client_name": "JACQUELIN CASTILLO MARQUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7143,
              "client_name": "ENDIMAR DAYELIS MORILLO OBREGON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 15,
              "migrate": true,
              "sector_name": "La Casona I Edificios",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7142,
              "client_name": "CELIA SILVA ABILA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7141,
              "client_name": "FREDDY ASDRUBAL PIÑANGO ACOSTA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Vallecito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7140,
              "client_name": "OSWAYDA ALEJANDRA GARBOZA FARFAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Ppal Paya",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7139,
              "client_name": "MARIA VALENTINA SEVILLA GUZMAN",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Betania",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7138,
              "client_name": "LUIS GABRIEL MIJARES ACOSTA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7137,
              "client_name": "YENNI ROSALIA SILVA MARTINEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Terrazas de Paya",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7136,
              "client_name": "FELIX JAVIER FLORES GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Casco de Turmero",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7135,
              "client_name": "KEILA JOSEFINA MEDINA OLIVO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "1ro de Mayo Sur",
              "plan": {
                "id": 21,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7134,
              "client_name": "DORYS ALEXANDRA ROA CHIRINOS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Leocolbo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7133,
              "client_name": "NEDDY  EGLISERIZ PEREZ LEON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7132,
              "client_name": "DORELYS DEL VALLE FRIAS PERALES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Sector los Mangos",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7131,
              "client_name": "ELIZABETH ANTONIA CHIRINOS ROMANO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Jabillar",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7130,
              "client_name": "YUSENKI MAYERLIN MEDINA LUBO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Tibisay Guevara",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7129,
              "client_name": "ALEXIS WLADIMIR MARTINEZ HEREDIA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7128,
              "client_name": "RONNY ALEXANDER FERRER CHOURIO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7127,
              "client_name": "CARLOS ALBERTO CHIRINO MORILLO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Por instalar",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Sector los Mangos",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7126,
              "client_name": "ANJHELY DAJHANA TOVAR TOVAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7125,
              "client_name": "EDI KARELYS RONDON BELOZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados III",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7124,
              "client_name": "ROSMERYS ANDREINA RAMOS CHOPITE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados III",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7123,
              "client_name": "CARMEN LUISA VALDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Bicentenario",
              "plan": {
                "id": 89,
                "name": "RECURRENTE RESIDENCIAL PLAN 600M",
                "cost": "40.00",
                "code": "FO-600",
                "profile": "600Mbps/600Mbps"
              }
            },
            {
              "id": 7122,
              "client_name": "GRISELDA MARIA CISNEROS BRAVO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7121,
              "client_name": "WENDYS ISBEL LUGO PUERTO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Sector los Mangos",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7120,
              "client_name": "JANETH IZTURIZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": true,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7119,
              "client_name": "OMAIRA SANCHEZ  DE MORALES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7118,
              "client_name": "LAURA KARINA IBARRA SANDOVAL",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Vista Hermosa",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7117,
              "client_name": "JENNIFER DEL CARMEN RENGEL HERRERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": true,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 21,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7116,
              "client_name": "BIANETT JOSEFINA AGUILAR DE GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados I",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7115,
              "client_name": "MARIA ROSSANA ALEZONES VELASQUEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Terrazas de Paya",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7114,
              "client_name": "ARNELIA NOGUERA HERNANDEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Prados III",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7113,
              "client_name": "JOSE LUIS VIANA ROJAS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Narayola II",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7112,
              "client_name": "NELSON JOSE LA ROSA HERRERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Brisas de Paya",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7111,
              "client_name": "YUMERIS COROMOTO MOREY",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7110,
              "client_name": "KIMBERLY JOHANNA MEDINA MATEUS",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7109,
              "client_name": "HENRY HERNANDEZ MATA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7108,
              "client_name": "HEYSEL RAFAEL ORTEGANA ALVARADO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7107,
              "client_name": "ROBERT ADRIAN CHACON BLANCO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Pantin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7106,
              "client_name": "YELI CAROLINA ALFONZO RONDON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7105,
              "client_name": "ANTONIO JOSE SANCHEZ ESCALONA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Guayabita",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7104,
              "client_name": "ANA KARINA LOPEZ PADRON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Cancelado",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7103,
              "client_name": "YOHAN ALEXANDER LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7102,
              "client_name": "VICTOR LUIS VIÑA REVERON",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7101,
              "client_name": "ANGELY ANTONIETA GALENO CANCINE",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Vallecito",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7100,
              "client_name": "ODALIS ALEXANDRA CABEZA MUÑOZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": true,
              "sector_name": "Rio Seco",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7099,
              "client_name": "ROSA MATILDE CASTILLO ALVAREZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Mata Caballo",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7098,
              "client_name": "NOHELIS JOSEFINA VASQUEZ MEDINA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Bicentenario",
              "plan": {
                "id": 3,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FOR450",
                "profile": "450M/450M"
              }
            },
            {
              "id": 7097,
              "client_name": "JORGE LUIS TOVAR GONZALEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 88,
                "name": "RECURRENTE RESIDENCIAL PLAN 450M",
                "cost": "35.00",
                "code": "FO-450",
                "profile": "450Mbps/450Mbps"
              }
            },
            {
              "id": 7096,
              "client_name": "CELIA MARGARITA ARMAS ALMENAR",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7095,
              "client_name": "FRANKLIN EDUARDO GARCIA HERRERA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7094,
              "client_name": "RAFAEL ALEJANDRO GARCIA CORRO",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7093,
              "client_name": "JUAN MANUEL GRANADILLO MENESES",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 15,
              "migrate": true,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7092,
              "client_name": "NESTOR ALBERTO ESPINOZA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7091,
              "client_name": "JESUS ENRIQUE CEBALLOS LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 21,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7090,
              "client_name": "ELIZABETH ALFONZO LOPEZ",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Suspendido",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            },
            {
              "id": 7089,
              "client_name": "VLADIMIR JOSE MATOS CORDOBA",
              "client_type_name": "RESIDENCIAL",
              "status_name": "Activo",
              "cycle": 25,
              "migrate": false,
              "sector_name": "Polvorin",
              "plan": {
                "id": 87,
                "name": "RECURRENTE RESIDENCIAL PLAN 250M",
                "cost": "30.00",
                "code": "FOR250",
                "profile": "250M/250M"
              }
            }
          ]
        
        
        }
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [api, token]);

  return (
    <PasswordContext.Provider
      value={{
        setEmail,
        email,
        setPassword,
        password,
        showPasswordState,
        handleLoginClick,
        data,
        isLoading,
        error,
        role,
        isAuthenticated,
        setIsAuthenticated, // Agregado al contexto
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
}

export { PasswordProvider, PasswordContext };

