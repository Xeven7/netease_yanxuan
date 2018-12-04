/*入口js
* */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import VueLazyload from 'vue-lazyload'

import './mock/mockServer'
import loading from './common/images/loading.gif'
// import './filters'
/*import {Button} from 'mint-ui'

Vue.component(Button.name, Button) //mt-button
Vue.use(VueLazyload, {
  loading
})*/

new Vue ({
  el: "#app",
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})
