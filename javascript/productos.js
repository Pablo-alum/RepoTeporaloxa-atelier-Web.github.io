const { createApp } = Vue;
createApp({
  data() {
    return {
      urlApi: "/api/productos/productosDTO",
      urlApiCategorias: "/api/categorias/categoriasDTO",
      categorias_show: "",
      categorias: "",
      productos_data:null,
      productos: null,
      categoria: {
        category: "",
        data: null,
        type: "",
        id: null,
      },

    };
  },
  created() {},
  mounted() {
    axios.get(this.urlApi).then((response) => ( this.productos = this.productos_data = response.data));
    axios
      .get(this.urlApiCategorias)
      .then((response) => (this.categorias = response.data));

  },
  methods: {
    category(category){
      this.productos   = this.productos_data.filter(producto => producto.category[0].id ===category.id);
    
    }
  },



}).mount("#app");
