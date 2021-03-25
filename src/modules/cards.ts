import { readonly } from 'vue';

// ---------------------- Interface ------------------
interface Card {
  id: number;
  name: string;
  price: number;
  attack: number;
  defence: number;
}

interface State {
  list: Card[];
}

// -------------------------------------------

// the cards will go here!
const state: State = {
  list: [
    {
      id: 1,
      name: 'Pikachu',
      price: 10,
      attack: 5,
      defence: 10,
    },
  ],
};

export default function useCards() {
  return readonly({
    state,
  });
}
