<template>
  <div class="page">
    <ChatContent />
    <ChatAction />
  </div>
</template>

<script>
import ChatContent from "../../components/ChatContent";
import ChatAction from "../../components/ChatAction";

export default {
  data() {
    return {};
  },
  components: {
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
