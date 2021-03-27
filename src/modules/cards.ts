import { readonly } from "vue";

// ---------------------- Interface ------------------
interface Card {
  id: number;
  name: string;
  price: number;
  attack: number;
  defence?: number; // talvez nao venha nada nesse
  // defence: number | undefined; // old syntax
}

interface State {
  list: Card[];
}
// -------------------------------------------

// --------------State-----------------

// the cards will go here!
const state: State = {
  list: [
    {
      id: 1,
      name: "Pikachu",
      price: 10,
      attack: 5,
      defence: 10
    },
    {
      id: 2,
      name: "Bulbassaur",
      price: 20,
      attack: 7,
      defence: 34
    },
    {
      id: 3,
      name: "Charmander",
      price: 40,
      attack: 6,
      defence: 51
    }
  ]
};

//------------------------------------------------------//

export default function useCards() {
  return readonly({
    state
  });
}
