import { ChevronDownIcon } from "@heroicons/react/24/outline"

const routes = [{
    label: 'Sobre Mi',
    route: '/about'
}, {
    label: 'Servicios',
    route: '/servicios',
    icon: <ChevronDownIcon className="h-5"/>,
    subRoutes: [
        {
            label: 'Fisioterapia Pélvica',
            route: '/servicios/fisioterapia-pelvica'
        },
        {
            label: 'Hipopresivos',
            route: '/servicios/hipopresivos',
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
            label: 'Abordaje de Postparto inmediato',
            route: '/servicios/abordaje-de-postparto-inmediato'
        },
        {
            label: 'Rehabilitación Abdominal',
            route: '/servicios/rehabilitacion-abdominal'
        },
        
        {
            label: 'Acupuntura',
            route: '/servicios/acupuntura'
        },
        {
            label: 'Gravitación de la Diastasis Abdominal',
            route: '/servicios/gravitacion-de-la-diastasis-abdominal'
        },
        
        {
            label: 'Abordaje en Disfunciones de Suelo Pélvico',
            route: '/servicios/abordaje-en-disfunciones-de-suelo-pelvico',
            icon: <ChevronDownIcon className="h-5"/>,
            miniRoutes: [
                {
                    label: 'Incontinencia Urinaria',
                    route: '/servicios/abordaje-en-disfunciones-de-suelo-pelvico/incontinencia-urinaria'
                },
                {
                    label: 'Incontinencia Fecal',
                    route: '/servicios/abordaje-en-disfunciones-de-suelo-pelvico/incontinencia-fecal'
                },
                {
                    label: 'Prolapsos',
                    route: '/servicios/abordaje-en-disfunciones-de-suelo-pelvico/prolapsos'
                },
                {
                    label: 'Disfunciónes Coloproctologicas',
                    route: '/servicios/abordaje-en-disfunciones-de-suelo-pelvico/disfunciones-coloproctologicas'
                },
                {
                    label: 'Disfunción Sexual',
                    route: '/servicios/abordaje-en-disfunciones-de-suelo-pelvico/disfuncion-sexual'
                }
            ]
        },
        
    ]
}, 
{
    label: 'Galería',
    route: '/galeria',
    // icon: <ChevronDownIcon className="h-5"/>,
    // subRoutes: [
    //     {
    //         label: 'Videos',
    //         route: '/galeria/videos'
    //     },
    //     {
    //         label: 'Fotos',
    //         route: '/galeria/fotos'
    //     },
    // ]
},
{
    label: 'Programas',
    mainRoute: 'programas',
    route: '/programas',
    scroll: true
    // icon: <ChevronDownIcon className="h-5"/>,
    // subRoutes: [
    //     {
    //         label: 'Talleres',
    //         route: '/eventos/talleres'
    //     },
    // ]
},
{
    label: 'Blog',
    route: '/blogs'
},{
    label: 'Contacto',
    route: '/contacto',
    mainRoute: 'contacto',
    scroll: true
},  ]

export default routes