<template>
  <div>
    <div class="blue darken-1 white--text px-8 py-6 rounded-br-pill">
      <span class="d-block text-uppercase text-lg-h3">Tus resultados</span>
    </div>

    <v-card
      class="rounded-lg rounded-bl-xl mx-9 my-8"
      color="#F2F9FD"
      style="border-color: #0083ca; border-width: 2px"
      outlined
      flat
    >
      <div class="px-9 py-9">
        <span
          class="d-block blue--text text--darken-4 font-weight-black text-subtitle-1"
          >La siguiente información es referencial. Considera que tu decisión
          vocacional depende de varios factores.</span
        >
        <span
          class="d-block mt-6 mb-10 blue--text text--darken-4 font-weight-bold text-caption"
          >El siguiente ranking de preferencias permite explorar e interpretar
          tus preferencias vocacionales asociadas a las carreras de Ingeniería
          que impartimos en la Facultad. Es útil para analizar visualmente por
          cuales áreas tienes más preferencia.
        </span>

        <v-img
          src="/assets/mensaje-vocacion.png"
          width="210"
          height="200"
          contain
        ></v-img>
      </div>
    </v-card>

    <!-- BARRAS -->
    <div v-if="carreras.length > 0" class="w-full pl-8 pr-4 mb-8">
      <div
        v-for="(carrera, index) in datosCarrera"
        :key="index"
        @click="elegirCarrera(carrera.title)"
        class="cursor-pointer container-barra d-flex justify-space-between grey lighten-3 rounded-pill mb-4"
      >
        <div class="d-flex align-center justify-center mr-2 px-6 py-4">
          <div class="mr-4">
            <v-img
              :src="`/carreras/${carrera.icono}`"
              width="32"
              height="32"
              contain
            ></v-img>
          </div>
          <div class="d-flex flex-column">
            <span class="d-block text-sm text-uppercase">{{
              carrera.title
            }}</span>
            <v-card
              height="2px"
              width="30px"
              :color="carrera.color"
              flat
            ></v-card>
          </div>
        </div>

        <div class="py-2">
          <div class="white barra rounded-br-pill rounded-tr-pill py-2 px-2">
            <v-card
              class="rounded-br-pill rounded-tr-pill d-flex align-center"
              :color="color_ranking(index)"
              :height="30"
              :width="carrera.puntaje > 0 ? ancho_barra(carrera.puntaje) : 0"
              flat
            >
              <span class="white--text d-block px-4 text-overline">{{
                porcentaje(index, carrera.puntaje)
              }}</span>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <!-- BARRAS -->

    <!-- BOTON VOLVER A REALIZAR TEST -->
    <div class="d-flex justify-center">
      <v-btn color="blue darken-2" outlined rounded
        >Volver a realizar el test</v-btn
      >
    </div>
    <!-- BOTON VOLVER A REALIZAR TEST -->

    <!-- CARRERA ELEGIDA -->
    <v-card
      v-if="infoCarreraActiva"
      class="rounded-lg rounded-bl-xl mx-9 my-8 py-8 px-6 blue--text text--darken-4"
      color="#F2F9FD"
      style="border-color: #0083ca; border-width: 2px"
      outlined
      flat
    >
      <!-- NOMBRE E ICONO CARRERA -->
      <div class="d-flex justify-space-between align-center">
        <span class="d-block text-uppercase font-weight-black">{{
          infoCarreraActiva.carrera
        }}</span>

        <div>
          <v-img
            :src="`/carreras/${infoCarreraActiva.icono}`"
            width="64"
            height="64"
            contain
          ></v-img>
        </div>
      </div>
      <!-- NOMBRE E ICONO CARRERA -->

      <!-- COMPATIBILIDAD -->
      <span class="d-block mt-4 font-weight-black"
        >Nivel de compatibilidad:
        {{ Math.round((infoCarreraActiva.puntaje / 24) * 100) }} %</span
      >

      <v-progress-linear
        :color="infoCarreraActiva.color"
        class="mb-4 mt-3"
        buffer-value="0"
        :value="(infoCarreraActiva.puntaje / 24) * 100"
        stream
      ></v-progress-linear>
      <!-- COMPATIBILIDAD -->

      <!-- % EMPLEABILIDAD -->
      <span class="d-block mt-4 font-weight-black"
        >Empleabilidad:
        {{ Math.round(infoCarreraActiva.empleabilidad) }} %</span
      >
      <!-- % EMPLEABILIDAD -->

      <!-- DESCRIPCION CARRERA -->
      <div class="mt-6">
        <span class="font-weight-bold"
          >Descripción:
          <span class="mt-4 font-weight-medium">{{
            infoCarreraActiva.desc
          }}</span></span
        >
      </div>
      <!-- DESCRIPCION CARRERA -->

      <!-- BOTONES -->
      <div class="d-flex mt-8 mb-8 justify-space-between">
        <v-btn :color="infoCarreraActiva.color" outlined rounded small
          >Admisión</v-btn
        >
        <v-btn :color="infoCarreraActiva.color" outlined rounded small
          >Más info</v-btn
        >
      </div>
      <!-- BOTONES -->

      <!-- YOUTUBE -->
      <iframe
        width="250"
        height="315"
        :src="'https://www.youtube.com/embed/' + infoCarreraActiva.video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <!-- YOUTUBE -->
    </v-card>
    <!-- CARRERA ELEGIDA -->

    <!-- ICONOS RRSS -->
    <IconosRrss />
    <!-- ICONOS RRSS -->

    <!-- BOTON -->
    <div class="d-flex justify-center pb-8">
      <v-btn class="m-2" fab dark color="teal" @click="scrollToTop">
        <v-icon dark> mdi-chevron-up </v-icon>
      </v-btn>
    </div>
    <!-- BOTON -->
  </div>
</template>

<script>
import IconosRrss from "@/components/ui/IconosRrss.vue";

export default {
  components: {
    IconosRrss,
  },
  data() {
    return {
      infoCarreraActiva: null,
      puntajes: [],
      datosCarrera: [],
    };
  },
  mounted() {
    this.consultarRespuestaTest();
    console.log(this.resultadoCarreras);
    this.datosCarrera = this.resultadoCarreras;
    this.infoCarreraActiva = this.datosCarrera[0];
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    elegirCarrera(carrera) {
      this.infoCarreraActiva = this.datosCarrera.find(
        (carreraActiva) => carreraActiva.title === carrera
      );
    },
    color_ranking(index) {
      switch (index) {
        case 0:
          return "amber darken-1";
        case 1:
          return "blue-grey lighten-4";
        case 2:
          return "deep-orange darken-3";
        default:
          return "light-blue lighten-4";
      }
    },
    ancho_barra(puntaje) {
      if (this.$vuetify.breakpoint.mobile) {
        return ((puntaje / 24) * 100 * 130) / 100;
      } else {
        return ((puntaje / 24) * 100 * 672) / 100;
      }
    },
    porcentaje(index, puntaje) {
      switch (index) {
        case 0:
          return Math.round((puntaje / 24) * 100) + "%";
        case 1:
          return Math.round((puntaje / 24) * 100) + "%";
        case 2:
          return Math.round((puntaje / 24) * 100) + "%";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.border-blue {
  border: 2px solid #0083ca;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 40px;
}

.text-sm {
  font-size: 0.65rem;
}

.w-full {
  width: 100%;
}

.container-barra {
  position: relative;
}

.barra {
  position: absolute;
  right: 20px;
  height: 75%;
  width: 40%;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
