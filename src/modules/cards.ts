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
const state: State = {
  list: []
};

// ----------------Actions--------------------
const actions = {
  loadCards() {
    const mockData = [
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
      },
      {
        id: 4,
        name: "Piplup",
        price: 45,
        attack: 11,
        defence: 98
      },
      {
        id: 5,
        name: "Biduf",
        price: 32,
        attack: 87,
        defence: 22
      }
    ];

    return new Promise(resolve => {
      console.log("Vamos carregar os cards");

      
      setTimeout(() => {
        console.log("depois de 5s");
      }, 5000);
    });
  }
};

//------------------------------------------------------//

export default function useCards() {
  return readonly({
    state,
    actions
  });
}
