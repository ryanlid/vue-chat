<template>
  <div class="container-outer">
    <div class="container">
      <h1>Chat</h1>
      <div class="md-field">
        <label for="username">用户名</label>
        <input type="text" class="md-input input" />
      </div>
      <div class="md-field">
        <label for="username">密码</label>
        <input type="text" class="md-input input" />
      </div>
      <button @click="login" class="btn">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.replace("/list");
    }
  }
};
</script>

<style lang="less" scoped>
.container-outer {
  padding: 160px 35px 0;
}
.container {
  margin: auto;
  text-align: center;
  width: 400px;
  max-width: 100%;
}
.input {
  outline: none;
  height: 32px;
  padding: 0;
  display: block;
  flex: 1;
  border: none;
  background: none;
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: font-size, padding-top, color;
  font-family: inherit;
  font-size: 16px;
  line-height: 32px;
}

.md-field {
  width: 100%;
  margin: 4px 0 24px;
  padding-top: 16px;
  display: flex;
  position: relative;
  font-family: inherit;
  label {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 0.3s;
    font-size: 16px;
    line-height: 20px;
  }
  .md-input {
    height: 32px;
    padding: 0;
    display: block;
    flex: 1;
    border: none;
    background: none;
    transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-property: font-size, padding-top, color;
    font-family: inherit;
    font-size: 16px;
    line-height: 32px;
  }
  &:after {
    background-color: rgba(0, 0, 0, 0.42);
    position: absolute;
    height: 1px;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    transition: border 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
    will-change: border, opacity, transform;
    content: " ";
  }
}
.btn {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  width: 100px;
  color: #fff;
  background-color: #ffa500;
  border-color: #ffa500;
  &:hover {
    background: #ffb833;
    border-color: #ffb833;
    color: #fff;
  }
}
</style>
