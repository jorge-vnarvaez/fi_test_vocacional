<template>
  <div id="contain-form">
    <v-container>
      <v-responsive
        :aspect-ratio="10 / 3"
        v-on:submit.prevent="submitForm"
        content-class="d-flex flex-column justify-center align-center"
      >
        <span class="white--text text-h4 text-lg-h2 text-center"
          >Conoce tus resultados</span
        >

        <v-card
          class="pa-8 my-10 rounded-lg grey lighten-4 mb-auto d-flex flex-column align-center"
          v-if="!has_estadoTestVocacional && in_process"
        >
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
          <span class="d-block mt-4 text-body-1 text-center"
            >Verificando en nuestro sistema si tu <strong>Test Vocacional</strong> ya fue
            realizado...
          </span>
        </v-card>

        <v-card
          max-width="550px"
          class="pa-8 my-10 rounded-lg grey lighten-4 mb-auto"
          v-if="!has_resultadoTestVocacional && no_realizado"
        >
          <span class="d-block text-center">
            No se encontró un resultado de <strong>Test Vocacional</strong>, si no lo has
            realizado, puedes hacerlo en el
            <router-link to="/test-vocacional">siguiente enlace</router-link>
          </span>
        </v-card>

        <v-card
          max-width="550px"
          class="pa-10 my-10 rounded-lg grey lighten-4 mb-auto"
          id="form-content"
        >
          <v-form v-model="formularioValido" class="py-5">
            <v-text-field
              label="Correo electrónico"
              outlined
              dense
              name="usuario"
              v-model="correo"
              :rules="[reglas.required, reglas.email]"
              color="blue-grey"
            >
            </v-text-field>

            <v-text-field
              label="Rut"
              outlined
              dense
              name="rut"
              placeholder="Ej: 12345678-9 (sin puntos, con guión)"
              v-model="rut"
              :rules="[reglas.required]"
              color="blue-grey"
            >
            </v-text-field>

            <v-btn
              class="mr-4"
              type="submit"
              :disabled="!formularioValido"
              outlined
              color="deep-orange darken-2"
            >
              Ver resultados
            </v-btn>
          </v-form>
        </v-card>
      </v-responsive>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formularioValido: false,
      in_process: false,
      no_realizado: false,
      correo: "",
      rut: "",
      reglas: {
        required: (value) => !!value || "Requerido.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Correo inválido.";
        },
      },
    };
  },
  watch: {
    has_estadoTestVocacional(n) {
      this.no_realizado = false;
      if (n) {
        if (!this.has_resultadoTestVocacional) {
          setTimeout(() => {
            this.in_process = true;
            this.no_realizado = true;
          }, 300);
        }
      }
    },
    has_resultadoTestVocacional() {
      this.moveToResultados()
      // this.$store.commit("no_testVocacional");
    },
  },
  methods: {
    submitForm() {
      this.$store.commit("setEmail", this.correo);
      this.$store.commit("setRut", this.rut);

      this.consultarRespuestaTest();

      this.in_process = true;
    },
    moveToResultados() {
      if (this.has_resultadoTestVocacional) {
        this.$router.push("/resultados");
      }
    },
  },
};
</script>

<style>
#contain-form {
  background: #004170;
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
