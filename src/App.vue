<script setup>
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <div class="columns is-centered" id="topRow">
    <div>
      <router-link :to="{ name: 'Home' }" > <i class="fa-solid fa-house"></i></router-link>
    </div>
    <div>
      <router-link :to="{ name: 'Dictionary' }"> <i class="fa-solid fa-magnifying-glass"></i></router-link>
    </div>
    <div>
      <router-link :to="{ name: 'About' }"><i class="fa-solid fa-circle-info"></i></router-link>
    </div>
  </div>
  <div id="midRow">
    <router-view />
  </div>
  <div id="footer">
    <FooterBar/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Ubuntu&display=swap');
  html, 
  body {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      background-color: var(--gri);
      font-family: 'Ubuntu', sans-serif;
  }

  #app {
      font-family: 'Ubuntu', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: var(--blu2);
      margin-top: 60px;
    }
  #topRow{
    position: absolute;
    top: 30px;
    left: 10px;
    right: 10px;
    height: 60px;
    font-size: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 3px 0.3px var(--blu);
  }
  #midRow{
    position: absolute;
    top: 60px;
    left: 0px;
    right: 0px;
    /*height: 500px;*/
    flex: 1 1 auto;
  }
  .fa-house, .fa-magnifying-glass, .fa-circle-info{
    color:var(--blu);
  }

</style>
