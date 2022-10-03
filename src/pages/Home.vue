<template lang="">
  <a-layout-content
    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
  >
    Content
  </a-layout-content>
</template>
<script>
import Admin from "@/layouts/Admin"
export default {
  created() {
    this.$emit('update:layout', Admin)
  },
}
</script>
<style>
</style>