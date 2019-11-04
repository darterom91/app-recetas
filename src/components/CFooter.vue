<template>
  <div>
    <div class="footers pt-2 pb-5">
      <div class="container-fluid">
        <div class="fTitle row justify-content-end mb-1">
          <h3 class="col-12 col-sm-12 col-md-8 m-0 p-2">App-recetas</h3>
        </div>
        <div class="fLogo row justify-content-center text-center">
          <img class="imgFooter" src="@/assets/img/apple.png" alt="">
        </div>
        <div class="fCopy row justify-content-start mt-1">
          <h6 class="col-12 col-sm-12 col-md-8 m-0 p-2">© page created for dam91</h6>
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
  /* height: 400px; */
  color: white;
  background-color: black;
}

.fTitle {
  padding-right: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  justify-content: end;
  text-align: right;
}
.fLogo {
  padding-top: 0.2%;
  padding-bottom: 0.2%;
}
.fCopy {
  padding-left: 5%;
  padding-top: 1%;
  padding-bottom: 1%;
  justify-content: start;
  text-align: left;
}

.imgFooter {
  width: 100px;
}

@media (max-width: 750px) {
  .fTitle {
    justify-content: end;
    text-align: right;
  }
  .fCopy {
    justify-content: start;
    text-align: left;
  }
}
@media (max-width: 600px) {
  .fTitle {
    padding-right: 0;
    text-align: center;
  }
  .fCopy {
    padding-left: 0;
    text-align: center;
  }
  .imgFooter {
    width: 80px;
  }
}
</style>