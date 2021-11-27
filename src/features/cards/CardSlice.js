import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {
    1: {
      id: 1,
      front: "Front of card",
      back: "Back of card"
    }
  }
};

const cardsOptions = {
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const card = {
        [action.payload.id]: {
          id: action.payload.id,
          front: action.payload.front,
          back: action.payload.back
        }
      };
      Object.assign(state.cards, card);
    }
  }
};

const cardsSlice = createSlice(cardsOptions);

export const selectAllCards = (state) => state.cards.cards;

const { actions, reducer } = cardsSlice;
export const { addCard } = actions;

export default reducer;
