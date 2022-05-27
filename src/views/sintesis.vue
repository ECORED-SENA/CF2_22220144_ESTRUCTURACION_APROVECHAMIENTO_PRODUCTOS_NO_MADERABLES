<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span #[i(style="font-size:17pt;").fas.fa-sitemap]
      h1 Síntesis

    .bg_img_02

      p.pt-5 El contenido del presente documentos permite la ubicación de las zonas forestales objeto del aprovechamiento de los productos no maderables del bosque, mediante el uso adecuado de las herramientas como la cartografía a través de los mapas topográficos y los planos de las zonas forestales, los cuales posibilitan la lectura de los símbolos que indican todas las características de la zona boscosa; la georreferenciación ubicará, mediante las coordenadas de determinado lugar, las zonas de aprovechamiento forestal de los productos no maderables.

      .row.justify-content-center.mb-5
        .col-lg-10
          .row.justify-content-center.pt-5.mb-5      
            .col-auto.gx-0.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/s_01.jpg", alt="alt").m-auto
            .col-lg.bg--yellow
              p.mb-0.p-4.pt-lg-3.pt-xl-4.px-lg-3 Ubicados en la zona seleccionada se puede proceder a realizar la clasificación de los elementos de la biodiversidad, puede ser una clasificación por reinos, reino vegetal (todas las plantas, árboles, y especies vegetales) y el reino animal, (mamíferos, roedores, reptiles etc.) y los hongos (setas y champiñones).

      p.mb-4 Otra clasificación que se puede efectuar es por las partes que producen los PFNM, en las plantas, la raíz, el tallo, las hojas, etc., y en los animales, todo el animal o algunas partes de él; una última clasificación es por el uso final de los PFNM, alimenticios, medicinales, industriales, etc. Todos estos inventarios dejarán cuantificar los diferentes recursos aprovechables del bosque, interpretando las métricas requeridas en cada inventario.

      .row.justify-content-center.mb-5
        .col-lg-10
          .cajon.cjn--green.p-4
           p.mb-0 Finalmente, se deben observar y aplicar todas las recomendaciones que organizaciones internacionales como la OIT, sugieren con respecto a los elementos de protección que cada persona debe utilizar cuando realice trabajos de tipo forestal, estos elementos brindarán seguridad y salud en las jornadas de trabajo.

      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
