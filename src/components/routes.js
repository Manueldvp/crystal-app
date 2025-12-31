import { ChevronDownIcon } from "@heroicons/react/24/outline";

const routes = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Sobre Mi",
    route: "/about",
  },
  {
    label: "Servicios",
    route: "/servicios",
    icon: <ChevronDownIcon className="h-5" />,
    subRoutes: [
      {
        label: "Dolor en Endometriosis y Adenomiosis",
        route: "/servicios/endometriosis-adenomiosis",
      },
      {
        label: "Embarazo y Preparación al parto",
        route: "/servicios/embarazo-y-preparacion-al-parto",
      },
      {
        label: "Postparto",
        route: "/servicios/postparto",
      },
      {
        label: "Disfunciones Pélvicas en el Adulto",
        route: "/servicios/disfunciones-pelvicas-en-el-adulto",
      },
      {
        label: "Rehabilitación de Diástasis Abdominal",
        route: "/servicios/rehabilitacion-de-diastasis-abdominal",
      },
      {
        label: "Disfunción Sexual",
        route: "/servicios/disfuncion-sexual",
      },
      {
        label: "Disfunciones Pélvicas en la Infancia",
        route: "/servicios/disfunciones-pelvicas-en-la-infancia",
      },
    ],
  },
  {
    label: "Programas",
    route: "/programas",
    scroll: true,
    mainRoute: "programas",
    icon: <ChevronDownIcon className="h-5" />,
    subRoutes: [
      {
        label: "Hipopower",
        route: "/hipo-power",
      },
      {
        label: "Embarazo Activo",
        route: "/embarazo-activo",
      },
    ],
  },
  {
    label: "Contacto",
    route: "/contacto",
    scroll: true,
  },
];

export default routes;
