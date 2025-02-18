import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
export const increment = createAction("counter/increment");
export const reset = createAction("counter/reset");
export const toggleSettings = createAction("counter/toggleSettings");
export const setMinMax = createAction("counter/setMinMax", (min, max) => ({
  payload: { min, max },
}));

const initialState = {
  count: 0,
  maxCount: 10,
  minCount: 0,
  settings: false,
  readyForWork: true,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      if (state.count < state.maxCount) {
        state.count += 1;
      }
    })
    .addCase(reset, (state) => {
      state.count = state.minCount;
    })
    .addCase(toggleSettings, (state) => {
      state.settings = !state.settings;
    })
    .addCase(setMinMax, (state, action) => {
      state.minCount = action.payload.min;
      state.maxCount = action.payload.max;
      state.count = action.payload.min;
    });
});

export const store = configureStore({
  reducer: { counter: counterReducer },
});

export type RootState = ReturnType<typeof store.getState>;
