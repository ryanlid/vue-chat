<template>
  <div class="list">
    <Header :left="false">通讯录</Header>

    <div class="list-index-list">
      <index-list :height="height">
        <index-section
          v-for="item in alphabet"
          :index="item.index"
          :key="item.index"
        >
          <cell
            v-for="cell in item.cells"
            :title="cell"
            :key="cell.index"
          ></cell>
        </index-section>
      </index-list>
    </div>
    <bottom-tab class="bottom"></bottom-tab>
  </div>
</template>

<script>
import BottomTab from "../../components/BottomTab";
import Header from "../../components/Header";
import indexList from "../../components/index-list/index-list";
import indexSection from "../../components/index-section/index-section";
import Cell from "../../components/Cell";

export default {
  data() {
    return {
      height: 0,
      alphabet: [
        { index: "A", cells: ["Aaron", "Alden", "Austin"] },
        { index: "B", cells: ["Baldwin", "Braden"] },
        { index: "C", cells: ["Carl", "Chandler", "Clyde"] },
        { index: "D", cells: ["David"] },
        { index: "E", cells: ["Edgar", "Elton"] },
        { index: "F", cells: ["Floyd", "Freeman"] },
        { index: "G", cells: ["Gavin"] },
        { index: "H", cells: ["Hector", "Henry"] },
        { index: "I", cells: ["Ian"] },
        { index: "J", cells: ["Jason", "Joshua"] },
        { index: "K", cells: ["Kane"] },
        { index: "L", cells: ["Lambert"] },
        { index: "M", cells: ["Matthew", "Morgan"] },
        { index: "N", cells: ["Neville"] },
        { index: "O", cells: ["Oliver", "Oscar"] },
        { index: "P", cells: ["Perry"] },
        { index: "Q", cells: ["Quinn"] },
        { index: "R", cells: ["Ramsey"] },
        { index: "S", cells: ["Scott", "Seth", "Spencer"] },
        { index: "T", cells: ["Timothy", "Todd", "Trevor"] },
        { index: "U", cells: ["Udolf"] },
        { index: "V", cells: ["Victor", "Vincent"] },
        { index: "W", cells: ["Walton", "Willis"] },
        { index: "X", cells: ["Xavier"] },
        { index: "Y", cells: ["Yvonne"] },
        { index: "Z", cells: ["Zack", "Zane"] }
      ]
    };
  },
  components: {
    Header,
    BottomTab,
    Cell,
    indexList,
    indexSection
  },
  methods: {},
  mounted() {
    this.$nextTick().then(() => {
      this.height = document
        .getElementsByClassName("list-index-list")[0]
        .getBoundingClientRect().height;
    });

    // "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(index => {
    //   let cells = NAMES.filter(name => name[0] === index);
    //   this.alphabet.push({
    //     index,
    //     cells
    //   });
    // });
    // console.log(JSON.stringify(this.alphabet));
  }
};
</script>

<style lang="less" scoped>
.list-index-list {
  position: absolute;
  top: 50px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
}
</style>
