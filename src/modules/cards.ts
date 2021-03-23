import { readonly } from "vue";

interface State {
  list: [];
}

const state: State = {
  list: []
};

export default function useCards() {
  return readonly({
    state
  });
}
