import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import CentralComponent from "./components/CentralComponent.vue";
import blogComponent from "./components/blogComponent.vue";
import formularioComponent from "./components/formularioComponent.vue";



Vue.config.productionTip = false

Vue.use(VueRouter);
const routes=[
{path:'/home',component:CentralComponent},
{path:'/',component:CentralComponent},
{path:'/blogComponent',component:blogComponent},
{path:'/formularioComponent',component:formularioComponent},

];

const router=new VueRouter({
    routes,
    mode:'history'
});

new Vue({

  router,
  render: h => h(App),
}).$mount('#app')


