<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <h3>Articulos</h3>
      <a href="#">Crear nuevo articulo</a>
    </div>
    <div id="search" class="sidebar-item">
      <h3>Buscador</h3>
      <p>Encuentra el articulo que buscas</p>
      <form action="">
        <input type="text" name="search" />
        <input type="submit" name="submit" value="buscar" />
      </form>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#sidebar {
  width: 25%;
  float: right;
  border: 1px;
}
.sidebar-item {
  background: #f7f7f7;
  padding: 20px;
  margin-top: 30px;
}

.sidebar-item h3 {
  text-transform: uppercase;
  font-size: 17px;
  margin: 0px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid #ccc;
}
</style>
