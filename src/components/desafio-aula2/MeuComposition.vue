<template>
  <div class="container">
    <h3>The Alertifier!</h3>
    <input @input="recordMessage($event.target.value)" />
    <div>
      <button @click="sendMessage">Send 💬</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("");

    // arrow function
    function recordMessage(input) {
      msg.value = input;
    }

    const sendMessage = () => {
      console.log("sending:", msg);
      alert("My Message:");
    };

    return { msg };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: inline-flex;
  flex-direction: column;

  padding: 1rem;
  margin: 1rem;
  background-color: salmon;
  border-radius: 25px;
  box-shadow: 0 8px 6px -6px black;

  width: 50%;
}

button {
  margin: 0.5rem;
}

input {
  border-radius: 25px;
  border-style: none;
  outline: none;
  padding: 0.5rem 0 0.5rem 0.5rem;
}
</style>
