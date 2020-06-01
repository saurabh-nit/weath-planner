<template>
  <div class="home">
    <div>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <div class="header-menu">
          <div
            class="heading"
            style="font-size: 25px; color: white; padding: 20px;"
          >
            Wealth Planner
          </div>
          <el-input
            style="width: 200px;"
            placeholder="Search by fund name..."
            :value="searchInput"
            @input="handleInputChange"
            clearable
          >
          </el-input>
        </div>
      </el-menu>
    </div>
    <div>
      <el-table
        :default-sort="{ prop: 'name', order: 'ascending' }"
        border
        :data="dataToShow"
        style="width: 100%"
        height="85vh"
        v-loading="isLoadingFunds"
        size="mini"
        @cell-click="viewDetails"
      >
        <el-table-column
          prop="name"
          label="Fund Name"
          sortable
          class-name="name-section"
        >
        </el-table-column>
        <el-table-column
          prop="category"
          label="Fund Category"
          :filters="categoryFilter"
          :filter-method="filterCategoryTag"
          sortable
        ></el-table-column>
        <el-table-column
          prop="fund_type"
          label="Fund Type"
          :filters="typeFilter"
          sortable
          :filter-method="filterTypeTag"
        >
        </el-table-column>
        <el-table-column
          prop="plan"
          label="Plan"
          :filters="typeFund"
          sortable
          :filter-method="filterPlanTag"
        >
        </el-table-column>
        <el-table-column
          prop="returns.year_1"
          label="Year 1 Return"
          sortable
        ></el-table-column>
        <el-table-column
          prop="returns.year_3"
          label="Year 3 Return"
          sortable
        ></el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        background
        layout="sizes, total, prev, pager, next"
        :total="getFunds.length"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script src="./js/home.js"></script>
<style lang="scss" scoped>
.home {
  font-size: 14px;
  font-weight: bold;

  ::v-deep .name-section {
    cursor: pointer;
  }

  ::v-deep .header-menu {
    display: flex;

    .el-input {
      width: 350px !important;
      padding: 18px 0;
    }
  }
}
</style>
