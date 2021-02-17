<template>
  <div id="app">
    <headerComponent> </headerComponent>
    <SliderComponent> </SliderComponent>
    <div class="center">
      <sidebar-component> </sidebar-component>
      <router-view></router-view>
      <!-- <CentralComponent> </CentralComponent>-->
    </div>
    <FooterComponent> </FooterComponent>
  </div>
</template>

<script>
import headerComponent from "./components/headerComponent.vue";
import SliderComponent from "./components/SliderComponent.vue";
import SidebarComponent from "./components/SidebarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";


export default {
  name: "App",
  components: {
    headerComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,

  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
