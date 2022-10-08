<template lang="">
    <a-layout-content>
      Warehouse
    </a-layout-content>
  </template>
  <script>
  import Admin from "@/layouts/Admin"
  export default {
    created() {
      this.$emit('setSelectedKeys', ['warehouse'])
      this.$emit('update:layout', Admin)
    },
  }
  </script>