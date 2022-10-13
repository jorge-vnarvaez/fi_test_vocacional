<template>
  <div>
    <v-container class="text-center mb-5">
      <div class="d-flex justify-center text-h6 text-lg-h3 font-weight-black text-center blue--text text--darken-4">
        <span class="w-lg-180">
          Síguenos en nuestras redes
        </span>
      </div>
      <div class="d-flex font-weight-black justify-center py-10 flex-wrap">
        <v-card
          class="px-8 py-1 d-flex align-center ma-1"
          outlined
          style="border-color: #000000"
          flat
          rounded="pill"
          href="https://discord.gg/4cfyNDB7"
          target="_blank"
        >
          <span style="color: #000000">
            <font-awesome-icon
              :icon="['fab', 'tiktok']"
              color="#000000"
            />
          </span>
        </v-card>
        <v-card
          class="px-8 py-1 d-flex align-center ma-1"
          outlined
          style="border-color: #3b5998"
          flat
          rounded="pill"
          href="https://www.facebook.com/fiudec"
          target="_blank"
        >
          <span style="color: #3b5998">
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              color="#3b5998"
            />
          </span>
        </v-card>
        <v-card
          class="px-8 py-1 d-flex align-center ma-1"
          outlined
          style="border-color: #d10869"
          flat
          rounded="pill"
          href="https://www.instagram.com/fiudec/?hl=es-la"
          target="_blank"
        >
          <span style="color: #d10869">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              color="#d10869"
            />
          </span>
        </v-card>
        <v-card
          class="px-8 py-1 d-flex align-center ma-1"
          outlined
          style="border-color: #c4302b"
          flat
          rounded="pill"
          href="https://www.youtube.com/c/FacultaddeIngenier%C3%ADaUdeC"
          target="_blank"
        >
          <span style="color: #c4302b">
            <font-awesome-icon
              :icon="['fab', 'youtube']"
              color="#c4302b"
            />
          </span>
        </v-card>
        <v-card
          class="px-8 py-1 d-flex align-center ma-1"
          outlined
          style="border-color: #00acee"
          flat
          rounded="pill"
          href="https://twitter.com/fiudec"
          target="_blank"
        >
          <span style="color: #00acee">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              color="#00acee"
            />
          </span>
        </v-card>
        <v-card
          class="px-8 py-1 d-flex align-center ma-1"
          outlined
          style="border-color: #0e76a8"
          flat
          rounded="pill"
          href="https://www.linkedin.com/company/fiudec/"
          target="_blank"
        >
          <span style="color: #0e76a8">
            <font-awesome-icon
              :icon="['fab', 'linkedin-in']"
              color="#0e76a8"
            />
          </span>
        </v-card>
      </div>
      <v-btn color="green accent-3" rounded outlined>
        Contáctanos por Whatsapp
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="ml-3" size="2x" />
      </v-btn>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .w-180 {
    width: 180px;
  }  
</style>
