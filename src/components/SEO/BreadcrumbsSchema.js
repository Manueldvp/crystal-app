export function generateBreadcrumbsSchema(pathname, pageTitle) {
  const SITE_URL = 'https://cristalsarabia.com';
  const segments = pathname.split('/').filter(Boolean);
  
  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
  ];

  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const position = index + 2;
    
    // Map segment to readable name
    const nameMap = {
      'about': 'Sobre Mí',
      'servicios': 'Servicios',
      'endometriosis-adenomiosis': 'Dolor en Endometriosis y Adenomiosis',
      'embarazo-y-preparacion-al-parto': 'Embarazo y Preparación al Parto',
      'postparto': 'Postparto y Recuperación',
      'dolor-pelvico-cronico': 'Dolor Pélvico Crónico',
      'rehabilitacion-postquirurgica': 'Rehabilitación Postquirúrgica',
      'incontinencia-urinaria': 'Incontinencia Urinaria',
      'incontinencia-fecal': 'Incontinencia Fecal',
      'prolapsos': 'Prolapsos de Órganos Pélvicos',
      'disfuncion-sexual': 'Disfunción Sexual',
      'disfunciones-coloproctologicas': 'Disfunciones Coloproctológicas',
      'rehabilitacion-abdominal': 'Rehabilitación Abdominal',
      'ejercicio-terapeutico': 'Ejercicio Terapéutico',
      'disfunciones-pelvicas-en-el-adulto': 'Disfunciones Pélvicas',
      'rehabilitacion-de-diastasis-abdominal': 'Diástasis Abdominal',
      'quiz': 'Test de Salud Pélvica',
      'programas': 'Programas',
      'hipo-power': 'HIPOPOWER',
      'embarazo-activo': 'Embarazo Activo',
      'preguntas-frecuentes': 'Preguntas Frecuentes',
      'contacto': 'Contacto',
    };

    const name = nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    
    // Use page title for the last item if provided
    const itemName = index === segments.length - 1 && pageTitle ? pageTitle : name;
    
    items.push({
      '@type': 'ListItem',
      position,
      name: itemName,
      item: `${SITE_URL}${currentPath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
}

