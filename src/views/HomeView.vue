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
            <a href="https://form.typeform.com/to/DGCU5FKl" target="_blank">siguiente enlace</a>
          </span>
        </v-card>

        <v-card
          max-width="800px"
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
              placeholder="Ej: 123456789 (sin puntos, sin guión)"
              v-model="rut"
              :rules="[reglas.required, reglas.rut]"
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
      rutValido: false,
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
        rut: (value) => {
          return this.validarRut(value) || "Rut inválido.";
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
    },
  },
  methods: {
    validarRut(rut) {
      let digito_verificador = rut.slice(-1);
      let rut_sin_dv = rut.slice(0, this.rut.length - 1);

      let serie = 2;
      let producto = 0;

      for (let i = rut_sin_dv.length - 1; i >= 0; i--) {
        producto += rut_sin_dv[i] * serie;
        serie++;
        if (serie > 7) {
          serie = 2;
        }
      }


      let parte_entera = producto / 11;
      let resto = producto - (11 * Math.floor(parte_entera));
      let dv = 11 - resto;

      if (dv == 10) {
        dv = "k";
      } else if (dv == 11) {
        dv = 0;
      }


      return dv == digito_verificador;
    },
    submitForm() {
      this.$store.commit("setEmail", this.correo);
      this.$store.commit("setRut", this.rut);

      this.rutValido = this.validarRut(this.rut);

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
