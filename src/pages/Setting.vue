<template lang="">
    <a-layout-content>
      Setting
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