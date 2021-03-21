<template>
  <div class="mt">
    <div>Sou composition: {{ a }}</div>
    <button @click="inc">Add me ➕</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    text: { type: String, default: null },
  },

  setup() {
    const a = ref(0);
    console.log("sou um comp composition");

    // arrow function
    const inc = () => {
      console.log("vamos inc");
      a.value += 1;
    };

    return { a, inc };
  },
};
</script>

<style lang="scss" scoped>
.mt {
  margin-top: 50px;
}
</style>
