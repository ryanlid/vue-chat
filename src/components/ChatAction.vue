<template>
  <div class="bottom">
    <form>
      <div
        class="icon iconfont icon-yuyin"
        v-show="!isVoice"
        @click="isVoice = true"
      ></div>
      <div
        class="icon iconfont icon-keyboard"
        v-show="isVoice"
        @click="isVoice = false"
      ></div>
      <div class="input-wrap">
        <template v-if="!isVoice">
          <input class="input" type="text" placeholder="请输入" />
        </template>
        <Recorder v-show="isVoice" />
      </div>
      <button type="button" class="btn" v-show="!isVoice">发送</button>
      <div class="icon iconfont icon-biaoqing"></div>
      <label class="icon iconfont icon-jiahao" for="file-select"></label>
      <input type="file" id="file-select" hidden />
    </form>
  </div>
</template>

<script>
import Recorder from "./Recorder";
export default {
  data() {
    return {
      isVoice: true,
      constraints: {
        audio: true
      }
    };
  },
  methods: {
    uploadFile() {}
  },
  components: {
    Recorder
  }
};
</script>

<style lang="less" scoped>
@import "../fonts/iconfont.css";

.bottom {
  box-sizing: border-box;
  text-align: left;
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  form {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    height: 100%;
    width: 100%;
  }
  .icon {
    font-size: 24px;
    padding: 0 6px;
  }
}
.input-wrap {
  flex: auto;
  height: 100%;
  padding: 0 4px;
}
.input {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  outline: none;
  padding: 0 6px;
  font-size: 16px;
  border-radius: 6px;
  user-select: none;
  box-sizing: border-box;
}

.btn {
  background: #317cf4;
  font-size: 16px;
  height: 100%;
  border: 1px solid rgb(12, 89, 213);
  color: #fff;
  border-radius: 6px;
  outline: none;
  user-select: none;
}
</style>
