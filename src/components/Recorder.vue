<template>
  <div class="recoder-wrap">
    <template v-if="!isMobile()">
      <button
        type="button"
        class="btn"
        @click="recordStart"
        v-show="!mediaRecorderState"
      >
        开始说话
      </button>
      <button
        type="button"
        class="btn"
        @click="recordStop"
        v-show="mediaRecorderState"
      >
        结束说话
      </button>
    </template>
    <template v-if="isMobile()">
      <button
        type="button"
        class="btn"
        @touchstart="recordStart"
        @touchendend="recordStop"
      >
        按住说话
      </button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mediaRecorderState: false,
      mediaRecorder: null,
      constraints: {
        audio: true
      },
      chunks: []
    };
  },
  methods: {
    recordStart() {
      navigator.mediaDevices
        .getUserMedia({
          audio: true
        })
        .then(stream => {
          this.mediaRecorderState = true;
          this.mediaRecorder = new MediaRecorder(stream);
          this.mediaRecorder.start();
          this.mediaRecorder.ondataavailable = e => {
            this.chunks.push(e.data);
          };
        })
        .catch(err => {
          console.log(err);
        });
    },

    recordStop() {
      var blob = new Blob(this.chunks, { type: "audio/mp3; codecs=opus" });
      var audioURL = window.URL.createObjectURL(blob);
      this.mediaRecorderState = false;
      this.mediaRecorder.stop();
      console.log("blob: ", blob);
      console.log("audioURL: ", audioURL);
    },
    isMobile() {
      var ua = navigator.userAgent;
      return ua.indexOf("Android") > -1 || ua.indexOf("iPhone") > -1;
    }
  }
};
</script>

<style lang="less" scoped>
.recoder-wrap {
  height: 100%;
  display: flex;
}
.btn {
  flex: auto;
  height: 100%;
  background: #fff;
  border: 1px solid #ddd;
  outline: none;
  padding: 0 6px;
  font-size: 16px;
  border-radius: 6px;
  user-select: none;
  box-sizing: border-box;
}
.btn:active {
  background: rgb(242, 242, 242);
}
</style>
