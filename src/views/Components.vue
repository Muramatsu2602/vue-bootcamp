<template>
  <div>
    <h1>{{ listOfCards.length }} Pokemons</h1>

    <div
      v-if="listOfCards.length"
      style="border: 1px solid blue; border-radius: 25px; padding: 1rem"
    >
      <!-- {{ listOfCards }} -->
      <div v-for="card in listOfCards" :key="card.id" class="cards">
        {{ card }}
      </div>
    </div>

    <h1 style="margin-top: 100px">Lesson 2: Yoyo's</h1>
    <options />
    <composition-api />

    <!-- <h1>Lesson 2: Challenge</h1>
    <meu-composition />
    <meu-option /> -->

    <h1>Lesson 3: Yoyo's</h1>
    <div>Hello</div>
    <div>Total: {{ total }}</div>

    <options c="Componente options 1" :total="total" @inc="incHandler" />
    <composition-api text="Componente Composition 1" @inc="incHandler" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import Options from "@/components/OptionsApi.vue";
import CompositionApi from "@/components/CompositionApi.vue";

import MeuOption from "@/components/desafio-aula2/MeuOption.vue";
import MeuComposition from "@/components/desafio-aula2/MeuComposition.vue";

import useAuth from "@/modules/auth";
import useCards from "@/modules/cards";

export default defineComponent({
  components: {
    Options,
    CompositionApi,
    MeuComposition,
    MeuOption,
  },

  setup() {
    // const auth = useAuth();
    const cards = useCards();
    const total = ref(0);

    console.log("Components.cards", cards);

    // Computed Functions
    const listOfCards = computed(() => {
      return cards.state.list;
    }); // this form doesnt require 'return'

    //functions
    const incHandler = () => {
      console.log("total", total.value);
      total.value += 1;
    };

    return { total, incHandler, listOfCards };
  },
});
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  padding: 1.5rem;
  border-radius: 25px;
}
</style>