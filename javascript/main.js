const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello Vue!",
      urlApi: "./javascript/prubas.json",
      productos: [],
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
    //iterador de itemes 
    isThirdItem1(index1) {
      return (index1 + 3) % 3 === 0;
    },
    isThirdItem2(index2) {
      return (index2 + 2) % 3 === 0;
    },
    isThirdItem3(index3) {
      return (index3 + 1) % 3 === 0;
    },
  },
}).mount("#app");
