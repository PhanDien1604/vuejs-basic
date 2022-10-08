<template lang="">
    <a-layout-content>
      Orders
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