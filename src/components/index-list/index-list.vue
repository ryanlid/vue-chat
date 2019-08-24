<template>
  <div class="indexlist">
    <ul
      class="indexlist-content"
      ref="content"
      :style="{ height: currentHeight + 'px', 'margin-right': navWidth + 'px' }"
    >
      <slot></slot>
    </ul>

    <div class="indexlist-nav" ref="nav">
      <ul class="indexlist-navlist">
        <li
          class="indexlist-navitem"
          v-for="section in sections"
          :key="section.index"
        >
          {{ section.index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    height: Number
  },
  data() {
    return {
      sections: [
        {
          index: "A"
        },
        {
          index: "B"
        },
        {
          index: "C"
        },
        {
          index: "D"
        },
        {
          index: "E"
        },
        {
          index: "F"
        },
        {
          index: "G"
        },
        {
          index: "H"
        },
        {
          index: "I"
        },
        {
          index: "J"
        },
        {
          index: "K"
        },
        {
          index: "L"
        }
      ],
      navWidth: 0,
      currentHeight: this.height
    };
  },
  watch: {
    height(val) {
      if (val) {
        this.currentHeight = val;
      }
    }
  },
  mounted() {
    if (this.currentHeight !== 0 && !this.currentHeight) {
      requestAnimationFrame(() => {
        this.currentHeight =
          document.documentElement.clientHeight -
          this.$refs.content.getBoundingClientRect().top;
      });
    }
    this.$nextTick(() => {
      this.navWidth = this.$refs.nav.clientWidth;
    });
  },
  methods: {}
};
</script>

<style>
.indexlist {
  width: 100%;
  position: relative;

  overflow: hidden;
}
.indexlist-content {
  margin: 0;
  padding: 0;
  overflow: auto;
}

.indexlist-nav {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: 0;
  background-color: #fff;
  border-left: solid 1px #ddd;
  text-align: center;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.indexlist-navlist {
  padding: 0;
  margin: 0;
  list-style: none;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}

.indexlist-navitem {
  padding: 2px 6px;
  font-size: 12px;
  user-select: none;
  -webkit-touch-callout: none;
}
ul {
  padding: 0;
}
</style>
