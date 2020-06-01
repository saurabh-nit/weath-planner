import { mapGetters } from "vuex";
import { paginate } from "../../utils/helpers";
import uniqBy from "lodash.uniqby";
import debounce from "lodash.debounce";

export default {
  name: "Home",
  data() {
    return {
      isLoadingFunds: true,
      pageSize: 100,
      pageNumber: 1,
      activeIndex: "1",
      activeIndex2: "1",
      searchInput: "",
      dataToShow: []
    };
  },
  created() {
    this.filterDataOnSearch = debounce(this.filterDataOnSearch, 500);
    this.isLoadingFunds = true;
    this.$store.dispatch("fundStore/GET_ALL_FUNDS", {
      success: this.fetchSuccess,
      fail: this.fetchFailed
    });
  },
  computed: {
    ...mapGetters("fundStore", ["getFunds"]),
    currentPageData() {
      return paginate(this.getFunds, this.pageSize, this.pageNumber);
    },
    categoryFilter() {
      let cat = paginate(this.getFunds, this.pageSize, this.pageNumber).map(
        item => {
          return { text: item.category, value: item.category };
        }
      );
      return uniqBy(cat, "value");
    },
    typeFilter() {
      let cat = paginate(this.getFunds, this.pageSize, this.pageNumber).map(
        item => {
          return { text: item.fund_type, value: item.fund_type };
        }
      );
      return uniqBy(cat, "value");
    },
    typeFund() {
      let type = paginate(this.getFunds, this.pageSize, this.pageNumber)
        .map(item => {
          return { text: item.plan, value: item.plan };
        })
        .filter(el => !!el.text);
      return uniqBy(type, "value");
    }
  },
  watch: {
    getFunds(newData) {
      this.dataToShow = paginate(newData, this.pageSize, this.pageNumber);
    }
  },
  methods: {
    fetchSuccess(data) {
      this.isLoadingFunds = false;
      console.log("fetchSuccess:", data);
    },
    fetchFailed(data) {
      this.isLoadingFunds = false;
      console.log("fetchFailed:", data);
    },
    handleSizeChange(val) {
      console.log(`${val} items per page`);
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
      this.pageNumber = val;
      this.dataToShow = [...this.currentPageData];
    },
    viewDetails(row, column, cell, event) {
      console.log("row, column, cell, event", row, column, cell, event);
      console.log("ROW", row.code);
      this.$router.push(`/about/${row.code}`);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    filterCategoryTag(value, row) {
      return row.category === value;
    },
    filterTypeTag(value, row) {
      return row.fund_type === value;
    },
    filterPlanTag(value, row) {
      return row.plan === value;
    },
    handleInputChange(data) {
      console.log("handleInputChange", data);
      this.searchInput = data;
      this.filterDataOnSearch(data);
    },
    filterDataOnSearch() {
      this.isLoadingFunds = true;
      console.log("input_happened", this.searchInput);
      const raw_data = [...this.getFunds];
      console.log("RAW_DATA:", raw_data);
      let filtered = [];
      if (this.searchInput.length > 0) {
        filtered = raw_data.filter(item => {
          return item.name
            .toLowerCase()
            .includes(this.searchInput.toLowerCase());
        });
      } else {
        filtered = [...this.getFunds];
      }

      console.log("filtered:", filtered);

      this.dataToShow = [...filtered];
      this.isLoadingFunds = false;
    }
  }
};
