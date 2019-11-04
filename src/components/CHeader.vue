<template>
  <div>
    <div class="headers">
      <h1 class="title p-2"> <img class="imgHeader  " src="@/assets/img/cesta.png" alt="">App-recetas</h1>
      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
* {
  margin: 0;
}
.headers {
  height: 150px;
  background-image: url("../assets/img/fondoVerde.jpg");
  background-attachment: fixed;
  background-position: center;
  text-align: center;
}
.title {
  font-size: 40px;
  background-color: white;
}
.imgHeader {
  width: 100px;
}
@media (max-width: 750px) {
  .title {
    font-size: 2.5em;
  }
  .imgHeader {
    width: 100px;
    margin-right: 5%;
  }
}
@media (max-width: 600px) {
  .title {
    font-size: 2.25em;
  }
  .imgHeader {
    width: 100px;
    margin-right: 4%;
  }
}
@media (max-width: 400px) {
  .title {
    font-size: 2em;
  }
  .imgHeader {
    width: 80px;
    margin-top: 3%;
    margin-right: 2%;
  }
}
@media (max-width: 300px) {
  .title {
    font-size: 1.5em;
  }
}
</style>