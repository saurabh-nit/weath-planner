import makeAPIcall from "../apis/apiUtils/make-api-call";

export default {
  state: {
    funds: [],
    fundDetails: {}
  },
  mutations: {
    setFunds(state, funds) {
      state.funds = funds;
    },
    setFundDetail(state, details) {
      state.fundDetails = details;
    }
  },
  getters: {
    getFunds(state) {
      return state.funds;
    },
    getFundDetail(state) {
      return state.fundDetails;
    }
  },
  actions: {
    GET_ALL_FUNDS({ commit }, { success, fail }) {
      makeAPIcall.getAllFunds(
        response => {
          console.log("RESPONSE_GET_ALL_FUNDS:", response);
          commit("setFunds", response.data);
          success && success(true);
        },
        error => {
          console.log("Something went wrong...", error);
          fail && fail(error);
        }
      );
    },
    GET_FUND_DETAILS({ commit }, { success, fail, params }) {
      console.log("GET_FUND_DETAILS", params);
      makeAPIcall.getFundDetails(
        response => {
          console.log("RESPONSE_GET_FUND_DETAILS:", response);
          commit("setFundDetail", response.data[0]);
          success && success(true);
        },
        error => {
          console.log("Something went wrong...", error);
          fail && fail(error);
        },
        params
      );
    }
  },
  namespaced: true
};
