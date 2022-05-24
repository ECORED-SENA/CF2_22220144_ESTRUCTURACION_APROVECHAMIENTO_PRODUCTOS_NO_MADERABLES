<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Clasificación de los recursos no maderables 

    .row.justify-content-center.mb-5
      .col-lg.bg--green02
        p.mb-0.p-4.pt-lg-3.pt-xl-5.px-lg-3 Los estudios realizados a la fecha muestran que no hay una sola forma de clasificar los recursos forestales no maderables del bosque, porque según cada investigador, profesional especializado, productor o grupo comunitario, estos se pueden clasificar de diferentes maneras. Por lo que a continuación se describen algunos conceptos que le permitirán profundizar en el tema.
      .col-auto.gx-0.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/tema2/t2_01.png", alt="alt").m-auto

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Definición 

    p.mb-5 El Ministerio de Ambiente y Desarrollo Sostenible, MADS, en el Decreto 690 de 2021, considera que los productos forestales no maderables requieren ser reglamentados para facilitar la adquisición y el derecho al manejo sostenible de los ecosistemas naturales en los que se incluye la flora silvestre que un componente ambiental de la biodiversidad colombiana y que abarca a un sinnúmero de especies, principalmente autóctonas.

    .color-acento-botones(data-aos="zoom-in").mb-5
      .bloque-texto-c.color-secundario.p-4
        i.fas.fa-quote-right
        p.mb-2 #[strong Se la considera como el conjunto de especies e individuos vegetales, que no se han plantado o mejorado por el hombre, incluyendo ejemplares tanto terrestres como acuáticos y se obtienen mediante el aprovechamiento sostenible de la flora, pero que no provienen de la madera ]
        span - Decreto Ley 2811 de 1974

    .row.justify-content-center
      .col-lg-10
        p Para recordar…

        .row.justify-content-center.mb-4(data-aos="flip-left")
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/t2_02.jpg')})`}")
            .bloque-texto-g__texto.p-4
              p.mb-0 La flora silvestre colombiana es la que es nacida u originaria del país, por lo que se le dice que es autóctona, a esta se le conoce también como: productos no maderables del bosque, el objetivo es su redescubrimiento, investigación, cuidado, aprovechamiento y uso sostenible, esto con el fin de que este patrimonio no se pierda por la acción del ser humano.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Clasificación 

    p.mb-5 La flora silvestre es todo producto que no sea madera, que se produzca naturalmente en los bosques y se pueda cosechar para uso humano sin necesidad de cortar árboles. Existen varios tipos de clasificación de la flora silvestre, dependiendo de los usos o lo que se quiera lograr o alcanzar. Por lo anterior, se muestra su clasificación de acuerdo a su uso: 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .row.justify-content-center  
          .col-lg-4.gx-0
            .crd.crd--gray.crd--topradLeft.crd--bottomRad01.fullhg
              .crd.crd--yellow.crd--topradLeft.p-4
                h5.mb-0.text-center Exudados   
              .p-4           
                p Resinas.
                p Aceites.
                p.mb-0 Oleorresinas.
          .col-lg-4.gx-0
            .crd.crd--gray.fullhg
              .crd.crd--green.p-4
                h5.mb-0.text-center Estructuras vegetativas
              .p-4
                p Tallos.
                p Hojas.
                p Raíces.
                p.mb-0 Yemas apicales.
          .col-lg-4.gx-0
            .crd.crd--gray.crd--bottomRad02.crd--topradRigth.fullhg
              .crd.crd--pink.crd--topradRigth.p-4
                h5.mb-0.text-center Partes reproductivas              
              .p-4
                p Nueces.
                p Frutos.
                p Aceites de semillas.
                p.mb-0 Semillas.

    p.text-center.mb-5 A continuación, se muestra su clasificación según el interés científico:
    
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .row.justify-content-center
          .col-lg-6(data-aos="flip-left").mb-4
            .crd.crd--hrAvatar.pink
              .row.vh--100
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema2/t2_03.svg", alt="alt").img85
                .col
                  h5 Los ecólogos
                  p Suelen agrupar de acuerdo con la familia científica y el tamaño.
                  p.mb-0 Ejemplos: insectívoros, primates, reptiles, roedores, ungulados.
          .col-lg-6(data-aos="flip-left").mb-4
            .crd.crd--hrAvatar.gray
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema2/t2_04.svg", alt="alt").img85
                .col
                  h5 Los biólogos
                  p.mb-0 Los PFNM clasifican la flora silvestre por su nombre común y nombre científico.
          .col-lg-6(data-aos="flip-left").mb-4.mb-lg-0
            .crd.crd--hrAvatar.yellow
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema2/t2_05.svg", alt="alt").img85
                .col
                  h5 Los gestores de tierras
                  p La clasificación de la flora de acuerdo con las características de la ordenación.
                  p.mb-0 Ejemplos: propagación del cultivo, accesibilidad, quién lo recolecta, orientación del consumo ordinario familiar, frecuencia de uso, participación en los mercados.
          .col-lg-6(data-aos="flip-left")
            .crd.crd--hrAvatar.green
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/tema2/t2_06.svg", alt="alt").img85
                .col
                  h5 Los forestales
                  p Se apropian de técnicas de agrupaciones atendiendo a la forma y partes utilizadas de la planta.
                  p.mb-0 Ejemplos: partes no maderables de árboles, frutos de árboles, herbáceas, trepadoras, arbustos, etc.
    
      .col-lg-10
        p.mb-4 Para profundizar en la forma sobre cómo los biólogos hacen dicha clasificación, la siguiente tabla muestra algunas especies forestales junto con el nombre científico y común entre otros datos.

        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo de especies forestales.
        
        table
          thead
            tr.tr--yellow
              th Familia                
              th Nombre cient&iacute;fico                
              th Bioforma                
              th Nombre común                
              th Imagen
          tbody
            tr.text-center
              td Myrtaceae
              td <i>Eugenia biflora (L) DC</i>
              td &Aacute;rbol
              td Array&aacute;n
              td 
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span ver imagen
                    .indicador--click(v-if="mostrarIndicador")
            tr.text-center
              td Bignoniaceae
              td <i>Handroanthus cf. Ochraceus (Cham.) Mattos</i>
              td &Aacute;rbol
              td Flor amarillo
              td 
                a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                  span ver imagen
                    .indicador--click(v-if="mostrarIndicador")
            tr.text-center
              td Lauraceae
              td <i>Ocotea cf. Cemua (Nees) Mez</i>
              td &Aacute;rbol
              td Laurel negro
              td 
                a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                  span ver imagen
                    .indicador--click(v-if="mostrarIndicador")

    ModalA(:abrir-modal.sync="modal1")      
      figure
        img(src='@/assets/curso/temas/tema2/modal_01.jpg', alt='')
        
    ModalA(:abrir-modal.sync="modal2")      
      figure
        img(src='@/assets/curso/temas/tema2/modal_02.jpg', alt='')
     
    ModalA(:abrir-modal.sync="modal3")      
      figure
        img(src='@/assets/curso/temas/tema2/modal_03.jpg', alt='')
        

    p.mb-5 Colombia es un país muy biodiverso por lo que podrá encontrar una gran cantidad de productos no maderables del bosque, datos que se han venido pasando de generación a generación de forma oral, dichos productos hoy por hoy están siendo investigados para el bienestar del ser humano. 

    .row.justify-content-center.mb-5
      .col-lg-10          
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_02.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el tema puede hacer clic en el siguiente enlace donde encontrará un documento sobre las especies del Arauca colombiano.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/0120-0739-cofo-22-01-00037.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5 Por lo anterior, los recolectores, los indígenas, los pobladores de la parte rural colombiana, los afrodescendientes y todos aquellos que se benefician de los PFNM, los clasifican de acuerdo con su tipo, clase y usos. Teniendo en cuenta esto se sugiere revisar la siguiente tabla para conocer dicha forma de organización.

    .row.justify-content-center      
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Clasificación de productos no maderables del bosque.
        table.mb-5
          caption Nota. Tomada de FAO (2001, p. 24).
          thead
            tr.tr--yellow
              th Tipos
              th Clase
              th Usos
          tbody.text-center
            tr
              td(rowspan='2') Hongos
              td Setas
              td Alimentos
            tr
              td Trufas
              td Alimentos
            tr
              td(rowspan='12') Vegetales
              td(rowspan='2') &Aacute;rboles
              td Industriales
            tr
              td Medicinales
            tr
              td Arbusto
              td Medicinales
            tr
              td(rowspan='2') Palmeras
              td(rowspan='2') Construcci&oacute;n
            tr
            tr
              td(rowspan='2') Plantas en General
              td Medicinales
            tr
              td Construcci&oacute;n
            tr
              td Roten (Juncos)
              td Cester&iacute;a
            tr
              td Herb&aacute;ceos
              td Construcci&oacute;n
            tr
              td Bamb&uacute;
              td -
            tr
              td Trepadoras
              td Medicinales
            tr
              td Epifitas
              td -

        p.mb-4 Por otro lado, el aprovechamiento de los recursos forestales no maderables del bosque también se clasifica en función de la parte utilizada, las cuales pueden ser: raíces, hojas, corteza, etc. (FAO, 1997). 

    .bg_img_01
      .row.justify-content-center.mb-5
        .col-lg-10
          .row.justify-content-center.align-items-end.pt-5
            .col-lg-2.d-none.d-lg-flex.mb-4
              figure(data-aos="flip-right")
                img(src="@/assets/curso/temas/tema2/t2_07.svg", alt="alt")
            .col-lg-8.mb-5.mb-lg-0
              .titulo-sexto.color-acento-contenido
                h5 Tabla 3.
                span Tipos de recursos vegetales y partes vegetales de los PFNM
              table.mb-5
                caption Nota. Tomada de FAO (200124).
                thead
                  tr.tr--yellow
                    th Clase de recurso
                    th Parte vegetal              
                tbody.text-center.tr--white
                  tr.tr--gray
                    td(rowspan='4') Propágulos.<br><br>Reproductivos.
                  tr.tr--gray
                    td Fruto.
                  tr.tr--gray
                    td Nuez/semilla.
                  tr.tr--gray
                    td Semilla oleaginosa.

                  tr
                    td(rowspan='3') Exudados vegetales.
                  tr
                    td Resina.
                  tr
                    td Savia. 

                  tr.tr--gray
                    td(rowspan='11') Estructuras vegetales.
                  tr.tr--gray
                    td Tronco.
                  tr.tr--gray
                    td Partes verdes.            
                  tr.tr--gray
                    td Flores.            
                  tr.tr--gray
                    td Hojas.            
                  tr.tr--gray
                    td Raíz.            
                  tr.tr--gray
                    td Corteza.            
                  tr.tr--gray
                    td Tubérculo.            
                  tr.tr--gray
                    td Yemas apicales.            
                  tr.tr--gray
                    td Brotes.            
                  tr.tr--gray
                    td Tallos.           
            .col-lg-2.d-none.d-lg-flex.mb-4
              figure(data-aos="flip-left")
                img(src="@/assets/curso/temas/tema2/t2_08.svg", alt="alt") 

        .col-lg-10
          p.mb-5 Los PFNM se clasifican según el uso final del producto (medicinas, alimentos, bebidas, utensilios, etc.) y por uso genérico, extracción, preparación o transformación, forma de consumo o uso específico. Por lo anterior, se invita a ver lo siguiente:   

          ImagenInfografica.color-acento-botones(data-aos="zoom-in")
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/t2_08.png', alt='')
                figcaption  Nota. Elaboración propia con base en FAO (1997).    

            .crd.crd--pink.crd--brad.p-4(x="30%" y="13%" numero="+")
              .h5.mb-2 Exudados sustancias
              p.mb-0 Tales como: goma (hidrosoluble), resinas (no hidrosolubles) y látex (lechoso o jugo claro) extraído de las plantas por exudación.

            .crd.crd--pink.crd--brad.p-4(x="68%" y="13%" numero="+")
              .h5.mb-2 Alimentos
              p.mb-0 Productos vegetales, bebidas, frutas, nueces, semillas, raíces, hongos, miel de abejas, etc.

            .crd.crd--pink.crd--brad.p-4(x="21%" y="28%" numero="+")
              .h5.mb-2 Productos ornamentales
              p.mb-0 Plantas enteras (Ej.: orquídeas) y partes de plantas (Ej.: recipientes hechos de raíces) utilizados para propósitos ornamentales.

            .crd.crd--pink.crd--brad.p-4(x="75%" y="28%" numero="+")
              .h5.mb-2 Forraje
              p.mb-0 Forraje para animales,  producto de las hojas, frutos, etc.

            .crd.crd--pink.crd--brad.p-4(x="27%" y="52%" numero="+")
              .h5.mb-2 Materias primas para utensilios
              p.mb-0 Para artesanías y materiales de construcción. Grupos heterogéneos de productos incluyendo techado, bambú,  hojas para envolver, fibras para cestería, etc.

            .crd.crd--pink.crd--brad.p-4(x="71%" y="52%" numero="+")
              .h5.mb-2 Medicinas
              p.mb-0 Plantas medicinales (Ej.: hojas, corteza, raíces) utilizadas en la medicina tradicional y/o en las compañías farmacéuticas.

            .crd.crd--pink.crd--brad.p-4(x="32%" y="76%" numero="+")
              .h5.mb-2 Material vegetal
              p.mb-0 La corteza y hojas que proporcionan taninos y otras partes de plantas (especialmente hojas y frutos) usados como colorantes, etc.

            .crd.crd--pink.crd--brad.p-4(x="67%" y="76%" numero="+")
              .h5.mb-2 Perfumes y cosméticos
              p.mb-0 Plantas aromáticas que proporcionan aceites (volátiles) esenciales y otros productos utilizados para fines cosméticos.

    p.mb-5 Otro factor que se debe tener en cuenta al hablar sobre los productos forestales no maderables es su aplicación en diferentes áreas de la sociedad actual. A continuación, se presentan algunos de ellos y en qué se pueden usar:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span PFNM vegetales y procesos de aplicación

        table.mb-5
          caption Nota. Elaboración propia con base en Ministerio de Desarrollo Agrario y Riego (2015). 
          thead
            tr.tr--yellow
              th Productos forestales maderables no renovables
              th Procesos aplicados           
          tbody.text-center
            tr.tr--gray
              td Raíces, tallos, hojas, flores, frutos y semillas.            
              td Limpieza, clasificación, conservación y envasado.
            tr
              td Gomas, resinas, látex y otras sustancias similares.         
              td Concentración, coagulación, laminado y secado de sustancias del árbol.
            tr.tr--gray
              td Hojas, flores, frutos, semillas y vainas.        
              td Molienda, picado, pelado y machacado.
            tr
              td Plantillas medicinales y ornamentales.       
              td Limpieza, clasificación, preparación, conservación y envasado.
            tr.tr--gray
              td Cañas, carrizo y juncos.       
              td Preparación y tejido.
            tr
              td Raíces, tallos, hojas, flores, frutos y semillas.      
              td Fermentación y macerado.

    p.mb-5 Uno de los elementos clave para el buen manejo de productos forestales no maderables del bosque, implica necesariamente conocer cuál es la clasificación de los mismos, esto se puede aprender en el siguiente recurso de aprendizaje.

    .crd.crd--green01.crd--brad.p-4.mb-5      
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .half_bg.green
              figure
                img(src="@/assets/curso/temas/tema2/t2_09.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Palmas:</strong> construcción, elaboración de artesanías y ornamentos.
          .col-lg-5
            .half_bg.yellow
              figure
                img(src="@/assets/curso/temas/tema2/t2_10.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Resina de copal:</strong> uso ceremonial.
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .half_bg.green
              figure
                img(src="@/assets/curso/temas/tema2/t2_11.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Chicozapote:</strong> extracción de látex, alimento y elaboración de golosinas.
          .col-lg-5
            .half_bg.yellow
              figure
                img(src="@/assets/curso/temas/tema2/t2_12.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Agaves:</strong> alimentos, bebida, extracción de fibras y elaboración de destilados.
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .half_bg.green
              figure
                img(src="@/assets/curso/temas/tema2/t2_13.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Yuca:</strong> alimentos y extracción de compuestos químicos.
          .col-lg-5
            .half_bg.yellow
                img(src="@/assets/curso/temas/tema2/t2_14.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Palma camedor:</strong> ornamental y floristería.
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .half_bg.green
              figure
                img(src="@/assets/curso/temas/tema2/t2_15.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Hongos:</strong> alimentos y farmacología.
          .col-lg-5
            .half_bg.yellow
              figure
                img(src="@/assets/curso/temas/tema2/t2_16.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Mangle rojo:</strong> medicinal y extracción de taninos y colorantes.
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .half_bg.green
              figure
                img(src="@/assets/curso/temas/tema2/t2_17.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Resina de pino:</strong> extracción de productos para la industria.
          .col-lg-5
            .half_bg.yellow
              figure
                img(src="@/assets/curso/temas/tema2/t2_18.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Candelilla:</strong> extracción de cera para uso industrial.
        .row.justify-content-center
          .col-lg-5.mb-4.mb-lg-0
            .half_bg.green
              figure
                img(src="@/assets/curso/temas/tema2/t2_19.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Orégano:</strong> alimento y extracción de aceites.
          .col-lg-5
            .half_bg.yellow
              figure
                img(src="@/assets/curso/temas/tema2/t2_20.png", alt="alt").img1030.m-auto            
                p.p-4.mb-0 <strong>Cactáceas:</strong> ornamental, alimentos y extracción de derivados para la industria.
    
    p Para aprovechar los recursos forestales no maderables es necesario dar aviso o contar con la autorización de la autoridad competente. Hay recursos que por sus características requieren de la elaboración de un manejo forestal que incluya las acciones y procedimientos adecuados para su aprovechamiento.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Productos forestales no maderables aprovechados

    p.mb-5 Colombia es un país de vocación agrícola, cuenta con riquezas naturales consideradas como exóticas en el mundo, con amplia demanda en los mercados y atribuciones culturales ancestrales. En el censo de estos productos llama la atención una extensa gama de frutas ubicadas en zonas geográficas especiales, como en las dos regiones costeras y el trapecio amazónico. 

    .row.justify-content-center.mb-4
      .col-auto
        h4.box--green02 Frutos del bosque de alto valor nutritivo

    SlyderF.mb-3(columnas="col-lg-6 col-xl-4")
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_21.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Borojó
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_22.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Chontaduro
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_23.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Noni
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_24.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Copinol
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_25.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Mangostino
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_26.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Naidi o asaí
      .half_bg.green
        figure
          img(src="@/assets/curso/temas/tema2/t2_27.png", alt="alt").img1030.m-auto            
          h5.p-4.text-center Arazá

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        figcaption Nota. Tomada de Faor.org (2011).

      .col-lg-8      
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_01.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el tema “productos no maderables del bosque” le invito a revisar la sección de materiales complementarios o en el siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.fao.org/3/y1997s/y1997s0g.htm" target="_blank")
                    span ver sitio
                    i.fas.fa-link     

    .bg_img_02
      .row.mb-4
        .col-auto
          .crd.crd--h3
            .row.align-items-end
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
              .col.me-5
                h3.customH3 Productos característicos no maderables

      p.mb-5 A continuación, se describen tres de los productos no maderables del bosque que se pueden encontrar en las zonas especializadas para esos cultivos en Colombia:

      .row.justify-content-center.mb-4
        .col-lg-10
          AcordionA(tipo="b" clase-tarjeta="crd crd--green01 crd--brad")
            .row(titulo="Borojó")
              p Es un fruto carnoso, originario del pacífico colombiano, específicamente del departamento del Chocó, con gran aceptación gastronómica debido a sus propiedades energéticas y sabor único.
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/t2_28.png", alt="alt").m-auto
              .col-lg-8
                p Se prepara en jugo con leche y azúcar, se le atribuyen propiedades afrodisíacas, por lo que ha ganado el título de viagra natural, se le atribuyen propiedades curativas, también se utiliza como emplasto para curaciones, en algunos estudios se usa como un diurético.
                p.mb-0 Los documentos estudiados también mencionan que mejora problemas renales e inclusive se le atribuyen propiedades para corregir problemas de cáncer, en el caso de la cosmetología, se aplica como base para mascarillas para la piel grasa y masaje capilar. Finalmente, se recomienda su aplicación en tratamientos de embalsamiento.

            .row(titulo="Asaí también se le conoce como naidí")           
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/t2_29.png", alt="alt").m-auto
              .col-lg-8
                p Este producto es un fruto propio de la región pacífica colombiana, viene de la palma del murrapo, es un recurso económico promisorio para el Pacífico y Medio Atrato. Es una de las frutas más ricas en antioxidantes y tiene alto contenido de calcio. 
                p.mb-0 De amplio uso en la cultura alimenticia de la región. Es un gran aliado para perder peso y tiene aplicaciones medicinales en el tratamiento de Leucemia, Alzheimer, Cáncer, Parkinson y los Cólicos Menstruales. Además, es muy solicitado para productos de belleza, con aplicación cosmetológica y efectos estéticos.

            .row(titulo="Arazá")           
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/t2_30.png", alt="alt").m-auto
              .col-lg-8
                p Es originario de la región Amazónica occidental tiene muchas propiedades para mejorar el funcionamiento del organismo humano. Posee un alto contenido en pectina (puede ser empleado en las comidas), es apropiada para producir jugos, helados y mermeladas. Aporta vitamina C, es antidiarréico, actúa como vaso protector, analgésico, antiespasmódico, bactericida, antineurálgico, depurativo, digestivo, afrodisiaco, hipotensor, sedante, ansiolítico, antidepresivo, antihistérico, calmante y tranquilizante.
                .crd.crd--yellow.p-3
                  p.mb-2 Para profundizar en el conocimiento sobre productos no maderables, le invito a revisar el documento Productos no maderables, alternativa de conservación de nuestros bosques, que se encuentra en la sección de material complementario o a través del siguiente enlace: 
                  .row
                    .col-auto                      
                      a.boton.color-acento-botones.texto-blanco(href="     http://www.humboldt.org.co/es/actualidad/item/1455-productos-forestales-no-maderables-alternativa-de-conservacion-de-nuestros-bosques" target="_blank")
                        span ver sitio
                        i.fas.fa-link   

            .row(titulo="Otros productos")                
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema2/t2_31.png", alt="alt").m-auto
              .col-lg-8
                p Es importante mencionar otros frutos se inventarian como parte de los PFNM como: el chontaduro, copoazú, cocona, almirajo y níspero, estos son algunos de los frutos que en determinadas regiones se consumen y su comercio es bastante aceptable. Por ejemplo el chontaduro en el departamento del Valle del Cauca donde se conoce como el huevo vegetal por su alto valor nutricional. 
                p.mb-0 Otros frutos como el noni, aceptado por sus condiciones medicinales que ha sido incorporado a las fórmulas de los médicos naturalistas y galenos que difieren de los medicamentos a base de químicos y prefieren los de origen vegetal.

    .row.justify-content-center
      .col-lg-10                
        p.mb-5 Existen como PFNM otras frutas como el camu camu, los conocedores de esta fruta dicen que tiene más ácido cítrico que los mismos limones. Sabiendo todo esto, lo invito a ver el siguiente recurso de aprendizaje que le explica más este tema con una caracterización:

        .titulo-sexto.color-acento-contenido.mb-5          
          span Productos forestales no maderables animales aprovechados por el ser humano.

        figure(data-aos="zoom-in").mb-5
          img(src="@/assets/curso/temas/tema2/t2_32.svg", alt="alt")

    
    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Usos de los PFNM, con fines medicinales

    p.mb-5 En la categoría “medicinal” se encontró que del 37,5% de las plantas se usan las hojas para múltiples preparaciones, del 25,0% se usa toda la planta debido al componente activo presente en todos los órganos y del 15,0% se aprovecha solamente la flor. Son poco frecuentes los remedios elaborados a partir del tallo, raíz o fruto.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5
        .cajon.cjn--yellow.p-4
          p.mb-0 La preparación de remedios en la medicina tradicional se basa principalmente en siete formas, donde el 60% son realizadas en infusión, el 13% mediante azotes sobre el cuerpo y el 9% a través de baños en la zona afectada. La preparación de remedios en jugos es usada en menor proporción. Por lo anterior, se le invita a ver las siguientes figuras, que muestran la distribución por porcentaje de su uso en medicina y en otros productos.
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Usos de los productos no maderables de bosques

        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/t2_33.svg", alt="alt").m-auto
          figcaption.mt-2 Nota. Elaboración propia con base en Potosí, Villalba y Arboleda (2017).

    .bg_img_02
      .row.mb-4
        .col-auto
          .crd.crd--h3
            .row.align-items-end
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
              .col.me-5
                h3.customH3 Productos forestales no maderables

    p.mb-5 En este grupo de productos están las semillas, hojas, hongos, fibras, frutos o inclusive la miel de abeja entre otros. Su producción se genera de manera silvestre o en plantaciones. A continuación, se muestran ejemplos de productos censados como derivados del bosque, los cuales se pueden ver en el siguiente recurso de aprendizaje: 

    .row.justify-content-center.mb-5
      .hr_divider.mb-4
      .col-lg-10
        SlyderB.mb-5(:datos="datosSlyder")
      .hr_divider.mb-4
      .col-lg-10.mb-5
        p.box--green.p-4 Entre los productos no maderables que se obtiene del bosque en forma directa o indirecta se encuentran los siguientes:

      .col-lg-10
        .titulo-sexto.color-acento-contenido          
          span Productos no maderables que se obtienen de los bosques

        table.mb-5
          caption Nota. Elaboración propia con base en el Ministerio de Desarrollo Agrario y Riego (2015). 
          thead
            tr.tr--yellow
              th Achiote
              th Castaña   
              th Sangre de grano         
          tbody.text-center
            tr.tr--gray
              td Aguaje           
              td Carambolo
              td Shiringa
            tr.tr--gray
              td Algarrobo           
              td Cúrcuma
              td Tara
            tr.tr--gray
              td Barbasco          
              td Palma aceitera
              td Té
            tr.tr--gray
              td Camu camu         
              td Pijuayo
              td Uña de gato
            tr.tr--gray
              td Caucho        
              td 
              td 

      .col-lg-8        
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_01.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el tema le invito a revisar el siguiente documento Productos forestales no maderables asociados a bosques de roble el cual se encuentra en la sección de material complementario o a través del siguiente enlace.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/v15n2a03.pdf')" target="_blank")
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
              h3.customH3 Manejo de productos forestales maderables no renovables          

    p En relación con la gestión de la información sobre el estado de la producción del recurso forestal, como soporte para el desarrollo de sostenible de los bosques del país y para mantener los servicios ecosistémicos, es necesario implementar estrategias que contribuyan a la toma de decisiones en la gestión de los bosques para impulsar el uso sostenible de:

    .row.justify-content-center.mb-5
      .col-10.col-lg-3.mb-4.mb-lg-0
        .crd.crd--paleGray.crd--brad(data-aos="flip-left").fullhg.p-4
          figure.mb-2
            img(src="@/assets/curso/temas/tema2/t2_44.svg", alt="alt").img125.m-auto
          h5.text-center El capital natural
      .col-10.col-lg-3.mb-4.mb-lg-0
        .crd.crd--paleYellow.crd--brad(data-aos="flip-left").fullhg.p-4
          figure.mb-2
            img(src="@/assets/curso/temas/tema2/t2_43.svg", alt="alt").img125.m-auto
          h5.text-center La economía forestal
      .col-10.col-lg-3
        .crd.crd--paleGreen.crd--brad(data-aos="flip-left").fullhg.p-4
          figure.mb-2
            img(src="@/assets/curso/temas/tema2/t2_42.svg", alt="alt").img125.m-auto
          h5.text-center El desarrollo comunitario

    p En la renovación productiva de las actividades agrícolas de las áreas y zonas con uso potencial productivo es importante fomentar el manejo adecuado agrícola para la dinamización de la economía forestal del país y evitar la extinción de especies con el fin de consolidar las cadenas de valor forestal y agroforestal.

    .color-acento-botones(data-aos="zoom-in").mb-5
      .bloque-texto-c.color-secundario.p-4
        i.fas.fa-quote-right
        p.mb-2 #[strong Otro aspecto a considerar está relacionado con el fomento de la aplicación de procesos de conservación y manejo sostenible de los bosques; por otro lado, es clave revisar con los censos forestales para proyectar la ordenación forestal de Colombia y aportar a los procesos de conservación y manejo sostenible del bosque, en el contexto de la huella del carbón.]
        span - Conpes 4021, 2020.

    p.text-center.mb-5 Como parte de su aprendizaje lo invito a ver una videoclase sobre los productos forestales no maderables del bosque.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MW7jlvhH_no" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   
    

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    datosSlyder: [
      {
        titulo: '',
        texto:
          '<strong>Goma arábiga:</strong> se obtiene a partir de la cicatrización de las acacias, utilizada en la preparación de chicles, gomas, pasteles y vinos; o en sustancias industriales, tales como tintes y pegamentos, y en ungüentos, bálsamos y cosméticos.',
        imagen: require('@/assets/curso/temas/tema2/t2_34.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Corcho:</strong> es un producto sacado de la corteza del alcornoque. Su elasticidad y permeabilidad le dan una aplicación industrial en la elaboración de tapones de vinos, diseño y moda.',
        imagen: require('@/assets/curso/temas/tema2/t2_35.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Caucho:</strong> se extrae de la savia de varias plantas, con amplio uso en el diseño industrial, por ejemplo, en la elaboración de llantas para carros.',
        imagen: require('@/assets/curso/temas/tema2/t2_36.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Látex:</strong> se adquiere a partir de las grasas, ceras y resinas gomosas de plantas de amplio uso en la elaboración de condones y guantes de cirugía.',
        imagen: require('@/assets/curso/temas/tema2/t2_37.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Penicilina:</strong> es una sustancia producida por el hongo <i>Penicillium Notatum</i>, por su acción antibactericida, se utiliza en la preparación de antibióticos para humanos.',
        imagen: require('@/assets/curso/temas/tema2/t2_38.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Resinas:</strong> se extraen de algunas especies de los géneros Pinus y Abies.',
        imagen: require('@/assets/curso/temas/tema2/t2_39.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Fibras:</strong> de amplio uso en artesanías para la obtención de cordeles y en la industria textil.',
        imagen: require('@/assets/curso/temas/tema2/t2_40.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<strong>Ceras:</strong> por ejemplo, la candelilla (Euphorbia antisiphylitica).',
        imagen: require('@/assets/curso/temas/tema2/t2_41.png'),
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
