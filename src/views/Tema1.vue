<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ubicación geográfica de la zona forestal

    .bg_img_02

      .row.justify-content-center.pt-5.mb-5
        .col-lg-10
          .row.justify-content-center.mb-5      
            .col-auto.bg--green02.gx-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/tema1/t1_00.jpg", alt="alt").m-auto
            .col-lg.bg--green02
              p.mb-0.p-4.pt-lg-3.pt-xl-4.px-lg-3 Para ubicar geográficamente la zona forestal de los productos no maderables del bosque, es importante el dominio de las herramientas como la cartografía y la georreferenciación. El conocimiento y aplicación de estas permite la ubicación de las zonas forestales para el aprovechamiento de esos productos, por lo que la cartografía representada en los mapas y la georreferenciación que permite contar con los sistemas de información geográfica, ayudan a los habitantes rurales a ubicar y disponer de dichas zonas. 


    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Cartografía

    .row.justify-content.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p En el contexto de la relación ser humano-naturaleza, el relieve del terreno es determinante para la recolección de la información requerida para el logro de propósitos científicos, técnicos y económicos, es a través de los diferentes trabajos o investigaciones que se hace el levantamiento de censos de la flora silvestre, mediante estos instrumentos. 
        p Así mismo, es importante identificar la dinámica tecnológica aplicada en el levantamiento de información con la introducción de fotografías aéreas y la fotogrametría que respondan a las necesidades de la ciencia, la tecnología y la sociedad, por lo que también se deben revisar los avances de las técnicas que se utilizan en la cartografía, como es el caso de las reproducciones cartográficas.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_01.svg", alt="alt").img400.m-auto

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Conceptualización

    p.mb-5 La cartografía se considera una ciencia aplicada, responsable de reunir, realizar y analizar medidas y datos del relieve de las regiones de la tierra, relacionados con las curvas de nivel, cuerpos de agua; además, de elementos artificiales y humanos, tales como: las redes de transporte y los centros poblados entre otros, con su respectiva representación gráfica en diferentes escalas y dimensiones lineales.
    
    .row.justify-content-center.mb-5
      .col-lg-10.position-relative        
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_02.png", alt="alt")
          figcaption Lo anterior, según el Instituto Geográfico Agustín Codazzi (IGAC, 2018).
        .hoja_01
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/recursos/hoja_01.png", alt="alt").img190

    p.mb-5 Es función esencial de la cartografía facilitar la representación cualitativa y cuantitativa del relieve de un terreno en el que están:

    .row.justify-content-center.mb-5
      .col-lg-10.position-relative        
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_03.png", alt="alt")

    p.text-center Lo anterior, se logra mediante el uso de herramientas de graficación del relieve cómo:

    .row.justify-content-center.mb-4(data-aos="flip-left")
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1_04.png')})`}")
        .bloque-texto-g__texto.p-4
          ul.fa-ul.position-relative.mb-0
            li.mb-2
              i.fa-li.fas.fa-circle.cstm--bullet
              | #[strong La digitalización del terreno.]
            li.mb-0
              i.fa-li.fas.fa-circle.cstm--bullet
              | #[strong El mapeo gráfico, representado en mapas digitales.]         
       
    p Una visión conjunta de métodos aplicados en las representaciones del relieve se estructura a partir de la información de la calidad del terreno, ofreciendo alto impacto de imagen visual, frente a la información numérica. De esta manera, este es considerado como la forma integrada de la superficie de la tierra en dimensión 3D, de dos formas: cualitativa y cuantitativa.

    .color-acento-botones(data-aos="zoom-in").mb-5
      .bloque-texto-c.color-secundario.p-4
        i.fas.fa-quote-right
        p.mb-2 #[strong Ahora bien, se hace necesario definir que los planos y mapas cartográficos son representaciones gráficas que muestran las características físicas de un terreno, tales como: lagos y bosques, así como los diferentes accidentes geográficos en los valles y colinas, los cuales son llamados, relieves verticales.]
        span - Catastro Bogotá, 2019

    .row.justify-content-center.mb-5
      .col-lg-10    
        .crd.crd--yellow.p-4
          .row.justify-content-around.align-items-center
            .col-auto
              img(src="@/assets/curso/recursos/cta_01.svg").img150
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0                  
                  p.mb-0 Para profundizar en el tema se invita a revisar el siguiente enlace del IGAC.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.igac.gov.co/es/contenido/areas-estrategicas/formatos-y-escalas-de-mapas" target="_blank")
                    span ver sitio
                    i.fas.fa-link                    

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Herramientas de apoyo de la cartografía

    p.mb-5 El desarrollo del área del conocimiento de la cartografía, toma como factor clave las herramientas cartográficas, entre las cuales se encuentran:

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_05.png", alt="alt")

    p Es clave resaltar la importancia de cada una de ellas en la solución de problemas propios de la ciencia del globo terráqueo, en el marco general de las tecnologías. 

    p.mb-5 Por esta razón, la cartografía utiliza un lenguaje gráfico, por lo que hace una representación del comportamiento de un terreno, a través de símbolos y rótulos, referenciados en las áreas específicas de los componentes. La información levantada tiene amplia aplicación en la planeación territorial, planes de ordenamiento territorial, de igual forma que en los planes medioambientales, en estudios de suelos e investigaciones especiales. 

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Características de la cartografía

    p La cartografía está relacionada con la elaboración de mapas, esta es una disciplina que ocupa el concepto de producción, difusión y estudio de los mapas, por lo que también se considera como un conjunto de técnicas o un arte para la elaboración de los mapas.

    p Aquí es de vital importancia revisar el tema del mapa cartográfico, el cual representa de manera gráfica y a escala, en una superficie plana las siguientes características de un terreno:

    .row.justify-content-center.mb-5
      .col-10.col-lg-3.mb-4.mb-lg-0
        .crd.crd--paleGray.crd--brad(data-aos="flip-left").p-4
          figure.mb-2
            img(src="@/assets/curso/temas/tema1/t1_06.svg", alt="alt").img125.m-auto
          h5.text-center La condición geografía
      .col-10.col-lg-3.mb-4.mb-lg-0
        .crd.crd--paleYellow.crd--brad(data-aos="flip-left").p-4
          figure.mb-2
            img(src="@/assets/curso/temas/tema1/t1_07.svg", alt="alt").img125.m-auto
          h5.text-center La condición geografía
      .col-10.col-lg-3
        .crd.crd--paleGreen.crd--brad(data-aos="flip-left").p-4
          figure.mb-2
            img(src="@/assets/curso/temas/tema1/t1_08.svg", alt="alt").img125.m-auto
          h5.text-center La condición geografía

    .row.justify-content-center.mb-4
      .col-auto
        p.box--green.mb-0 Todas ellas influyen en un área de la tierra o de cualquier otro cuerpo celeste.

    p.mb-5 De igual forma, la proyección cartográfica es un sistema de representación gráfica donde se establecen relaciones ordenadas, entre los puntos de una superficie curva de la tierra y los de una superficie plana para generar las propuestas gráficas representadas en los mapas.

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Fundamentos de la cartografía

    p.mb-5 Para lograr lo anterior es necesario identificar los fundamentos para la representación de la cartografía, basada en modelos relacionados con la tierra. De igual manera, para un buen uso de esta se requiere el dominio de conocimientos sobre:

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_09.svg", alt="alt")

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Clasificación de la cartografía.

    p.mb-5 En cuanto a la cartografía básica esta se interpreta como el proceso de observación directa y medición de la superficie terrestre de los elementos que sirven de base y referencia para su uso generalizado en la representación gráfica de la tierra. Por lo anterior, le invito a revisar el siguiente recurso de aprendizaje, en el cual podrá conocer su clasificación:

    .row.justify-content-center.mb-5
      .col-auto.mb-4.mb-xl-0
        .crd_slyde
          .crd_slyde--img.crd_img_bg_01               
          .crd_slyde--body
            h5.text-center.mb-3 Cartografía temática
            p.mb-0 Elabora mapas con temas específicos, los cuales son diseñados para mostrar características particulares y su distribución sobre la superficie terrestre. Estos pueden dividirse en mapas turísticos, mapas políticos, cartas náuticas o aeronáuticas, mapas geológicos, mapas de comunicación, cartografía submarina, entre otros.
      .col-auto
        .crd_slyde
          .crd_slyde--img.crd_img_bg_02         
          .crd_slyde--body
            h5.text-center.mb-3 Cartografía digital
            p.mb-0 Es una forma de cartografía que utiliza las herramientas de la tecnología informática en la representación gráfica de mapas. Este tipo utiliza un sistema de información geográfica que codifica y dirige variables y datos geoespaciales, por medio de diversos recursos como base de datos, programas de diseño asistido por computador de cartografía automatizada y de teledetección, así como aplicaciones estadísticas.

    separador

    .bg_img_01

      #t_1_2.titulo-segundo.color-acento-contenido.pt-5
        h2 1.2 Georreferenciación 

      p.mb-5 La georreferenciación es una herramienta que permite determinar la posición de un elemento en un sistema de coordenadas, esta se hace triangulando señales, por lo que deben existir dos sistemas de coordenadas: el sistema de origen y el sistema de destino, este sistema se utiliza para asignar ubicaciones geográficas a los objetos en un mapa; Ej.: la ubicación de zonas forestales objeto del aprovechamiento de los PFNM.

      .row.mb-4
        .col-auto
          .crd.crd--h3
            .row.align-items-end
              .col-auto
                figure
                  img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
              .col.me-5
                h3.customH3 Definición

      .row.justify-content-center.mb-5
        .col-lg-8
          p La georreferenciación es una simbiosis entre herramientas tecnológicas de los sistemas de geoposicionamiento global y de los sistemas de información geográfica, los cuales muestran la distribución espacial de predios o lugares, teniendo en cuenta sistema de coordenadas de latitud y longitud global, los que se plasman a través de un mapa, por lo que se asigna una ubicación espacial específica, lo anterior, permite que la información de la zona esté constantemente actualizada para su uso posterior.
          p.mb-0 En la georreferenciación o rectificación se determina la posición de un elemento en un sistema de coordenadas espaciales diferente al que se encuentra. Existen dos sistemas de coordenadas a saber:
        .col-lg-4.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/t1_12.png", alt="alt").img400.m-auto

      .row.justify-content-center.mb-5
        .col-lg-8
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/t1_13.svg", alt="alt")

      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-3 Para tener en cuenta…

          .row.justify-content-center.mb-4(data-aos="flip-left")
            .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1_14.jpg')})`}")
              .bloque-texto-g__texto.p-4
                p.mb-0 Estos sistemas hacen referencia a una zona específica para la recolección de datos u otro tipo de información. En su aplicación es esencial identificar los mismos referentes en los documentos y obtener las mismas coordenadas en los dos (2) sistemas.
          p Por lo anterior, en cualquier lugar del país la zonificación; es decir, la georreferenciación, es parte del proceso de ordenamiento territorial y en ella se define el enfoque de las zonas de manejo o destino homogéneo o que a un futuro serán sometidas a normas de uso específico para cumplir los objetivos del área.

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Mapas topográficos y mapas temáticos

    p Los mapas topográficos hacen relación a los accidentes o relieves terrestres, por lo que la utilización de colores en los diversos niveles junto con otros símbolos y trazos auxiliares permiten reconocer montañas, valles, ríos, y otras características del terreno, a un nivel muy detallado, mediante este se pueden analizar las curvas de nivel de la zona que se estén estudiando.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.cjn--yellow.p-4
          p Por otro lado, los mapas temáticos requieren para su elaboración de un mapa topográfico como base. Un ejemplo de un mapa temático son las cartas náuticas que utilizan los barcos para su navegación, dependiendo del tema o fenómeno que representan, los mapas temáticos se pueden clasificar en: 
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              .crd.crd--white.pe-5.pt-3
                ul.fa-ul.position-relative.mb-0
                  li.mb-2
                    i.fa-li.fas.fa-circle.cstm--bullet
                    | #[strong Mapas viales.]
            .col-auto.mb-4.mb-lg-0
              .crd.crd--white.pe-5.pt-3
                ul.fa-ul.position-relative.mb-0
                  li.mb-2
                    i.fa-li.fas.fa-circle.cstm--bullet
                    | #[strong Urbanos.]
            .col-auto
              .crd.crd--white.pe-5.pt-3
                ul.fa-ul.position-relative.mb-0
                  li.mb-2
                    i.fa-li.fas.fa-circle.cstm--bullet
                    | #[strong Climáticos, entre otros.]

    .row.justify-content-center.mb-5
      .col-auto.mb-4.mb-xl-0
        .crd_slyde
          .crd_slyde--img02.crd_img_bg_03               
          .crd_slyde--body
            h5.text-center.mb-3 Mapas topográficos
            p.mb-0 En ellos se muestran las relaciones espaciales entre los diferentes elementos geográficos que lo integran, tales como edificios, carreteras, límites, cursos o masas de agua, etc.

      .col-auto
        .crd_slyde
          .crd_slyde--img02.crd_img_bg_04    
          .crd_slyde--body
            h5.text-center.mb-3 Mapas temáticos 
            p.mb-0 Incluyen descripciones de los fenómenos geográficos, relacionados con aspectos geológicos (especialmente de suelos y tipos de estratos de rocas), a los usos del suelo y a la vegetación.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4
        p Siguiendo con el tema, un mapa es la representación de una extensión de tierra en una superficie plana, por lo que se puede observar su diferencia en la siguiente figura.
      .col-lg-8.position-relative.mb-4       
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Definición de mapas topográficos
        .hoja_02
          figure
            img(src="@/assets/curso/recursos/hoja_02.png", alt="alt").img150
        figure
          img(src="@/assets/curso/temas/tema1/t1_17.jpg", alt="alt")
          figcaption Nota. Elaboración propia con base en fao.org.co (s.f.). 
      .col-lg-10
        p Para tener en cuenta…
        .row.justify-content-center(data-aos="flip-left").mb-4
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/t1_18.jpg')})`}")
            .bloque-texto-g__texto.p-4
              p.mb-0 Los planos, normalmente son dibujos a gran escala mientras que los mapas son dibujos a pequeña escala, dependiendo de la escala que se usa para dibujar.

        p.mb-4 En adición, los planos y mapas cartográficos son dibujos que muestran las principales características físicas del terreno, como, por ejemplo:
        
      .col-lg-10
        .crd.crd--yellowGrad
          .row.justify-content-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/temas/tema1/t1_19.png", alt="alt").img250.m-auto
            .col-lg.py-3
              ul.fa-ul.position-relative.mb-0
                li.mb-2
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Cercas.
                li.mb-2
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Caminos.
                li.mb-2
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Ríos.
                li.mb-2
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Lagos.
                li.mb-2
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | Bosques.
                li.mb-2
                  i.fa-li.fas.fa-circle.cstm--bullet
                  | La diferencia de altura que existen entre los accidentes de la tierra,  tales como:

                p.ps-3.mb-2 #[span.blt--red -] valles.
                p.ps-3 #[span.blt--red -] Colinas (llamadas también relieves verticales).

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Información recogida en los mapas topográficos y su simbología

    p.mb-5 En los mapas topográficos se observa detalladamente el relieve de una zona geográfica a gran escala, en él se presentan los siguientes elementos:

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_20.svg", alt="alt")

    p En estos se puede observar información clave para el desarrollo de las diferentes actividades que se requieran, mientras que en los planos topográficos es importante resaltar los símbolos que representen las características del terreno que se quiere representar.
    p.mb-5 Para representar los elementos que se detallan en un mapa se utilizan símbolos y convenciones universales, su representación es de fácil interpretación y observación, por lo que es una información referencial. A continuación, se relacionan algunos símbolos convencionales utilizados en los mapas topográficos:

    .row.justify-content-center.mb-5
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_21.png", alt="alt")

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Núcleos de población y construcciones aisladas
    
    .row.justify-content-center.mb-5
      .col-lg-8
        p En un mapa topográfico se presentan los núcleos de población tales como: ciudades, pueblos o corregimientos, veredas, caseríos y barrios, otros aspectos que también se representan son equipos y situaciones lindantes incluidas dentro de la población: iglesias, parques, cementerios, monumentos históricos, escuelas, campos de fútbol o centros comerciales.
        p Cuando se trata de ciudades con mayor número de habitantes, se hacen representaciones mediante símbolos denominadas casco urbano, los pueblos se representan por un conjunto de edificaciones aisladas entre las que se pueden visualizar fácilmente la iglesia o el cementerio. En casos especiales de representación de poblaciones, se muestra la altitud de su situación geográfica y como referente se toma un edificio. Por ejemplo, la iglesia, la cual se ubica en un triángulo, llamado vértice geodésico.

      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_22.svg", alt="alt").img400.m-auto

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Carreteras y caminos

    p.mb-5 En relación con las carreteras y los caminos, estos permiten comunicar las poblaciones entre sí y en otros facilita el acceso a determinados lugares a saber:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      figure
        img(src='@/assets/curso/temas/tema1/t1_23.png' alt='')
      figure
        img(src='@/assets/curso/temas/tema1/t1_24.png' alt='')
      figure
        img(src='@/assets/curso/temas/tema1/t1_25.png' alt='')
      figure
        img(src='@/assets/curso/temas/tema1/t1_26.png' alt='')
      figure
        img(src='@/assets/curso/temas/tema1/t1_27.png' alt='')

    p Todos estos factores son determinantes en el acceso o ubicación real de las fuentes de información que se requieran trabajar. 

    p En los mapas de topografía de carreteras se asocian elementos de información complementarias como puentes o gasolineras. En el caso de la señalización de los caminos se utiliza una línea fina continúa, cuando se trata de caminos carreteables y una línea discontinua que presenta un camino ubicado estratégicamente para el desarrollo de las labores de explotación del bosque. 

    .row.justify-content-center.mb-5
      .col-lg-4.bg--greenBrad.vh--100
        figure.pt-4
          img(src="@/assets/curso/temas/tema1/t1_28.svg", alt="alt").img400.m-auto
      .col-lg-8.bg--green.vh--100.p-4
        p Generalmente, estos caminos se modifican frente a la modernidad y quedan fácilmente en desuso, esto significa que la red de caminos en una montaña sometida a una explotación forestal puede ser extensa para los usuarios de la vía. 
        p En la representación de carreteras y caminos, igual que los elementos de georreferenciación, los más representativos son los mojones kilométricos, los puentes y las gasolineras. Esta información permite la localización de zonas geográficas a partir de los mojones kilométricos ubicados en una senda derivada de la carretera, y proyectada al interior de la montaña.

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Hidrografía

    p El mapa topográfico detalla la información hidrográfica del área referencial. En él se presentan los cauces de aguas naturales, como los ríos y los arroyos, así como los que el ser humano ha construido, es decir los canales.

    p.mb-5 Otros componentes hidrográficos a considerar están los relacionados con el relieve oceánico y son: 

    .row.justify-content-center.mb-5
      .col-auto.mb-4.mb-lg-0
        figure(data-aos="zoom-in").pt-4
          img(src="@/assets/curso/temas/tema1/t1_29.png", alt="alt").img500.m-auto
      .col-lg
        ul.fa-ul.position-relative.mb-0
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Cabos.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Ensenadas.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Calas.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Playas.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Acantilados.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Marismas.
          li.mb-2
            i.fa-li.fas.fa-circle.cstm--bullet
            | Faros, etc.
        p.ms-3.mb-2 Ahora, en relación con los mares se cuenta con información diferencial relacionada con:

        ul.fa-ul.position-relative.mb-0
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Profundidades.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Naturaleza de los fondos.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Islotes.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Escollos.
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Enfiladas. 
          li.mb-1
            i.fa-li.fas.fa-circle.cstm--bullet
            | Líneas de entrada a los puertos.

    .bg_img_01.mb-5
      p.mb-5 Al hacer el análisis de un mapa topográfico con énfasis en lo hidrológico se pueden observar cada una de las partes anteriormente mencionadas, por lo que se invita a revisar la siguiente figura:

      .row.justify-content-center
        .col-lg-8(data-aos="zoom-in")
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            span Símbolos en un mapa topográfico
          figure
            img(src="@/assets/curso/temas/tema1/t1_30.jpg", alt="alt")
            figcaption Nota. Tomada de Aristasur (s.f.)

    .row.mb-4
      .col-auto
        .crd.crd--h3
          .row.align-items-end
            .col-auto
              figure
                img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
            .col.me-5
              h3.customH3 Límites administrativos y datos estadísticos

    p.mb-5 Los diferentes tipos de límites administrativos aparecen representados con trazos formados por líneas y cruces. Estos se relacionan con fronteras internacionales, límite provincial o municipal, también en divisiones departamentales y municipales, como delimitaciones de zonas urbanas, rurales y forestales, etc.

    .row.justify-content-center
      .col-lg-8 
        .row.mb-4
          .col-auto
            .crd.crd--h3
              .row.align-items-end
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
                .col.me-5
                  h3.customH3 Toponimia

        p.mb-5 La nucleación de la población, los montes, los ríos o los valles, se conoce como topónimo. Dependiendo de su extensión, cuando existen grandes extensiones o accidentes geográficos de alto impacto se habla por ejemplo de un caserío, una cima, un arroyo o un paraje. En el caso de parajes o sitios con menor extensión se hace referencia a microtopónimo: un barranco o una finca. 
        .row.mb-4
          .col-auto
            .crd.crd--h3
              .row.align-items-end
                .col-auto
                  figure
                    img(src="@/assets/curso/recursos/h3_icon.svg", alt="alt").img85
                .col.me-5
                  h3.customH3 Vegetación

        p En relación con los mapas topográficos de la vegetación, en ellos se representa el uso del suelo que puede ser agrícola o forestal. Además, se muestran las masas forestales presentes en la zona. De igual forma se identifican los árboles, tales como:
      .col-lg-4.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/t1_31.png", alt="alt")

    figure(data-aos="zoom-in")
      img(src="@/assets/curso/temas/tema1/t1_32.svg", alt="alt")  

    
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
