<template>
  <div>
    <div class="footers p-2">
      <div class="container-fluid">
        <!-- <div class="fTitle row justify-content-end mb-1">
          <h3 class="col-12 col-sm-12 col-md-8 m-0 p-2">App-recetas</h3>
        </div>
        <div class="fLogo row justify-content-center text-center">
          <img class="imgFooter" src="@/assets/img/apple.png" alt="">
        </div>
        <div class="fCopy row justify-content-start mt-1">
          <h6 class="col-12 col-sm-12 col-md-8 m-0 p-2">© page created for dam91</h6>
        </div> -->
        <div class="row border-top border-light text-center p-2">
          <h3 class="col-12 col-sm-12 col-md-4 m-0 ">App-recetas</h3>
          <div class="col-12 col-sm-12 col-md-4"><img class="imgFooter " src="@/assets/img/apple.png" alt=""></div>
          <h6 class="col-12 col-sm-12 col-md-4 m-0">© page created for dam91</h6>
        </div>
        <div class="edtext row justify-content-center text-dark p-2">
          <p>Esta app obtiene los datos de la api nutrition-api de la pagina de nutricion de <a href="https://www.edamam.com/"> Edamam</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.footers{
  /* height: 400px;  */
  color: black;
  background-color: white;
}

/* .fTitle {
  padding-right: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  justify-content: end;
  text-align: right;
}
.fLogo {

}
.fCopy {
  padding-left: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  justify-content: start;
  text-align: left;
} */

.edtext {
  color: black;
  font-weight: bold;
}

.edtext  a{
  text-decoration: none;
  color: rgb(42, 217, 0);
}

.imgFooter {
  width: 100px;
}

@media (max-width: 750px) {
  /* .fTitle {
    justify-content: end;
    text-align: right;
  }
  .fCopy {
    justify-content: start;
    text-align: left;
  } */
}
@media (max-width: 600px) {
  /* .fTitle {
    padding-right: 0;
    text-align: center;
  }
  .fCopy {
    padding-left: 0;
    text-align: center;
  } */
  .imgFooter {
    width: 80px;
  }
  .edtext {
    font-size: 0.8em;
    text-align: center;
  }
}
</style>