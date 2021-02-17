<template>
  <section id="content">
    <h2 class="subheader">Formulario</h2>
    <form id="formBlog">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="formGroupExampleInput">Titulo</label>
          <input
            type="text"
            class="form-control"
            id="titleInput"
            placeholder="Titulo"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="formGroupExampleInput2">Contenido</label>
          <input
            type="text"
            class="form-control"
            id="contentInput"
            placeholder="Contenido"
          />
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "formularioComponent",
};
</script>

<style scoped>
#formBlog {
  padding-left: 26%;
  background: #eee;
}
</style>
