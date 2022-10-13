<template>
  <div>
    <div class="blue darken-1 white--text px-8 py-6 rounded-br-pill">
      <v-container
        ><span class="d-block text-uppercase text-lg-h3"
          >Tus resultados</span
        ></v-container
      >
    </div>

    <v-card
      v-if="$vuetify.breakpoint.mobile ? true : false"
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
    <v-container>
      <!--MOBILE VIEW -->
      <div v-if="$vuetify.breakpoint.mobile ? true : false">
        <div v-if="carreras.length > 0" class="w-full mb-8">
          <div
            v-for="(carrera, index) in datosCarrera"
            :key="index"
            @click="elegirCarrera(carrera.title)"
            class="grey lighten-3 cursor-pointer container-barra d-flex justify-space-between rounded-pill mb-4"
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
              <div
                class="white barra rounded-br-pill rounded-tr-pill py-2 px-2"
              >
                <v-card
                  class="rounded-br-pill rounded-tr-pill d-flex align-center"
                  :color="color_ranking(index)"
                  :height="30"
                  :width="
                    carrera.puntaje > 0 ? ancho_barra(carrera.puntaje) : 0
                  "
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
      </div>
      <!--MOBILE VIEW -->

      <!-- DESKTOP VIEW -->
      <div
        id="carreras"
        class="mt-8 mb-8"
        v-if="$vuetify.breakpoint.mobile ? false : true"
      >
        <v-row justify="center">
          <v-col v-for="(carrera, index) in datosCarrera" :key="index" cols="4">
            <v-card
              flat
              color="grey lighten-4"
              class="text-center pa-4 pt-6 c-pointer"
              @click="elegirCarrera(carrera.title)"
            >
              <div v-if="index == 0" class="text-h3 font-weight-black mb-2">
                <font-awesome-icon
                  :icon="['fad', 'trophy-alt']"
                  size="1x"
                  class="amber--text text--darken-3"
                ></font-awesome-icon>
              </div>
              <div v-if="index == 1" class="text-h3 font-weight-black mb-2">
                <font-awesome-icon
                  :icon="['fad', 'trophy-alt']"
                  size="1x"
                  class="grey--text"
                ></font-awesome-icon>
              </div>
              <div v-if="index == 2" class="text-h3 font-weight-black mb-2">
                <font-awesome-icon
                  :icon="['fad', 'trophy-alt']"
                  size="1x"
                  class="deep-orange--text text--darken-4"
                ></font-awesome-icon>
              </div>

              <!-- Número del resultado |INICIO| -->
              <div
                class="text-h5 font-weight-bold mb-3 blue-grey--text text--darken-2"
              >
                {{ index + 1 }}
              </div>
              <!-- Número del resultado |FIN| -->

              <v-img
                :src="'/carreras/' + carrera.icono"
                height="30px"
                contain
              ></v-img>

              <div class="text-center text-h6 text-uppercase text-overline">
                {{ carrera.title }}
                <!-- <v-badge
              bordered
              bottom
              :color="carrera.color"
              dot
              offset-x="0"
              offset-y="10"
            ></v-badge> -->
              </div>
              <div class="d-flex justify-center">
                <v-card
                  height="2px"
                  width="30px"
                  :color="carrera.color"
                  flat
                ></v-card>
              </div> </v-card
          ></v-col>
        </v-row>
      </div>
      <!-- DESKTOP VIEW -->
    </v-container>
    <!-- BARRAS -->

    <!-- BOTON VOLVER A REALIZAR TEST -->
    <div class="d-flex justify-center">
      <a
        href="https://form.typeform.com/to/DGCU5FKl"
        target="_blank"
        style="text-decoration: none"
      >
        <v-btn color="blue darken-2" outlined rounded
          >Volver a realizar el test</v-btn
        >
      </a>
    </div>
    <!-- BOTON VOLVER A REALIZAR TEST -->

    <!-- CARRERA ELEGIDA -->
    <v-container>
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
          <span class="font-weight-bold text-lg-h4">
            <span class="mt-4 font-weight-medium text-lg-h5">{{
              infoCarreraActiva.desc
            }}</span></span
          >

          <v-divider class="mt-4"></v-divider>

          <span class="d-block text-uppercase mt-8 font-weight-bold"
            >Campo laboral</span
          >

          <span class="d-block text-lg-h5 mt-2">
            {{ infoCarreraActiva.campoLaboral }}
          </span>
        </div>
        <!-- DESCRIPCION CARRERA -->

        <!-- TABS -->
        <v-container>
          <v-tabs
            v-model="tab"
            class="mt-8"
            background-color="#F2F9FD"
            :grow="true"
          >
            <v-tab
              v-for="item in items"
              :key="item.tab"
              :href="
                item.tab == 'Admisión' ? infoCarreraActiva.admision : undefined
              "
              :target="item.tab == 'Admisión' ? 'blank' : undefined"
              
            >
              <font-awesome-icon
                :icon="['fad', item.icon]"
                class="mr-4"
              ></font-awesome-icon
              ><span>{{ item.tab }}</span>
            </v-tab>
          </v-tabs>
        </v-container>

        <!-- TABS -->

        <!-- YOUTUBE -->
        <div class="mt-4">
          <iframe
            v-if="tab == 0"
            :width="$vuetify.breakpoint.mobile ? '215' : '100%'"
            :height="$vuetify.breakpoint.mobile ? '315' : '600'"
            :src="'https://www.youtube.com/embed/' + infoCarreraActiva.video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            v-if="tab == 1"
            :width="$vuetify.breakpoint.mobile ? '215' : '100%'"
            :height="$vuetify.breakpoint.mobile ? '315' : '600'"
            :src="
              'https://www.youtube.com/embed/' +
              infoCarreraActiva.videos.y_egresado
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            v-if="tab == 2"
            :width="$vuetify.breakpoint.mobile ? '215' : '100%'"
            :height="$vuetify.breakpoint.mobile ? '315' : '600'"
            :src="
              'https://www.youtube.com/embed/' +
              infoCarreraActiva.videos.y_profesor
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            v-if="tab == 3"
            :src="
              'https://player.vimeo.com/video/' +
              infoCarreraActiva.videos.v_alumno +
              '&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            "
            :width="$vuetify.breakpoint.mobile ? '215' : '100%'"
            :height="$vuetify.breakpoint.mobile ? '315' : '600'"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Recorrido por la UdeC"
          ></iframe>

          <iframe
            v-if="tab == 4"
            :width="$vuetify.breakpoint.mobile ? '215' : '100%'"
            :height="$vuetify.breakpoint.mobile ? '315' : '600'"
            :src="
              'https://www.youtube.com/embed/' +
              infoCarreraActiva.videos.y_recorrido
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <iframe
            v-if="tab == 5"
            :width="$vuetify.breakpoint.mobile ? '215' : '100%'"
            :height="$vuetify.breakpoint.mobile ? '315' : '600'"
            :src="
              'https://www.youtube.com/embed/' +
              infoCarreraActiva.videos.y_laboratorio
            "
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- YOUTUBE -->
      </v-card>
    </v-container>
    <!-- CARRERA ELEGIDA -->

    <!-- ICONOS RRSS -->
    <IconosRrss />
    <!-- ICONOS RRSS -->

    <!-- BOTON -->
    <div class="d-flex justify-center pb-8">
      <v-btn class="m-2" fab dark color="teal" @click="scrollToTop">
        <v-icon dark> mdi-chevron-up</v-icon>
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
      tab: null,
      infoCarreraActiva: null,
      idCarreraActiva: null,
      puntajes: [],
      datosCarrera: [],
      items: [
        {
          tab: "Acerca",
          icon: "info",
          href: undefined,
          target: undefined,
          pc: true,
        },
        {
          tab: "Egresado",
          icon: "video",
          href: undefined,
          target: undefined,
          pc: false,
        },
        {
          tab: "Profesor",
          icon: "video",
          href: undefined,
          target: undefined,
          pc: false,
        },
        {
          tab: "Alumno",
          icon: "video",
          href: undefined,
          target: undefined,
          pc: false,
        },
        {
          tab: "Recorrido virtual",
          icon: "video",
          href: undefined,
          target: undefined,
          pc: false,
        },
        {
          tab: "Laboratorio",
          icon: "video",
          href: undefined,
          target: undefined,
          pc: false,
        },
        {
          tab: "Admisión",
          icon: "arrow-square-right",
          href: undefined,
          target: "_blank",
          pc: false,
        },
      ],
    };
  },
  mounted() {
    this.datosCarrera = this.resultadoCarreras;
    this.infoCarreraActiva = this.datosCarrera[0];
    this.$store.commit('no_testVocacional');
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    elegirCarrera(carrera) {
      this.infoCarreraActiva = this.datosCarrera.find(
        (carreraActiva) => carreraActiva.title === carrera
      );

      this.idCarreraActiva = this.infoCarreraActiva.title;
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
