<template>
  <div>
    <template v-for="item in messages">
      <router-link :to="link(item.type, item.id)" :key="item.id">
        <ListItem :messages="item" />
      </router-link>
    </template>
  </div>
</template>

<script>
import ListItem from "../../components/ListItem";

export default {
  data() {
    return {
      messages: [
        {
          id: 1,
          icon: "",
          name: "name name1",
          message: "message",
          time: "12:20",
          brage: 3,
          type: "g"
        },
        {
          id: 2,
          icon: "",
          name: "name name2",
          message: "message",
          time: "12:20",
          brage: 12,
          type: "s"
        },
        {
          id: 3,
          icon: "",
          name: "name name3",
          message: "message",
          time: "12:20",
          brage: 88,
          type: "g"
        }
      ]
    };
  },
  components: {
    ListItem
  },
  methods: {
    link(type, id) {
      return type + "/" + id;
    }
  }
};
</script>

<style lang="less" scoped>
a {
  list-style: none;
  text-decoration: none;
}
</style>
