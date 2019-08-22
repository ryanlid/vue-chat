<template>
  <div class="info">
    <Header>聊天信息</Header>
    <div class="member-list">
      <div class="item" v-for="item in member" :key="item.id">
        <div>
          <img class="avatar" :src="item.avatar" />
        </div>
        <div class="text-center">
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="item add">
        <div>
          <img class="avatar" src="../../assets/jiahao.png" />
        </div>
        <div>
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
    <div class="list-group">
      <div class="list-item">查找聊天记录</div>
      <div class="list-item">置顶聊天</div>
      <div class="list-item">清空聊天记录</div>
    </div>
    <div class="list-group">
      <div class="list-item">投诉</div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  data() {
    return {
      member: [
        {
          id: 2,
          avatar: "https://static.oonnnoo.com/upload/dlVXh_rgA.png",
          name: "王小二"
        },
        {
          id: 3,
          avatar: "https://static.oonnnoo.com/upload/dlVXh_rgA.png",
          name: "王小二"
        },
        {
          id: 4,
          avatar: "https://static.oonnnoo.com/upload/dlVXh_rgA.png",
          name: "王小二"
        },
        {
          id: 5,
          avatar: "https://static.oonnnoo.com/upload/dlVXh_rgA.png",
          name: "王小二"
        },
        {
          id: 8,
          avatar: "https://static.oonnnoo.com/upload/dlVXh_rgA.png",
          name: "王小二"
        }
      ]
    };
  },
  components: {
    Header
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../fonts/iconfont.css";
.info {
  position: absolute;
  top: 0;
  background: #efeff4;
  height: 100%;
}
.member-list {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin-bottom: 10px;
  .item {
    width: 25%;
    padding: 20px 20px 0;
    box-sizing: border-box;
    &.add .icon {
      font-size: 20px;
    }
  }
}
.avatar {
  width: 100%;
}
.list-group {
  margin-bottom: 10px;
}
.list-item {
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #efeff4;
}
</style>
