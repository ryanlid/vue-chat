<template>
  <li class="section">
    <p class="indexsection-index">{{ index }}</p>
    <ul>
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    index: {
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  padding: 0;
}

.indexsection-index {
  margin: 0;
  padding: 10px;
  background-color: #fafafa;
}
</style>
