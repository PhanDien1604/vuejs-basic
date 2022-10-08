<template lang="">
    <a-layout-content>
      Category
    </a-layout-content>
  </template>
  <script>
  import Admin from "@/layouts/Admin"
  export default {
    created() {
      this.$emit('setSelectedKeys', ['category'])
      this.$emit('update:layout', Admin)
    },
  }
  </script>