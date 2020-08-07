<template>
  <div id="app">
    <header></header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans';
  height: 100%;
}
.main {
  min-height: calc(100% - 234px);
}
footer {
  margin-top: 80px;
}
</style>
