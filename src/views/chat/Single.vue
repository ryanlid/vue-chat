<template>
  <div class="page">
    <Header :right="true" :rightEvent="true" @rightEvent="more">Dong</Header>
    <ChatContent :data="recordList" />
    <ChatAction @submit="submitText" />
  </div>
</template>

<script>
import Header from "../../components/Header";
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
    Header,
    ChatContent,
    ChatAction
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    more() {
      this.$router.push({
        name: "chatInfo"
      });
    },
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
      console.log(JSON.parse(e.data));

      this.recordList.push({
        data: JSON.parse(e.data).data
      });
      console.log(this.recordList);
    },
    websocketclose(e) {
      console.log("close", e);
    },
    submitText(val) {
      let data = {
        avatar: "https://via.placeholder.com/150/FFFF00/",
        content: val,
        contentType: "txt",
        duration: 0,
        id: Math.random().toFixed(5) * 10000,
        senderId: 1,
        username: "user"
      };
      this.recordList.push({
        data
      });

      this.socket.send(JSON.stringify({ data }));
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
