<template lang="">
    <a-layout-content>
      Account
    </a-layout-content>
  </template>
  <script>
  import Admin from "@/layouts/Admin"
  export default {
    created() {
      this.$emit('setSelectedKeys', ['account'])
      this.$emit('update:layout', Admin)
    },
  }
  </script>