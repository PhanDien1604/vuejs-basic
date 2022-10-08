<template lang="">
    <a-layout-content>
      Contact
    </a-layout-content>
  </template>
  <script>
  import Admin from "@/layouts/Admin"
  export default {
    created() {
      this.$emit('setSelectedKeys', ['contact'])
      this.$emit('update:layout', Admin)
    },
  }
  </script>