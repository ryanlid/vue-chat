<template>
  <div class="list-item">
    <div>
      <IconItem />
    </div>
    <div class="brage">{{ messages.brage }}</div>
    <div class="content">
      <div class="meta">
        <div class="name">{{ messages.name }}</div>
        <div class="time">{{ messages.time }}</div>
      </div>
      <div class="message">{{ messages.message }}</div>
    </div>
  </div>
</template>
<script>
import IconItem from "./IconItem";

export default {
  props: {
    icon: {
      type: String
    },
    name: {
      type: String
    },
    message: {
      type: String
    },
    brage: {
      type: Number
    },
    time: {
      type: String
    },
    messages: {
      type: Object
    }
  },
  data() {
    return {};
  },
  components: {
    IconItem
  }
};
</script>

<style lang="less" scoped>
.list-item {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #ddd;
}

.brage {
  box-sizing: border-box;
  position: absolute;
  background: hsl(0, 90%, 50%);
  color: #ffffff;
  border-radius: 50%;
  left: 44px;
  top: 2px;
  width: 20px;
  height: 20px;
  line-height: 1.4;
  font-size: 12px;
  padding: 2px;
  text-align: center;
}

.content {
  flex: auto;
  padding-left: 10px;
  text-align: left;
  min-width: 0;
}

.meta {
  display: flex;
}

.name {
  flex: auto;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #000000;
  font-weight: bold;
  font-size: 18px;
}

.message {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(99, 99, 99);
}
</style>
