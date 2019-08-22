<template>
  <div class="page">
    <Header></Header>
    <ChatContent />
    <ChatAction />
  </div>
</template>

<script>
import Header from "../../components/Header";
import ChatContent from "../../components/ChatContent";
import ChatAction from "../../components/ChatAction";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    ChatContent,
    ChatAction
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.page {
  position: relative;
}
</style>
