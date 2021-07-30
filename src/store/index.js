import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";

// These modules

// Plugins
import { VuexAxios } from "../plugins/VueAxios";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
  },
  strict: debug,
  plugins: [VuexAxios],
});
