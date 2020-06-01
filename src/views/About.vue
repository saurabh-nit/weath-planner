<template>
  <div class="about">
    <h2>Details of {{ fundId }}</h2>
    <div>
      <el-card class="box-card" v-loading="isLoadingData">
        <div
          v-for="item in Object.keys(getFundDetail)"
          :key="item.code"
          class="text"
          :class="typeof getFundDetail[item] === 'object' ? 'hidden' : 'visible'"
        >
          <b>{{ item }}</b>: {{ getFundDetail[item] }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<script src="./js/about.js"></script>
<style lang="scss" scoped>
.box-card {
  text-align: left;
  border-radius: 10px;
  max-height: 85vh;
  overflow-y: scroll;

  .text {
    padding: 10px 0;
    border-bottom: 1px solid lightgray;

    &.hidden {
      display: none;
    }
  }
}
</style>
