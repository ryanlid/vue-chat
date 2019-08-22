<template>
  <div class="list">
    <Header :left="false">我</Header>
    <bottom-tab class="bottom"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from "../../components/BottomTab";
import Header from "../../components/Header";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    BottomTab
  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
