<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    /* axios 사용예시 ( Vue2 Options api ) */
    async sendAPI() {
      try {
        const rs = await this.axios.post("/api/test");
        console.log(rs);
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/index.scss";
</style>
