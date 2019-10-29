import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uri: 'https://api.edamam.com/api/nutrition-data?app_id=ea848d10&app_key=a52dffc48288ee6c01a89439c7a26aa1&ingr=',
    ingr: ''
  },
  mutations: {
    getIngr(){

    },
    // selvPersonInfo(state) {
    //   console.log("selvPersonInfo");

    //   state.vPersonInfo = true;
    //   state.vInfoOther = false;
    //   state.vSkills = false;
    //   state.vProyectos = false;

    //   console.log("vPersonInfo = " + state.vPersonInfo + "\n" +
    //     "vInfoOther = " + state.vInfoOther + "\n" +
    //     "vSkills = " + state.vSkills + "\n" +
    //     "vPersonInfo = " + state.vPersonInfo);
    // }
  },
  actions: {
    
  },
  modules: {
  }
})
