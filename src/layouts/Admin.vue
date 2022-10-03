<template>
  <a-layout>
    <Slider :collapsed="collapsed"/>
    <a-layout>
      <Header @checkCollapsed="changeCollapsed"/>
      <router-view />
      <Footer />
    </a-layout>
  </a-layout>
</template>
  
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Slider from '@/components/Slider.vue';
  
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Slider
  },

  data() {
    return {
      collapsed: false
    }
  },
  methods: {
    changeCollapsed(collap) {
      this.collapsed = collap
    }
  },
}
</script>

<style>
</style>
  