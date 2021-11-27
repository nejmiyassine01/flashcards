import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
};

const cardsOptions = {
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
};

const cardsSlice = createSlice(cardsOptions);

export const selectAllCards = (state) => state.cards.cards;
const { actions, reducer } = cardsSlice;
export const { addCard } = actions;
export default reducer;
