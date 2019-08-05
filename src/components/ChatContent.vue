<template>
  <div class="scroll-page">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>.2.</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>1</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>.3.</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>.3.</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {};
  },
  mounted() {
    let wrapper = this.$refs.wrapper;
    new BScroll(wrapper, {
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      }
    });
  }
};
</script>
<style lang="less" scoped>
.scroll-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 50px);
  background: #efeff4;
}
.wrapper {
  height: 100%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
