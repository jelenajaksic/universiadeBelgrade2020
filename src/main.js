import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'
import router from './router'
//import 'bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import VModal from 'vue-js-modal'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsDown,faThumbsUp,faHeart,faAddressCard,faPhone,faStar,  faComments,faLocationArrow,faBed,faUtensils,
  faMapMarker, faPen, faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faThumbsDown,faThumbsUp,faHeart,faAddressCard,faPhone,faStar,faComments,faLocationArrow,faBed,faUtensils,faMapMarker,faPen,faBars)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCLye5awXk8XI-HFoZe96mxvMU1RcM6d7g',
    libraries: 'places', 
  }})


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VModal);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
