import Vue from "vue";
import Vuex from "vuex";
import fundStore from "./fundStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fundStore
  }
});
