const { createApp } = Vue;
createApp({
  data() {
    return {
      message: "Hello Vue!",
     //urlApi:"./javascript/prubas.json",
    productos:[]
    };
  },
  created() {
  this.Datos_Cargados(this.urlApi)

  },
  mounted() {},
  methods: {
    Datos_Cargados(url){
      axios.get(url).then(response=>{
        this.productos = response.data
      })
    }

  },
}).mount("#app");
