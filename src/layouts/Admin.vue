<template>
  <a-layout>
    <Slider 
      :collapsed="collapsed" 
      :themed="themed" 
    />
    <a-layout :style="{marginLeft: collapsed ? '80px' : '200px', transition: 'all 0.2s'}">
      <Header 
        :collapsed="collapsed" 
        :themed="themed"
        @checkCollapsed="changeCollapsed" 
        @checkThemed="changeTheme"
      />
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
      collapsed: false,
      themed: 'dark',
      checkTheme: false
    }
  },

  methods: {
    changeCollapsed() {
      this.collapsed = !this.collapsed
    },
    changeTheme() {
      if(this.themed === 'dark') {
        this.themed = 'light'
      }else {
        this.themed = 'dark'
      }
    }
  },
}
</script>

<style>
</style>
  