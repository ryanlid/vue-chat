<template>
  <div class="scroll-page">
    <scroll
      :pullup="true"
      :pulldown="true"
      @pulldown="pulldown"
      @scrollToEnd="scrollToEnd"
    >
      <ul class="content">
        <li v-for="item in data" :key="item.data.id">
          {{ item.data.content }}
        </li>
      </ul>
    </scroll>
  </div>
</template>
<script>
import scroll from "./Scroll";

export default {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      scroll: {}
    };
  },
  methods: {
    pulldown() {
      console.log("pulldown");
    },
    scrollToEnd() {
      console.log("scrollEnd");
    }
  },
  components: {
    scroll
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
