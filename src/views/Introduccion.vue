<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg_img_01
      p.pt-5.mb-5 Los Productos Forestales no Maderables del bosque - PFNM, son una oportunidad de subsistir para las poblaciones menos favorecidas de las zonas rurales, afrodescendientes, campesinos y comunidades indígenas, porque viven del aprovechamiento de estos, por los que obtienen ingresos, algunos monetarios por su venta y en otras oportunidades el beneficio es directo cuando los utiliza para su alimentación o como medicinas. Por lo anterior, se invita a revisar el siguiente video con el fin de conocer grosso modo el tema de este componente formativo:

      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)  



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
