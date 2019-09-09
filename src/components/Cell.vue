<template>
  <div class="cell">
    <div>
      <div class="title">{{ title }}</div>
      <div v-if="label">{{ label }}</div>
    </div>
    <div class="value-wrap">
      <div>
        {{ value }}
        <slot></slot>
      </div>
      <div class="icon iconfont icon-right" v-if="isLink"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    label: {
      type: String
    },
    isLink: {
      type: Boolean
    }
  }
};
</script>

<style lang="less" scoped>
@import "../fonts/iconfont.css";
.cell {
  background: #fff;
  padding: 12px 0;
  margin: 0 10px;
  border-bottom: 1px solid #efeff4;
  display: flex;
  justify-content: space-between;
}

.value-wrap {
  display: flex;
  align-items: center;
  color: #878889;
  & .icon {
    margin-left: 4px;
  }
}
</style>
