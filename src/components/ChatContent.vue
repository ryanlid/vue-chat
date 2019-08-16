<template>
  <div class="scroll-page">
    <scroll :pulldown="true" @pulldown="pulldown" ref="scroll1">
      <ul class="content">
        <li v-for="item in data" :key="item.data.id">
          <div
            class="chat-content"
            :class="item.data.senderId === 1 ? 'self' : 'other'"
          >
            <div class="chat-avatar-wrap">
              <img :src="item.data.avatar" class="avatar" />
            </div>
            <div class="chat-content-wrap">
              <div class="chat-content-text">{{ item.data.content }}</div>
            </div>
          </div>
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
  },
  mounted() {
    setTimeout(() => {
      this.$refs.scroll1.scrollTo(0, this.$refs.scroll1.scroll.maxScrollY);
    }, 500);
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
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.chat-content {
  display: flex;
  padding-bottom: 8px;
  font-size: 0;
}
.self {
  text-align: left;
  flex-direction: row-reverse;
}
.other {
  text-align: left;
  justify-content: flex-start;
}
.chat-content-text {
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;

  .self & {
    background: rgb(146, 230, 73);
  }
  .other & {
    background: #fff;
  }
}

.chat-content-wrap {
  position: relative;
  margin: 0 6px;
  .self &::after,
  .other &::before {
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    content: "";
    display: block;
    position: absolute;

    top: 8px;
  }
  .self &::after {
    border-left: 5px solid rgb(146, 230, 73);
    border-right: 5px solid transparent;
    right: -10px;
  }
  .other &::before {
    border-right: 5px solid #fff;
    border-left: 5px solid transparent;
    left: -10px;
  }
}
.chat-content-wrap::before {
  content: "";
  display: block;
  position: absolute;
  left: -10px;
  top: 8px;
}
.chat-avatar-wrap {
  margin: 0 6px;
}
</style>
