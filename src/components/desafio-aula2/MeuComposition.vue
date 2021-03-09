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
import { ref } from '@vue/reactivity';
export default {
  setup() {
    msg = ref("");

    // arrow function
    const recordMessage = (value) => {
      msg = value;
    };

    const sendMessage = () => {
      console.log("sending:", msg)
      alert("My Message:", msg);
    };
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

  width: 50%;
}

button {
  margin: 0.5rem;
}
</style>
