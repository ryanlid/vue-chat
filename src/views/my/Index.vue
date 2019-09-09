<template>
  <div class="list">
    <Header :left="false">我</Header>
    <cell-group>
      <cell title="姓名" value="Dong" is-link></cell>
      <cell title="性别" value="男" is-link></cell>
      <a href="tel:13012341234">
        <cell title="手机" is-link>13012341234</cell>
      </a>
      <a href="mailto:hello@qq.com">
        <cell title="邮箱" is-link>hello@qq.com</cell>
      </a>
      <a target="_blank" href="/about">
        <cell title="关于" is-link></cell>
      </a>
      <router-link to="/logout">
        <cell title="退出"></cell>
      </router-link>
    </cell-group>
    <bottom-tab class="bottom"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from "../../components/BottomTab";
import Header from "../../components/Header";
import CellGroup from "../../components/CellGroup";
import Cell from "../../components/Cell";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    CellGroup,
    Cell,
    BottomTab
  },
  methods: {}
};
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
