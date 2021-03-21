<template>
  <!-- <div>
    <h1>Lesson 2: Yoyo's</h1>
    <options />
    <composition-api />

    <h1>Lesson 2: Challenge</h1>
    <meu-composition />
    <meu-option />

    <h1>Lesson 3: Yoyo's</h1>
    <div>Hello</div>
    <div>Total: {{ total }}</div>

    <options c="Componente options 1" :total="total" @inc="incHandler" />
    <options c="Componente options 2" @inc="incHandler" />
    <options c="Componente options 3" @inc="incHandler" />

    <composition-api text="Componente Composition 1" @inc="incHandler" />
    <composition-api text="Componente Composition 2" @inc="incHandler" />
    <composition-api text="Componente Composition 3" @inc="incHandler" />
  </div> -->

  <div id="nav">
    <router-link to="/">Home </router-link>
    <router-link to="/about">About </router-link>
    <router-link to="/components">Components </router-link>
  </div>
  <router-view />
</template>

<script>
import { ref } from "vue";
import Options from "@/components/OptionsApi.vue";
import CompositionApi from "@/components/CompositionApi.vue";

import MeuOption from "@/components/desafio-aula2/MeuOption.vue";
import MeuComposition from "@/components/desafio-aula2/MeuComposition.vue";

export default {
  components: {
    Options,
    CompositionApi,
    MeuComposition,
    MeuOption,
  },

  setup() {
    const total = ref(0);

    const incHandler = () => {
      console.log("total", total.value);
      total.value += 1;
    };

    return { total, incHandler };
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
