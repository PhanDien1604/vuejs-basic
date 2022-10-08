<template lang="">
  <a-layout-content>
    Content
  </a-layout-content>
</template>
<script>
import Admin from "@/layouts/Admin"
export default {
  created() {
    this.$emit('setSelectedKeys', ['dashboard'])
    this.$emit('update:layout', Admin)
  },
}
</script>
<style>
  .ant-layout-content {
    margin: calc(24px + 64px) 16px;
    padding: 24px;
    background-color: #fff;
    height: 2000px;
  }
</style>