<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: {}
    };
  },
  props: {
    refreshDelay: {
      type: Number,
      default: 10
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll();
    }, 20);
  },
  methods: {
    _initScroll() {
      let wrapper = this.$refs.wrapper;
      this.scroll = new BScroll(wrapper, {
        pullDownRefresh: {
          threshold: 50,
          stop: 20
        }
      });
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          // 滚动到底部
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }

      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on("touchEnd", pos => {
          // 下拉动作
          if (pos.y > 10) {
            this.$emit("pulldown");
          }
        });
      }
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    data() {
      console.log(131313);
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>
<style lang="less" scoped>
.wrapper {
  height: 100%;
}
</style>
