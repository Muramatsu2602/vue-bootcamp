<template>
  <div style="margin-top: 40px">Sou o ASD: {{ a }}</div>

  <button @click="inc">Add ➕</button>
</template>

<script>
export default {
  props: {
    c: { type: String, default: null },
  },

  data() {
    return {
      a: 0,
      b: "sou o b",
    };
  },

  methods: {
    inc() {
      console.log("let's increment!", this.b);
      this.a += 1;
    },
  },
};
</script>

<style>
</style>
