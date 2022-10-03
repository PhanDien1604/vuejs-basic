<template lang="">
  <a-layout-header style="background: #fff; padding: 0">
    <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="clickMenu"
    />
    <menu-fold-outlined
      v-else
      class="trigger"
      @click="clickMenu"
    />
  </a-layout-header>
</template>
<script>
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';

export default {
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },

  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    clickMenu() {
      this.collapsed = !this.collapsed
      this.$emit('checkCollapsed', this.collapsed);
    }
  },
}
</script>
<style>
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
</style>