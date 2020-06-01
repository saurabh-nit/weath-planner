import apiUrls from "./apiUtils/api-paths";
import apiCall from "./apiUtils/make-api-call";

export default {
  getInvestmentList(callback, fail, params) {
    apiCall.makeGetRequest(
      apiUrls.api.getAllPopularStation,
      callback,
      fail,
      params
    );
  },
  getInvestmentDetail(callback, fail, params) {
    apiCall.makeGetRequest(apiUrls.api.getAllStation, callback, fail, params);
  }
};
