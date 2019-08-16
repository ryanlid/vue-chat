<template>
  <div class="page">
    <ChatContent :data="recordList" />
    <ChatAction @submit="submitText" />
  </div>
</template>

<script>
import ChatContent from "../../components/ChatContent";
import ChatAction from "../../components/ChatAction";
import { getChatInfo } from "../../api/chat/chat";
import { IMURL } from "../../utils/utils";

export default {
  data() {
    return {
      recordList: [],
      socket: null
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
    },
    initSocket() {
      this.socket = new WebSocket(IMURL);
      this.socket.onopen = this.websocketonopen;
      this.socket.onerror = this.websocketonerror;
      this.socket.onmessage = this.websocketonmessage;
      this.socket.onclose = this.websocketclose;
    },
    websocketonopen(e) {
      console.log("open", e);
    },
    websocketonerror(e) {
      console.log("close", e);
    },
    websocketonmessage(e) {
      console.log("message", e);
    },
    websocketclose(e) {
      console.log("close", e);
    },
    submitText(val) {
      this.recordList.push({
        data: {
          avatar: "https://via.placeholder.com/150/FFFF00/",
          content: val,
          contentType: "txt",
          duration: 0,
          id: Math.random().toFixed(2) * 100,
          senderId: 1,
          username: "user"
        }
      });

      this.socket.send(JSON.stringify(val));
    }
  },
  created: function() {
    this.init();
    this.initSocket();
  }
};
</script>

<style lang="less" scoped>
.page {
  position: relative;
}
</style>
