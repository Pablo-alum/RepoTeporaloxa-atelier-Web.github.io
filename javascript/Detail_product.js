const App = {
  components: {
    Carousel: VueCarousel.Carousel,
    Pagination: VueCarousel.Pagination,
    Navigation: VueCarousel.Navigation,
    Slide: VueCarousel.Slide,
  },
  data() {
    return {
      urlApi: "/api/productos/productosDTO",
      fullUrl:"",
      whatsappUrl:"",
      id: new URLSearchParams(location.search).get("id"),
      infomacion: {},
      relacionados: "",
    //confi carcuel
      settings: {
        itemsToShow: 2,
        snapAlign: "start",
        itemsToScroll: 2,
      },
      breakpoints: {
        // 700px and up
        700: {
          itemsToShow: 3,
          snapAlign: "start",
          itemsToScroll: 3,
        },
        // 1024 and up
        1024: {
          itemsToShow: 4,
          snapAlign: "start",
          itemsToScroll: 4,
        },
      },
 //confi carcuel fin
    };
  },
  created() {
     //datos de mensjae 
      const currentURL = window.location.href;
      const phoneNumber = '59898169146';
      const message = `¡Hola! Estoy interesado en este producto`;
      const encodedMessage = message;
      const encodedURL = currentURL;
      this.whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}%20${encodedURL}`;
    this.fullUrl= 'https://chart.googleapis.com/chart?cht=qr&chs=' + 400 + 'x' + 400 + "&chl=" +  encodeURIComponent(this.whatsappUrl)  + '&chf=bg,white&chco=0f2034&chld=|1'
     //fin datos de mensjae 
    axios
      .get(this.urlApi)
      .then((response) =>
        this.Productos_relacionados(
          response.data,
          (this.infomacion = response.data.find(
            (producto) => producto.id == this.id
          ))
        )
      );
  },
  mounted() {},
  methods: {
    Productos_relacionados(datos, infomacion) {
      this.relacionados = datos.filter(
        (producto) =>
          producto.category[0].category === infomacion.category[0].category
      );
    },

    enviarWhatsApp(){
            window.open(this.whatsappUrl, '_blank');
    }
  },
};
Vue.createApp(App).mount("#app");
