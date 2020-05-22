const setterReducer = (stateKey) => (state, action) => {
  state[stateKey] = action.payload;
};
const sliceStateSelector = (sliceName) => stateKey => state => state[sliceName][stateKey];

export {
  setterReducer,
  sliceStateSelector,
};
