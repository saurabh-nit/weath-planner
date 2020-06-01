import apiPaths from "./api-paths";
import axios from "axios";

export default {
  getAllFunds(callback, fail) {
    axios
      .get(apiPaths.getFundsApi, { withCredentials: false })
      .then(callback)
      .catch(fail);
  },
  getFundDetails(callback, fail, params) {
    axios
      .get(apiPaths.getFundDetailApi(params.fundId), { withCredentials: false })
      .then(callback)
      .catch(fail);
  }
};
