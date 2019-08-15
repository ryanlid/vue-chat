<template>
  <div class="page">
    <ChatContent :data="recordList" />
    <ChatAction />
  </div>
</template>

<script>
import ChatContent from "../../components/ChatContent";
import ChatAction from "../../components/ChatAction";
import { getChatInfo } from "../../api/chat/chat";

export default {
  data() {
    return {
      recordList: []
    };
  },
  components: {
    ChatContent,
    ChatAction
  },
  methods: {
    init() {
      getChatInfo({})
        .then(result => {
          this.recordList = result.recordList;
          console.log(this.recordList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created: function() {
    this.init();
  }
};
</script>

<style lang="less" scoped>
.page {
  position: relative;
}
</style>
