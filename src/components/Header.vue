<template>
  <div class="header">
    <div class="left">
      <div v-if="left" class="icon iconfont icon-back" @click="backEvent"></div>
    </div>
    <div class="title">
      <slot>chat</slot>
    </div>
    <div class="right">
      <div
        v-if="right"
        class="icon iconfont icon-more"
        @click="moreEvent"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 是否显示左边图标
    left: {
      type: Boolean,
      default: true
    },
    // 是否派发左边图标的点击事件
    leftEvent: {
      type: Boolean,
      default: false
    },
    // 是否显示右边图标
    right: {
      type: Boolean,
      default: false
    },
    // 是否派发右边图标的点击事件
    rightEvent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    backEvent() {
      if (this.leftEvent) {
        this.$emit("leftEvent");
      } else {
        this.$router.go(-1);
      }
    },
    moreEvent() {
      if (this.rightEvent) {
        this.$emit("rightEvent");
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../fonts/iconfont.css";
.header {
  font-size: 16px;
  position: relative;
  z-index: 10;
  color: #000;
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 10px;
  border-bottom: 1px solid #efeff4;
  text-align: center;
  line-height: 50px;
}
.title {
  flex: auto;
}

.left,
.right {
  width: 30px;
}
</style>
