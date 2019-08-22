<template>
  <div class="bottom-tab">
    <router-link
      tag="div"
      to="/list"
      class="item"
      :class="$route.path === '/list' ? 'active' : ''"
    >
      <div class="icon iconfont icon-xiaoxi"></div>
      <div>消息</div>
    </router-link>
    <router-link
      tag="div"
      to="/contacts"
      class="item"
      :class="$route.path === '/contacts' ? 'active' : ''"
    >
      <div class="icon iconfont icon-tongxunlu"></div>
      <div>通讯录</div>
    </router-link>
    <router-link
      tag="div"
      to="/my"
      class="item"
      :class="$route.path === '/my' ? 'active' : ''"
    >
      <div class="icon iconfont icon-wode"></div>
      <div>我</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "../fonts/iconfont.css";
.bottom-tab {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-top: 1px solid #efeff4;
  .iconfont {
    font-size: 26px;
  }
  .item {
    text-align: center;
    &.active {
      color: orange;
    }
  }
}
</style>
