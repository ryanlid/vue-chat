<template>
  <div class="img"></div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "middle"
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.img {
  height: 40px;
  width: 40px;
  background: url("../assets/person.png") center no-repeat;
  background-size: contain;
  border: 1px solid #ccc;
}
</style>
