<template>
  <div class="bottom">
    <form>
      <div class="icon iconfont icon-yuyin"></div>

      <input class="input" type="text" placeholder="请输入" />

      <!-- <button class="btn">发送</button> -->
      <div class="icon iconfont icon-biaoqing"></div>
      <div class="icon iconfont icon-jiahao"></div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../fonts/iconfont.css";

.bottom {
  box-sizing: border-box;
  text-align: left;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  form {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    height: 100%;
    width: 100%;
  }
  .icon {
    font-size: 24px;
    padding: 0 6px;
  }
}
.input {
  flex: auto;
  height: 100%;
  border: 1px solid #ddd;
  outline: none;
  padding: 0 6px;
  margin: 0 4px;
  font-size: 16px;
  border-radius: 6px;
}
.btn {
  background: #5898fc;
  font-size: 16px;
  height: 100%;
  border: 1px solid rgb(12, 89, 213);
  border-radius: 6px;
  outline: none;
}
</style>
