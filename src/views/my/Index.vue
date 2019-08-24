<template>
  <div class="list">
    <Header :left="false">我</Header>
    <cell-group>
      <cell title="姓名" value="Dong" is-link></cell>
      <cell title="性别" value="男" is-link></cell>
      <cell title="手机" value="13023456789" is-link></cell>
      <cell title="关于" is-link></cell>
      <cell title="退出"></cell>
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

<style lang="less" scoped></style>
