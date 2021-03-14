/**
    Adder -> insert a number and click que button, will add !
 */

<template>
  <div class="container">
    <h3>The Almighty Adder!</h3>
    <pre>Result: {{ sum }}</pre>
    <input type="number" @input="handleInput($event.target.value)" />
    <div>
      <button @click="add">➕</button>
      <button @click="zerar">❌</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 0,
      currentValue: 0,
    };
  },

  methods: {
    handleInput(value) {
      if (value && !value.trim() == "") this.currentValue = parseInt(value);
      else this.currentValue = 0;
    },
    zerar() {
      if (this.sum === 0) alert("Result already empty!!");

      this.sum = 0;
    },
    add() {
      if (this.currentValue == 0) alert("Field cannot be empty or 0!");
      this.sum += this.currentValue;
    },
  },
};
</script>

<style>
.container {
  display: inline-flex;
  flex-direction: column;

  padding: 1rem;
  margin: 1rem;
  background-color: skyblue;
  border-radius: 25px;
  box-shadow: 0 8px 6px -6px black;

  width: 50%;
}

button {
  margin: 0.5rem;
}

pre {
  font-weight: bold;
  font-size: 1.2rem;
  color: yellow;
}

input {
  border-radius: 25px;
  border-style: none;
  outline: none;
  padding: 0.5rem 0 0.5rem 0.5rem;
}
</style>
