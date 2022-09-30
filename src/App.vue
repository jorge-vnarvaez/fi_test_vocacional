<template>
  <v-app>
    <main-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MainHeader from "@/components/nav/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
  async mounted() {
    this.$store.commit("setRut", this.$cookies.get("rut"));
  },
  data: () => ({
    //
  }),
};
</script>
