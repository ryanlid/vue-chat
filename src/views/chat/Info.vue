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
    <cell-group>
      <cell title="查找聊天记录"></cell>
      <cell title="置顶聊天"></cell>
      <cell title="清空聊天记录"></cell>
    </cell-group>
  </div>
</template>

<script>
import Header from "../../components/Header";
import CellGroup from "../../components/CellGroup";
import Cell from "../../components/Cell";

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
    Header,
    CellGroup,
    Cell
  },
  methods: {}
};
</script>

<style lang="less" scoped>
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
  }
}
.avatar {
  width: 100%;
}
</style>
