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
        label: "Disfunciones Pélvicas en el adulto",
        route: "/servicios/disfunciones-pelvicas-en-el-adulto",
        miniRoutes: [
          {
            label: "Incontinencia Urinaria",
            route:
              "/servicios/abordaje-en-disfunciones-de-suelo-pelvico/incontinencia-urinaria",
          },
          {
            label: "Incontinencia Fecal",
            route:
              "/servicios/abordaje-en-disfunciones-de-suelo-pelvico/incontinencia-fecal",
          },
          {
            label: "Prolapsos",
            route:
              "/servicios/abordaje-en-disfunciones-de-suelo-pelvico/prolapsos",
          },
          {
            label: "Disfunciónes Coloproctologicas",
            route:
              "/servicios/abordaje-en-disfunciones-de-suelo-pelvico/disfunciones-coloproctologicas",
          },
          {
            label: "Disfunción Sexual",
            route:
              "/servicios/abordaje-en-disfunciones-de-suelo-pelvico/disfuncion-sexual",
          },
        ],
      },
      {
        label: "Dolor pélvico por Endometriosis",
        route: "/servicios/dolor-pelvico-por-endometriosis",
        // icon: <ChevronDownIcon className="h-5"/>,
        // miniRoutes: [
        //     {
        //         label: 'Online',
        //         route: '/servicios/hipopresivos/online'
        //     },
        //     {
        //         label: 'Presencial',
        //         route: '/servicios/hipopresivos'
        //     }
        // ]
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
        label: "Rehabilitación de diástasis Abdominal",
        route: "/servicios/rehabilitacion-de-diastasis-abdominal",
      },
      {
        label: "Disfunción Sexual",
        route: "/servicios/disfuncion-sexual",
      },

      {
        label: "Disfunciones pélvicas en la infancia",
        route: "/servicios/disfunciones-pelvicas-en-la-infancia",
        icon: <ChevronDownIcon className="h-5" />,
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
    label: "Blog",
    route: "/blogs",
  },
  {
    label: "Contacto",
    route: "/contacto",
    scroll: true,
  },
];

export default routes;
