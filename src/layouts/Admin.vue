<template>
  <fullscreen v-model:fullscreen="fullscreen" :teleport="teleport" :page-only="pageOnly">
    <a-layout class="fullscreen-wrapper">
      <Slider 
        :collapsed="collapsed" 
        :themed="themed" 
      />
      <a-layout :style="{marginLeft: collapsed ? '80px' : '200px', transition: 'all 0.2s'}">
        <Header 
          :collapsed="collapsed" 
          :themed="themed"
          :fullscreen="fullscreen"
          @checkCollapsed="changeCollapsed" 
          @checkThemed="changeTheme"
          @clickFullScreen="toggle"
        />
        <router-view />
        <Footer />
      </a-layout>
    </a-layout>
  </fullscreen>
</template>
  
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Slider from '@/components/Slider.vue'
import {
    ref,
    defineComponent,
    toRefs,
    reactive
  } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
    Slider,
  },
  data() {
    return {
      collapsed: false,
      themed: 'dark',
      checkTheme: false,
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
    },
    toggleApi () {this.$fullscreen.toggle(document.querySelector('.fullscreen-wrapper'), {
        teleport: this.teleport,
        callback: (isFullscreen) => {
          this.fullscreen = isFullscreen
        }
      })
    }
      
  },

  setup () {
    const root = ref()
    const state = reactive({
      fullscreen: false,
      teleport: false,
      pageOnly: false
    })
    function toggle () {
      state.fullscreen = !state.fullscreen
    }

    return {
      root,
      ...toRefs(state),
      toggle
    }
  }
})
</script>

<style>
</style>
  