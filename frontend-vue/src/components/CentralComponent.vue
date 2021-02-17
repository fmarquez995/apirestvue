<template>
  <div class="center">
    <section id="content">
      <h2>Últimos posts</h2>

      <div id="articles">
        <!-- version html -->
        <article class="article-item" id="article-template">
          <div class="image-wrap">
            <img src="https://picsum.photos/200" alt="postAvatar" />
          </div>
          <h2 class="subheader">Articulo test</h2>
          <span class="date"> hace 5 minutos</span>
          <a href="#">Leer más</a>

        </article>
      </div>
    </section>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  name: "CentralComponent",
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  width: 70%;
  float: left;
  min-height: 450px;
  margin-right: 20px;
}

.article-item {
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
}
.article-item .image-wrap {
  width: 130px;
  height: 130px;
  overflow: hidden;
  float: left;
  margin-right: 15px;
  border: 1px solid #eee;
}

.article-item .image-wrap img {
  height: 100%;
  text-align: center;
}

.article-item h2 {
  display: block;
  width: 100%;
  padding: 0px;
  margin: 0px;
  margin-bottom: 7px;
}

.article-item .date {
  display: block;
  width: 100%;
  color: #444;
}

.article-item a {
  display: block;
  color: #444;
  text-decoration: none;
  margin-top: 10px;
}

.article-item a:hover {
  text-decoration: underline;
}

.subheader {
  font-size: 18px;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}
</style>
