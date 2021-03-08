<template>
  <div>
    Hello
    <options />
    <options />
    <options />

    <composition-api/>
  </div>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div id="test">Hello World!</div>
  </div>
  <router-view /> -->
</template>

<script>
import Options from '@/components/OptionsApi.vue';
import CompositionApi from '@/components/CompositionApi.vue';

export default {
  components: { Options, CompositionApi },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.negrito {
  font-weight: bold;
  font-size: 50px;
}
</style>
