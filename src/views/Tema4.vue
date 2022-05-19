<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Titulo de primer nivel

    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.pt-5.mb-5      
          .col-auto.gx-0.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/temas/tema4/t4_01.jpg", alt="alt").m-auto
          .col-lg.bg--green02
            p.mb-0.p-4.pt-lg-3.pt-xl-4.px-lg-3 Los inventarios florísticos deben ser lo más confiables a nivel estadístico porque arrojan datos importantes que se deben tener en cuenta para su protección, por lo cual al realizar los muestreos y contar las diferentes piezas del bosque se deben tener en cuenta las diferentes variables que se van a cuantificar en zonas de PFNM, las métricas a tener en cuenta dependen del uso que le dé a ese inventario, el aprovechamiento y cualquier otra para su comercialización.
        p Las técnicas de muestreo dependen de las métricas que se van a medir o recolectar en los inventarios y principalmente del motivo por el cual se realizan esos inventarios. 

    #t_4_1.titulo-segundo.color-acento-contenido
        h2 4.1 Cuantificar recursos florísticos

    p.mb-4 Los datos que arrojan los diferentes inventarios florísticos a través de las técnicas de muestreo permiten cuantificar de manera exacta la cantidad de recursos forestales no maderables en determinada región o zona boscosa, estos también permiten medir el nivel de aprovechamiento que han sufrido los PFNM, así mismo determinar si “x” o “y” producto puede escasear o su producción disminuir por el nivel de aprovechamiento descontrolado.

    .row.justify-content-center.mb-5
      .col-lg-10          
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_01.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el aprendizaje sobre el tema se invito a revisar el recurso “Estudio florístico y estructural de un zural boscoso en el municipio de Arauca”, que se encuentra en la sección de material complementario o a través del siguiente enlace: 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/0120-0739-cofo-22-01-00037.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Definición

    p En relación con la cuantificación de los recursos florísticos es importante comprender que esta se da acorde con la forma cómo se obtengan los datos para su respectivo análisis cuantitativo y de los elementos relacionados con las diferentes categorías de interés en el inventario. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cjn--green.p-4.mb-4
          p.mb-0 Siguiendo en esta línea, la cuantificación convierte elementos en cantidades para poder representar e interpretar las diferentes situaciones que surgen de ella. Por ejemplo, un trabajador forestal cuantifica la cantidad de recursos no maderables de un bosque a través de un inventario florístico siempre que esté cuantificado numéricamente los objetos.
        p Tenga en cuenta…

        .row.justify-content-center.mb-4(data-aos="flip-left")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/t4_02.jpg')})`}")
            .bloque-texto-g__texto.p-4
              p.mb-0 De acuerdo con las diferentes categorías y clasificaciones de los recursos florísticos es importante elaborar un inventario físico a partir de la cuantificación del número de árboles, arbustos y plantas existentes en una zona geográfica determinada, teniendo en cuenta sus partes útiles, como por ejemplo: cantidad por raíces, tallos, hojas y flores, además se puede cuantificar el rendimiento de la producción por hectárea.      

        .crd.crd--green01.p-5
          .row.justify-content-center
            .col-lg.order-2.order-lg-1
              p En la cuantificación de los PFNM, a manera de ejemplo, se deben tener revisar los procesos relacionados con recolección, conservación, manejo de semillas y viveros forestales en variables relacionadas con: 
              ul.fa-ul.position-relative.mb-0
                li.mb-1
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Línea del tiempo en la explotación forestal.
                li.mb-1  
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Bioprocesos de germinación de especies no comerciales/locales.
                li.mb-1
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Ciclo de vida del árbol.
                li.mb-3
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Enraizadoras locales: sustratos locales (coco, hormiga).
              p En relación con la metodología aplicada para la definición y cuantificación de variables se pueden asociar los siguientes elementos:
              .crd.crd--white.p-4
                .row.justify-content-center
                  .col-lg-6
                    ul.fa-ul.position-relative.mb-0
                      li.mb-1
                        i.fa-li.fas.fa-circle.cstm--bullet
                        | Historia de vida.
                      li.mb-1  
                        i.fa-li.fas.fa-circle.cstm--bullet
                        | Entrevistas.
                      li.mb-1
                        i.fa-li.fas.fa-circle.cstm--bullet
                        | Cartografía.
                  .col-lg-6
                    ul.fa-ul.position-relative.mb-0
                      li.mb-1
                        i.fa-li.fas.fa-circle.cstm--bullet
                        | Inventarios.
                      li.mb-1  
                        i.fa-li.fas.fa-circle.cstm--bullet
                        | Obtención
                      li.mb-1
                        i.fa-li.fas.fa-circle.cstm--bullet
                        | Manejo de semillas. 
                
            .col-auto.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema4/t4_03.svg", alt="alt").img300

    p.mb-4 Cuando se requiere hacer estudios sobre las relaciones que existen entre las plantas y los grupos locales, se aplica la etnobotánica, porque a través de ella se establecen los niveles de interacción y la incidencia de las plantas en el desarrollo de las culturas. A continuación, se relacionan algunas variables que soportan los avances en el estudio cuantificable de recursos florísticos no maderables:

    .row.justify-content-center
      .col-lg-10
        table.mb-5
          caption Nota. Elaboración propia con base en Ministerio de Desarrollo Agrario y Riego (2015).            
          thead
            tr.tr--yellow
              th(colspan='2') Variables                     
          tbody.text-center
            tr.tr--gray
              td Usos culturales de las plantas.        
              td Plantas para construir (canoas, infraestructura, usos mágicos y chamánicos, medicinales).               
            tr
              td Usos sociales de las plantas.         
              td Plantas para curar, para construir, para la suerte (mundo mágico), colorantes, artesanías-cultura material.              
            tr.tr--gray
              td Sistemas de clasificación de las plantas.          
              td Palmas, maderas, hojas pequeñas, grandes, frías, calientes.
            tr
              td Origen.      
              td Viene de un ejemplar joven, maduro, de rastrojo, de patio, bejucos, arbustos, mata, matorro (clasificaciones propias).
            tr.tr--gray
              td Énfasis en las medicinales.      
              td El análisis de las plantas utilizadas, reconstrucción de procesos y usos que se las dan. ¿En dónde se siembran? (medio monte, abajo).
            tr
              td Ciclo de vida de la planta, abundancia, crecimiento (sombra, luz), ¿cuál es la parte que usa?      
              td Ciclo de vida de la planta, abundancia, crecimiento (sombra, luz), ¿Cuál es la parte que usa?
            tr.tr--gray
              td Las plantas y sus secretos.    
              td ¿Qué se usa?, uso popular, uso restringido.
            tr
              td Técnicas de siembra y crecimiento.   
              td Cuáles son espontáneas, sembradas, cultivadas.
            tr.tr--gray
              td Volumen de producción.   
              td Cantidad óptima de producción.
            tr
              td Las plantas y la manera de producirlas.  
              td Quién la produce, dónde y cuánto se produce, cuándo y cómo, entre otros factores.
            tr.tr--gray
              td Formas de consumo.  
              td Seca, molida y emplasto, etc.
            tr
              td Aplicaciones industriales.  
              td Fabricación de jarabes, pomadas, aceites esenciales, aromáticas, artesanías o infraestructura.

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Artesanías
              
    p Las artesanías son un eje central en el consumo de recursos naturales florísticos ancestrales, ya que se hacen para el sostenimiento de la tradición cultural artesanal y se transmite de generación a generación vía oral, por lo que la calidad de los productos mantiene las cualidades o características, las cuales son inigualables. Estos recursos naturales no forestales se ubican en la categoría de usos sociales y culturales de las plantas.

    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.cjn--green.p-4.mb-4
          p.mb-0 Por lo tanto, es necesario en el desarrollo de estos etnobotánicos considerar la metodología para realizar el inventario florístico, teniendo en cuenta las siguientes fases de desarrollo: 
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/t4_04.svg", alt="alt")

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 La biometría en la evaluación de los recursos de PFNM

    p.mb-4 Otro aspecto a considerar en la evaluación de los recursos de PFNM, es la aplicación de la biometría como herramienta esencial en la parametrización de los seres vivos o de procesos biológicos detallando en ellos los rasgos físicos, biológicos y químicos intrínsecos.

    .crd.crd--green01.p-5.mb-5
      .row.justify-content-center
        .col-lg.order-2.order-lg-1
          p Estas mediciones son fundamentales en la evaluación de las cualidades biométricas de los recursos, la aplicación de métodos en el manejo, control de inventarios de los recursos florísticos y la clasificación de los mismos.

          p En cuanto a los estudios cuantitativos de los PFNM, se debe considerar esencial la descripción de la experiencia actual en la evaluación de recursos de este tipo. En estos estudios es importante determinar los siguientes elementos:
          .crd.crd--white.p-4
            ul.fa-ul.position-relative.mb-0
              li.mb-1
                i.fa-li.fas.fa-circle.cstm--bullet
                | El inventario.
              li.mb-1
                i.fa-li.fas.fa-circle.cstm--bullet
                | Rendimiento de variables asociadas a los volúmenes de producción de recursos florísticos.
              li.mb-1
                i.fa-li.fas.fa-circle.cstm--bullet
                | Estudios de crecimiento.
              li.mb-1
                i.fa-li.fas.fa-circle.cstm--bullet
                | Aprovechamientos de recursos. 
              li.mb-1
                i.fa-li.fas.fa-circle.cstm--bullet
                | El seguimiento al ciclo de vida de los recursos.

        .col-auto.order-1.order-lg-2.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema4/t4_05.svg", alt="alt").img400

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Métodos para la evaluación de los recursos de los PFNM

    .row.justify-content-center
      .col-lg-3.mb-4.mb-lg-0
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/t4_06.png", alt="alt").m-auto
      .col-lg-9
        p Existen otros métodos para la evaluación de los recursos de los PFNM, con menor rigurosidad cuantitativa y con un espectro de evaluación que incluye el valor biométrico y su aplicación en el inventario de los PFNM. Entre estos métodos se incluyen: 

        .row  
          .col-auto
            p.box--green01.mb-1 #[i.fas.fa-circle.cstmBullet_02] El inventario de la biodiversidad  
            p.box--white.mb-1 #[i.fas.fa-circle.cstmBullet_02] Las técnicas de ciencias sociales
            p.box--green01.mb-1 #[i.fas.fa-circle.cstmBullet_02] Las perspectivas culturales
            p.box--white.mb-1 #[i.fas.fa-circle.cstmBullet_02] La etnobotánica
            p.box--green01 #[i.fas.fa-circle.cstmBullet_02] Métodos económicos. 

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Diseño de un inventario biométrico para PFNM

    p.mb-5 En el inventario forestal y vegetal el plan de muestreo se aplica sobre las fincas consideradas como áreas productivas en determinada zona geográfica. Para la elección de los métodos apropiado en la definición del diseño un inventario con información estadísticamente fiable es importante tener en cuenta los objetivos y su nivel de inventario y sus niveles: 

    figure.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/temas/tema4/t4_07.svg", alt="alt").img1030.m-auto

    p.mb-5 De igual forma, es importante considerar la aplicación de la biometría en el diseño de un inventario, como un sistema de apoyo integrado que facilita la toma de decisiones como método "paso a paso" para diseñar un inventario biométrico y las necesidades de planificación para el análisis y presentación de los datos y algunas necesidades destacadas de investigación, según el documento “Productos forestales no maderables asociados a bosques de roble.

    .row.justify-content-center.mb-5
      .col-lg-8.mb-5
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_03.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el tema se invita a acceder al contenido Productos forestales no maderables asociados a bosques de roble”, a través de los materiales complementarios o del siguiente enlace
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/v15n2a03.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

      .col-lg-10
        .crd.crd--green01.p-4
          p.mb-4 Existe en el mundo una amplia gama de plantaciones forestales y especies vegetales, las cuales tienen características específicas para su desarrollo en función del clima y características agrológicas de la zona. El cultivo de estas plantaciones se constituye en fuente de materias primas para la producción industrial, como son: 
          .row.justify-content-center          
            .col-lg-8
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema4/t4_08.png", alt="alt")

    p.mb-5 Los anteriores aportan toques de sabor y aroma determinados en la industria de los licores, otro árbol invaluable en el desarrollo industrial es el caucho, caracterizado por la producción del látex con características especiales para la elaboración de gomas y llantas, empaquetaduras, artículos impermeables, etc. 

    h4.text-center.mb-5 Productos no maderables del bosque

    .row.justify-content-center.mb-5
      .col-9.col-lg-4.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .front   
            figure
              img(src="@/assets/curso/temas/tema4/t4_09.jpg",alt="alt")  
            .imgTitleRed
              p Caucho
          .back
            figure
              img(src="@/assets/curso/temas/tema4/t4_10.jpg", alt="alt")
            .imgTitleGreen
              p Caucho
      .col-9.col-lg-4.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .front   
            figure
              img(src="@/assets/curso/temas/tema4/t4_11.jpg",alt="alt")  
            .imgTitleRed
              p Corcho
          .back
            figure
              img(src="@/assets/curso/temas/tema4/t4_12.jpg", alt="alt")
            .imgTitleGreen
              p Corcho
      .col-9.col-lg-4.mb-4.mb-lg-0
        .flip(data-aos="zoom-in")
          .front   
            figure
              img(src="@/assets/curso/temas/tema4/t4_13.jpg",alt="alt")  
            .imgTitleRed
              p Cedro
          .back
            figure
              img(src="@/assets/curso/temas/tema4/t4_14.jpg", alt="alt")
            .imgTitleGreen
              p Cedro

    .color-acento-botones(data-aos="zoom-in")
      .bloque-texto-c.color-secundario.p-4
        i.fas.fa-quote-right
        p.mb-2 #[strong La producción de los árboles, otras plantas y diferentes tipos de vegetación son un factor importante en la renovación del suelo, a partir de su deterioro y descomposición, además contribuyen a la producción de oxígeno, siendo de gran utilidad para la humanidad y el mantenimiento del desarrollo sostenible.]
        span -  según la FAO (2015).

    separador

    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2 Interpretar métricas de inventario florístico

    p La métrica aplicada en procesos de gestión de recursos florístico está asociada a cualquier tipo de variable que pueda ser usada para medir el desempeño clave de aspectos relevantes del ecosistema que requiere del monitoreo permanente; por ejemplo, métricas relacionadas con los costos, los plazos, los entregables y la calidad, entre otros.

    .crd.crd--yellow.mb-4
      .row.justify-content-center
        .col-lg.p-4.px-5
          p El propósito de las métricas es calcular el estado de los bosques de una región utilizando los datos recopilados a partir de una muestra representativa de fincas localizadas. Los objetivos básicos de una EFN son:

          ul.fa-ul.position-relative.mb-0
            li.mb-1
              i.fa-li.fas.fa-circle.cstm--bullet
              | Obtener estimaciones o cálculos nacionales del área forestal total, subdividida según las principales categorías de condiciones y tipos de bosques. 
            li.mb-1
              i.fa-li.fas.fa-circle.cstm--bullet
              | Cantidades y distribución del arbolado por especies y categorías de tamaño.
            li.mb-1
              i.fa-li.fas.fa-circle.cstm--bullet
              | Datos de volumen de madera según las características de los árboles.
            li.mb-1
              i.fa-li.fas.fa-circle.cstm--bullet
              | Productos forestales no madereros.
            li.mb-1
              i.fa-li.fas.fa-circle.cstm--bullet
              | Estimaciones del cambio en estos atributos de los bosques e indicadores de biodiversidad.

        .col-lg-4
          figure
            img(src="@/assets/curso/temas/tema4/t4_15.png", alt="alt")

    p La finalidad de la interpretación de las métricas de los inventarios florísticos es mejorar el conocimiento de la importancia de unas evaluaciones exactas y precisas de los recursos, en todos los niveles de uso del bosque para obtener PFNM y orientar sobre el diseño y selección de métodos apropiados para la cuantificación de los recursos en diferentes situaciones y para distintos productos. 
    p.mb-5 La interpretación de las métricas de los inventarios de PFNM, también permite contar con información relacionada con: 

    figure(data-aos="zoom-in").mb-5
      img(src="@/assets/curso/temas/tema4/t4_16.jpg", alt="alt").img1030.m-auto

    p.mb-5 Para la implementación de un modelo de inventarios de recursos florísticos, se requiere la definición y el reconocimiento de las categorías organizadas y previstas en las diferentes matrices que faciliten la consolidación de la información como los datos cuantitativos y cualitativos. Por lo anterior, le invito a revisar el siguiente recurso de aprendizaje, el cual le permitirá profundizar en el tema:

    .titulo-sexto.color-acento-contenido      
      span Variables cuantitativas de inventarios de PFNM Interpretación de métricas

    figure(data-aos="zoom-in").mb-5
      img(src="@/assets/curso/temas/tema4/t4_17.svg", alt="alt")

    p La interpretación de la información de las variables que integran el inventario, se convierte en un soporte fundamental para los trabajadores de campo de inventarios de los PFNM, es a partir de esta información que se logra orientar el uso final que se quiere dar a los productos recolectados. Por ejemplo: para beneficiarse de plantas medicinales, será importante conocer en el inventario de recursos florísticos y los nombres comunes de los árboles que le aporten hojas, tallos o resinas para elaborar sus fórmulas.

    .crd.crd--green01.mb-5
      .row.justify-content-center
        .col-lg.p-4.px-5
          p A los habitantes de la zona el comportamiento de las variables de los inventarios les suministra información sobre los diferentes PFNM y la disponibilidad de volúmenes de productos, datos fundamentales para su uso como la alimentación y en el caso extracción de esencias; por otro lado, el inventario y sus diferentes métricas aportaran información cuantitativa y cualitativa de las especies que puede aprovechar para obtener sus productos.

          p.mb-0 El análisis del comportamiento de las variables del inventario de PFNM, permite conocer la información sobre: clasificación de los PFNM, como por ejemplo el uso final: esponja o barra de chicle, tela, hojas comestibles, vino y resina. Por lo anterior, los inventarios de biodiversidad suelen agrupar los animales y los vegetales de acuerdo con los nombres científicos de la familia y el género. 

        .col-lg-4
          figure
            img(src="@/assets/curso/temas/tema4/t4_18.png", alt="alt")

    .row.justify-content-center
      .col-lg-10
        p.mb-5 A continuación, se presentan algunos ejemplos de variables que se utilizan para los inventarios florísticos, por lo que se invita a revisar los siguientes dos recursos de aprendizaje:

        figure(data-aos="zoom-in").mb-5
          img(src="@/assets/curso/temas/tema4/t4_19.svg", alt="alt")

        .titulo-sexto.color-acento-contenido      
          span Interpretación de métricas del inventario florístico de acuerdo con criterios técnicos

        SlyderC.mb-5(:datos="datosSlyder2")

    .row.justify-content-center.mb-5
      .col-lg-8         
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_02.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el aprendizaje sobre biometría y métodos alternos se sugiere revisar el siguiente enlace, secciones 3, 4 y 5. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/maindoc-s.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    


    

          
          
              
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder2: [
      {
        titulo:
          '<strong>Clase:</strong> esponjas, palos de mascar, productos para limpieza de los dientes, esponjas de baño y afrodisíacos.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_20.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<strong>Fibras, fibras para tejer, yute, tela:</strong> cestería (trampas para peces, mobiliario, adornos), manos de almirez.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_21.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<strong>Comestibles:</strong> frutos silvestres, edulcorantes. neutralizantes, hojas comestibles, hortalizas y setas.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_22.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<strong>Agua, bebidas, vino:</strong> agua, bebidas, vino y antioxidantes.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_23.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<strong>Plantas de uso medicinal:</strong> para el tratamiento de diversas enfermedades.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_24.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<strong>Látex, hules, gomas y resinas:</strong> adulterantes, liga para pájaros, coagulantes, resina goma de copal.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_25.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo:
          '<strong>Clase:</strong> gutapercha, abalorios decorativos, semillas decorativas.',
        texto: '',
        imagen: require('@/assets/curso/temas/tema4/t4_26.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
