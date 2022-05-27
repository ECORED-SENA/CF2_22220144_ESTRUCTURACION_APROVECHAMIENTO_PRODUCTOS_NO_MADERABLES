export default {
  global: {
    componenteFormativo:
      'Oferta ambiental de materiales no maderables del bosque',
    descripcionCurso:
      'El aprovechamiento de los bosques, en lo referente al ítem forestal y recursos naturales forestales no maderables, se analiza a partir de la recolección de los subproductos del bosque, tales como: raíces, tallos, hojas, flores, frutos, semillas y resinas, además, los hongos comestibles. Además, toma importancia el reconocimiento de las zonas forestales mediante la cartografía y la georreferenciación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ubicación geográfica de la zona forestal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cartografía',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Georreferenciación',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación de los recursos no maderables ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Productos forestales no maderables aprovechados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Disponibilidad de elementos de protección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'Disponibilidad de elementos de protección',
            numero: '3.1',
            titulo: 'Salud y seguridad en el trabajo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Enfermedad profesional',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Contexto legal y normativo',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Los peligros en la salud del trabajo forestal',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Salud y seguridad en el trabajo en el sector forestal',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Cuantificar e interpretar métricas de inventario florístico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Cuantificar recursos florísticos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Interpretar métricas de inventario florístico',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Catastro Bogotá. (2019). ¿Qué es un plano topográfico? Catastro Bogotá.',
      link:
        'https://www.catastrobogota.gov.co/pregunta/que-es-un-plano-topografico',
    },
    {
      referencia:
        'Conpes. (2020). Documento Conpes 4021.<i>Consejo nacional de política económica y social república de Colombia departamento nacional de planeación política nacional para el control de la deforestación y la gestión sostenible de los bosques. DNP.</i> ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4021.pdf',
    },
    {
      referencia: 'FAO (s.f.). <i>Planos y mapas topográficos. FAO.</i> ',
      link:
        'https://www.fao.org/fishery/docs/CDrom/FAO_Training/FAO_Training/General/x6707s/x6707s09.htm#:~:text=Los%20planos%20y%20mapas%20cartogr%C3%A1ficos,colinas%20(llamadas%20tambi%C3%A9n%20relieves%20verticales)',
    },
    {
      referencia: 'FAO. (1997). <i>Productos forestales no madereros. FAO.</i>',
      link: 'https://www.fao.org/3/y1997s/y1997s0g.htm',
    },
    {
      referencia:
        'FAO. (2015). <i>Los bosques y suelos forestales contribuyen de manera esencial a la producción agrícola y la seguridad alimentaria mundial. FAO</i>',
      link: 'https://www.fao.org/soils-2015/news/news-detail/es/c/285875/',
    },
    {
      referencia:
        'FAO. (2015). <i>El arazá, un frutal alternativo para la Amazonia Ecuatoriana. FAO.</i> ',
      link: 'https://www.fao.org/in-action/agronoticias/detail/es/c/508811/',
    },
    {
      referencia:
        'Instituto Geográfico Agustín Codazzi IGAC. (2018). <i>Formatos y escalas de mapas. IGAC.</i>',
      link:
        'https://www.igac.gov.co/es/contenido/areas-estrategicas/formatos-y-escalas-de-mapas',
    },
    {
      referencia:
        'Ministerio del Medio Ambiente. Decreto 1791 de 1996. Bogotá. Colombia.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1296 ',
    },
    {
      referencia:
        'Ministerio de Desarrollo Agrario y Riego. (2015). <i>Los productos forestales no maderables. Lima Perú.</i>',
      link:
        'https://www.midagri.gob.pe/portal/objetivos/49-sector-agrario/recurso-forestal/354-productos-no-maderables ',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1974). <i>Decreto Ley 2811 de 1974.</i>',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=1551',
    },
    {
      referencia:
        'OIT. (2018). Declaración relativa a principios y derechos fundamentales en el trabajo. OIT.',
      link:
        'https://www.ilo.org/wcmsp5/groups/public/---ed_norm/---ipec/documents/publication/wcms_703425.pdf',
    },
    {
      referencia: 'OIT. (1981). <i>Equipos de protección personal. OIT</i>',
      link:
        'https://www.ilo.org/global/topics/labour-administration-inspection/resources-library/publications/guide-for-labour-inspectors/personal-protective-equipment/lang--es/index.htm ',
    },
    {
      referencia:
        'OIT. (1997). <i>Nuevas reglas para proteger a los trabajadores y al medio ambiente. OIT.</i> ',
      link:
        'http://ciaris.ilo.org/global/about-the-ilo/newsroom/news/WCMS_008458/lang--es/index.htm ',
    },
    {
      referencia:
        'OIT. (1998). <i>Seguridad y salud en el trabajo forestal. OIT</i>.  ',
      link:
        'https://www.ilo.org/safework/info/standards-and-instruments/codes/WCMS_112615/lang--es/index.htm ',
    },
    {
      referencia:
        'Organización de los Estados Americanos. (2004). <i>Decisión 584. Sustitución de la Decisión 547, Instrumento Andino de Seguridad y Salud en el Trabajo. OEA.</i>',
      link: 'http://www.sice.oas.org/trade/junac/decisiones/dec584s.asp',
    },
  ],
  glosario: [
    {
      termino: 'Aprovechamiento forestal',
      significado:
        'extracción de productos de un bosque y comprende desde la obtención hasta el momento de su transformación. (Ministerio del Medio Ambiente, Decreto 1791 de 1996, Bogotá Colombia).',
    },
    {
      termino: 'Cartografía',
      significado:
        'elaboración, diseño e interpretación de los mapas geográficos a partir de las mediciones que aporta la topografía.',
    },
    {
      termino: 'Clasificación de los PFNM',
      significado:
        'se pueden clasificar por su origen, de origen vegetal y de origen animal, se pueden clasificar por la parte de la planta que se aprovecha (raíces, tallos, yemas, brotes, hojas, flores, frutos, semillas) y por su uso (alimentos, medicinales, etc.).',
    },
    {
      termino: 'Georreferenciación',
      significado:
        'o rectificación es un proceso que permite determinar la posición de un elemento (predio, zona forestal) en un sistema de coordenadas espacial diferente al que se encuentra, existen por lo tanto dos sistemas de coordenadas: el sistema de origen y el sistema destino.',
    },
    {
      termino: 'Mapas topográficos',
      significado:
        'muestran las relaciones espaciales entre los diferentes elementos geográficos tales como, lagos, ríos, zona boscosa, límites, etc.',
    },
    {
      termino: 'Plan de manejo forestal',
      significado:
        'formulación y descripción de los sistemas y labores silviculturales en el bosque sujeto a aprovechamiento, para asegurar su sostenibilidad, presentado por el interesado en realizar aprovechamientos forestales persistentes (Ministerio del Medio Ambiente. Decreto 1791 de 1996, Bogotá Colombia).',
    },
    {
      termino: 'Plan de ordenación forestal',
      significado:
        'estudio elaborado por las corporaciones que, fundamentado en la descripción de los aspectos bióticos, abióticos, sociales y económicos, tiene por objeto asegurar que el interesado en utilizar el recurso en un área forestal productora, desarrolle su actividad en forma planificada para así garantizar el manejo adecuado y el aprovechamiento sostenible del recurso (Ministerio del Medio Ambiente, Decreto 1791 de 1996, Bogotá Colombia).',
    },
    {
      termino: 'Plantación forestal',
      significado:
        'bosque originado por la intervención directa del hombre (Ministerio del Medio Ambiente, Decreto 1791 de 1996, Bogotá Colombia).',
    },
    {
      termino: 'Productos forestales no maderables',
      significado:
        'son productos que no sean madera, que se produzcan naturalmente en los bosques y se pueden cosechar para uso humano, industrial, construcción, para medicinas, y para artesanías, sin cortar los árboles.',
    },
    {
      termino: 'Reforestación',
      significado:
        'establecimiento de árboles para formar bosques, realizado por el hombre (Ministerio del Medio Ambiente, Decreto 1791 de 1996, Bogotá Colombia).',
    },
  ],
  complementario: [
    {
      texto:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura - FAO. (2002). <i>Productos no maderables del bosque. FAO</i>',
      tipo: 'Pagina web',
      link: 'https://www.fao.org/3/y1997s/y1997s0g.htm',
    },
    {
      texto:
        'Instituto de Investigación de Recursos Biológicos Alexander von Humboldt. (s.f.). <i>Productos no maderables, alternativa de conservación de nuestros bosques</i>.Instituto de Investigación de Recursos BiológicosAlexander von Humboldt.',
      tipo: 'Página web',
      link:
        'http://www.humboldt.org.co/es/actualidad/item/1455-productos-forestales-no-maderables-alternativa-de-conservacion-de-nuestros-bosques',
    },
    {
      texto:
        'Potosí-Gutiérrez, A, Villalba-Malaver, J. C., y Arboleda-Íno, L. Y. (2017.) <i>Productos forestales no maderables asociados a bosques de roble</i>',
      tipo: 'PDF',
      descarga: '/downloads/v15n2a03.pdf',
    },
    {
      texto:
        'Universidad Distrital Francisco José de Caldas. (2019). <i>Estudio florístico y estructural de un zural boscoso en el municipio de Arauca, Colombia</i>. Universidad Distrital Francisco José de Caldas.',
      tipo: 'PDF',
      descarga: '/downloads/0120-0739-cofo-22-01-00037.pdf',
    },
    {
      texto:
        'Instituto de Hidrología Meteorología y Estudios Ambientales, Ideam. (2001). <i>Experiencia y principios Biométricos.Ideam.</i>',
      tipo: 'PDF',
      descarga: '/downloads/maindoc-s.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Manuel Cusguen Narváez',
        cargo: 'Experto temático',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Capital Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Capital Centro de Gestión Industrial - Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifha',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
