const API_BASE_PATH = "https://api.kuvera.in/api";

export default {
  getFundsApi: `${API_BASE_PATH}/v3/funds.json`,
  getFundDetailApi(fundId) {
    return `${API_BASE_PATH}/v3/funds/${fundId}.json`;
  }
};
