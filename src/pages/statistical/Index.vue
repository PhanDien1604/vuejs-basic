<template lang="">
    <a-layout-content>
      Statistical
    </a-layout-content>
  </template>
  <script>
  import Admin from "@/layouts/Admin"
  export default {
    created() {
      this.$emit('setSelectedKeys', ['statistical'])
      this.$emit('update:layout', Admin)
    },
  }
  </script>