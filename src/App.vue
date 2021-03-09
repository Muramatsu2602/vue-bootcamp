<template>
  <div>
    <!-- By Yoyo -->
    <h1>Lesson 2: Yoyo's</h1>
    <options />
    <composition-api />
    <!-- Lesson 2 Challenge-->
    <h1>Lesson 2: Challenge</h1>
    <meu-composition/>
    <meu-option/>
  </div>
</template>

<script>
import Options from '@/components/OptionsApi.vue';
import CompositionApi from '@/components/CompositionApi.vue';

import MeuOption from '@/components/desafio-aula2/MeuOption.vue';
import MeuComposition from '@/components/desafio-aula2/MeuComposition.vue';

export default {
  components: {
    Options, CompositionApi, MeuComposition, MeuOption,
  },
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
