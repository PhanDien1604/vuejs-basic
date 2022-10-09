<template lang="">
    <a-layout-content>
        Detail
    </a-layout-content>
</template>
<script>
import Admin from "@/layouts/Admin"
export default {
created() {
    this.$emit('setSelectedKeys', ['users'])
    this.$emit('update:layout', Admin)
},
}
</script>