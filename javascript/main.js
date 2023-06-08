const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello Vue!",
      urlApi: "./javascript/prubas.json",
      productos: [],
      categorias:false,
      categoriaMostrada:"Deco",
    };
  },
  created() {
    this.Datos_Cargados(this.urlApi);
  },
  mounted() {},
  methods: {
    //Datos cargados
    Datos_Cargados(url) {
      axios.get(url).then((response) => {
        this.productos = response.data;
      });
    },
    
    mostrarCategoria(categoria) {
      this.categoriaMostrada = categoria;
    }
  },
}).mount("#app");
