<template>
  <div class="sectionC  p-4">
    <div class="container-fluid p-0">
      <div class="row justify-content-center  text-center">
        <div class="card border border-dark  rounded col-12 col-md-8">
          <div class="card-body">
            <h3 class="card-title ">Introduce los ingredientes</h3>
            <form @submit.prevent="loadData">
              <div class="form-group">
                <label for="exampleFormControlTextarea1" class="">Cantidad ingrediente (2 tomatos)</label>
                <textarea v-model="ingredient" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- results -->
    <!-- <div v-for="(match, Jindex) in journey.matchs" :key="Jindex"> -->
    <div v-if="bol == true" class="container px-2">
      <h3 class="text-center rounded-top bg-light text-dark mt-2 mb-0 p-2">Resultados</h3>
      <div class="row mx-0 bg-dark">
        <div class="col-12 col-sm-6 col-md-6 border border-light text-center text-light m-0 p-2">
          Ingredientes: {{this.aux}} 
        </div>
        <div class="col-12 col-sm-6 col-md-6 border border-light text-center text-light m-0 p-2">
          Calorias: {{this.nutrition.calories}}
        </div>
      </div>

      <h3 class="text-center rounded-top bg-light text-dark text-light mt-2 mb-0 p-2">Health Labels</h3>
      <div class="row mx-0 mb-2 bg-dark text-center text-light">
        <div class="col-md-12 border border-light font-weight-bold p-2" v-for="(item, index) in this.nutrition.healthLabels" :key="index">{{item}}</div>
      </div>

      <h3 class="text-center rounded-top bg-light text-dark m-0 p-2">Total Nutrients</h3>
      <div class="row bg-dark mx-0 mb-2">
        <div class="col-sm-12 col-md-12 text-center text-light" v-for="(item, index) in this.nutrition.totalNutrients" :key="index">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-6 border border-light font-weight-bold p-2">{{item.label}}</div>
            <div class="col-12 col-sm-6 col-md-6 border border-light p-2">{{item.quantity}} {{item.unit}}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="bol2 == true" class="container d-flex justify-content-center p-3">
      <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
// axios({
//         method: 'post', //you can set what request you want to be
//         url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-app-id': '5b67f155',
//           'x-app-key': '6cc07658e30ebd15559daa318cf5567f',
//           'x-remote-user-id': 0
//         },
//         body: {
//           "query": "900 tomatoes"
//         }
import axios from 'axios';
export default {
  data() {
    return {
      ingredient:'',
      aux:'',
      nutrition: [],
      bol: false,
      bol2: false,
      cont: 0
    }
  },
  methods: {
    loadData(){
    
      this.bol2=true;
      this.aux = this.ingredient;
      console.log("cont: "+this.cont);
      const params = {
        'query': '2 tomatoes',
      };
      console.log("this.ingredient");
      console.log(this.ingredient);
      axios.get('https://api.edamam.com/api/nutrition-data?app_id=ea848d10&app_key=a52dffc48288ee6c01a89439c7a26aa1',{
        params: {
          'ingr': this.ingredient
        }
      }).then(response =>{
        console.log("response");
        console.log(response);
        this.nutrition = response.data;
        console.log("nutrition");
        console.log(this.nutrition.calories);
        this.cont++;
        this.bolTest(this.cont);
      }).catch(e => {
        console.log(e)
      })
    },
    bolTest(cont){
      if (this.cont === 1) {
        this.bol=true;
        this.bol2=false;
        console.log(this.bol);
      }
    }
  },
}
</script>

<style scored>
.sectionC {
  background-image: url("https://images4.alphacoders.com/646/646937.jpg");
  background-size: cover;
  background-position: bottom;
  background-attachment: fixed;
}

h3 {
  font-size: 1.5em;
  font-weight: bold;
}
@media (max-width: 750px) {
  h3 {
    font-size: 1.4em;
  }
}
@media (max-width: 600px) {
  h3 {
    font-size: 1.3em;
  }
}

@media (max-width: 400px) {
  h3 {
    font-size: 1.2em;
  }
}

@media (max-width: 300px) {
  h3 {
    font-size: 1.1em;
  }
}
</style>