<template>
  <div>
    <div class="container p-5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Introduce los ingredientes</h2>
              <form @submit.prevent="loadData">
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Cantidad ingrediente(2 tomatos)</label>
                  <textarea v-model="ingredient" class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                </div>
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {{ingredient}}
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
      nutrition: [],
    }
  },
  methods: {
    loadData(){
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
        console.log(this.nutrition);
      }).catch(e => {
        console.log(e)
      })
    }
  },
}
</script>

<style scored>

</style>