import $router from "@/router/index";
import Vue from "vue";

import { ROUTE_DASHBOARD } from "@/router/constants/routesNames";

import { AuthService } from "@/services/index";

import { GET_TOKEN, SET_TOKEN, SIGN_IN } from "./constants/names";

export default {
  namespaced: true,
  state: {
    // token get before signin
    token: undefined,
    // data for show in profile
    username: "Hi Leo",
    email: "",
  },
  getters: {
    [GET_TOKEN](state) {
      return state.token;
    },
  },
  mutations: {
    [SET_TOKEN](state, data) {
      state.token = data;
    },
  },
  actions: {
    /** Signin account
     * @param {Object=} data - field data in form
     */
    async [SIGN_IN]({ commit }, data) {
      try {
        let response = await AuthService.signIn(data);
        await commit(SET_TOKEN, response.data);
        $router.push({
          name: ROUTE_DASHBOARD,
        });
      } catch (error) {
        Vue.prototype.$toast.show(error.response.data.detail, "warning");
      }
    },
  },
};