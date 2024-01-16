import { ChevronDownIcon } from "@heroicons/react/24/outline"

const routes = [,  {
    label: 'Inicio',
    route: '/',
    showOnDesktop: true
},{
    label: 'Sobre Mi',
    route: '/about'
}, {
    label: 'Servicios',
    route: '/servicios',
    icon: <ChevronDownIcon className="h-5"/>,
    subRoutes: [
        {
            label: 'Fisioterapia Pélvica',
            route: '/servicios/Fisioterapia-pélvica'
        },
        {
            label: 'Abordaje de Postparto inmediato',
            route: '/servicios/abordaje-de-postparto-inmediato'
        },
        {
            label: 'Rehabilitación Abdominal',
            route: '/servicios/rehabilitación-abdominal'
        },
        {
            label: 'Acupuntura',
            route: '/servicios/acupuntura'
        },
        {
            label: 'Hipopresivos',
            route: '/servicios/hipopresivos',
            icon: <ChevronDownIcon className="h-5"/>,
            miniRoutes: [
                {
                    label: 'Online',
                    route: '/servicios/hipopresivos/online'
                },
                {
                    label: 'Presencial',
                    route: '/servicios/hipopresivos'
                }
            ]
        },
        {
            label: 'Gravitación de Diastasis Abdominal',
            route: '/servicios/gravitación-de-diastasis-abdominal'
        }
    ]
}, {
    label: 'Testimonios',
    route: '/testimonios'
}, {
    label: 'Blog',
    route: '/blogs'
} , {
    label: 'Eventos',
    route: '/eventos',
    icon: <ChevronDownIcon className="h-5"/>,
    subRoutes: [
        {
            label: 'Talleres',
            route: '/talleres'
        },
    ]
}, {
    label: 'Galería',
    route: '/alería',
    icon: <ChevronDownIcon className="h-5"/>,
    subRoutes: [
        {
            label: 'Videos',
            route: '/videos'
        },
        {
            label: 'Fotos',
            route: '/fotos'
        },
    ]
}]

export default routes