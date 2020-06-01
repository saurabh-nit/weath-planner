import { mapGetters } from "vuex";

export default {
  name: "About",
  data() {
    return {
      isLoadingData: true
    };
  },
  computed: {
    ...mapGetters("fundStore", ["getFundDetail"]),
    fundId() {
      return this.$route.params.fundId;
    }
  },
  created() {
    this.$store.dispatch("fundStore/GET_FUND_DETAILS", {
      params: { fundId: this.$route.params.fundId },
      success: this.fetchSuccess,
      fail: this.fetchFailed
    });
  },
  methods: {
    fetchSuccess(data) {
      this.isLoadingData = false;
      console.log("fetchSuccess:", data);
    },
    fetchFailed(data) {
      this.isLoadingData = false;
      console.log("fetchFailed:", data);
    }
  }
};
