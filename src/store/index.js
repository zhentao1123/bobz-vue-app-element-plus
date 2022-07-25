import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      author: 'bob',
    };
  },
});

export default store