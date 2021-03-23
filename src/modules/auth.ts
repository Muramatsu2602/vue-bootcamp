import { readonly } from "vue";

interface State {
  id: string;
  name: string;
  token: string;
}

const state: State = {
  id: "",
  name: "",
  token: ""
};

export default function useAuth() {
  return readonly({
    state,
  });
}
