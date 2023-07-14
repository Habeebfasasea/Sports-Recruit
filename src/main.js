import './assets/main.css';
import Vue from "vue";
import App from "./App.vue";
import './assets/tailwind.css'
import Vuex from 'vuex';
// import store from './store'

Vue.use(Vuex)
const store = new Vuex.Store(
  {
    state: {report: null}, 
    mutations: {    
      setReport (state, data) {state.report = data}  }
  })

Vue.config.productionTip = false;

new Vue({
  store,
  el: "#app", // Binds to the #app element in public/index.html; Only works with this ID within codesandbox
  render: h => h(App)
});
