<template>
  <a-layout>
    <Slider />
    <a-layout>
      <Header />
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
    }
  }
  </script>
  
  <style>
  </style>
  