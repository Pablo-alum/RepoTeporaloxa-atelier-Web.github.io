const { createApp } = Vue;
createApp({
  data() {
    return {
      urlApi: "./javascript/prubas.json",
      id: new URLSearchParams(location.search).get("id"),
      infomacion: [],
    };
  },
  created() {
    this.Datos_Cargados(this.urlApi);
  },
  mounted() {

  },
  methods: {

    //Datos cargados
    Datos_Cargados(url) {
      axios.get(url).then((response) => {
        this.infomacion = response.data.find(producto => producto.id == this.id)
      });

    },
  },
}).mount("#app");
