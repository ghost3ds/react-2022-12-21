class Store {
  state;
  rootReducer;

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
  }
}

export const createStore = (() => {
  let store;
  return () => {
    if (!store) {
      store = new Store();
    }

    return store;
  };
})();
