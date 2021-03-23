import { readonly } from "vue";

// ---------------------- Interface ------------------
interface Card {
  id: number;
  name: string;
  price: number;
  attack: number;
  defence: number;
}

interface State {
  list: [];
}

// -------------------------------------------

// the cards will go here!
const state: State = {
  list: []
};

export default function useCards() {
  return readonly({
    state
  });
}
