<template>
  <div>
    <div class="container p-5">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Introduce los ingredientes</h2>
              <form action="">
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
export default {
  data() {
    return {
      ingredient:'',
    }
  },
}
</script>

<style scored>

</style>