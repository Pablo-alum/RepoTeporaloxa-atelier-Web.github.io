const { createApp } = Vue;
createApp({
  data() {
    return {
      urlCategorias: "/api/categorias/favorites",
      categorias:{},
    };
  },
  created() {},
  mounted() {
    axios.get(this.urlCategorias).then((response) => (this.categorias = response.data));

  },
  methods: {},

}).mount("#app");
