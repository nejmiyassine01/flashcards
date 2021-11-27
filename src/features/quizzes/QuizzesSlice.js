import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/TopicsSlice";

const initialState = {
  quizzes: {
    1: {
      id: 1,
      name: "Quiz Name",
      topicId: "11",
      cardIds: ["1", "2"]
    }
  }
};

const quizzesOptions = {
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const quiz = {
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          topicId: action.payload.topicId,
          cardIds: action.payload.cardIds
        }
      };
      Object.assign(state.quizzes, quiz);
    }
  }
};

const quizzesSlice = createSlice(quizzesOptions);

export const thunkAction = (payload) => (dispatch) => {
  dispatch(addQuiz(payload));
  dispatch(addQuizIds(payload));
};

export const selectAllQuizzes = (state) => state.quizzes.quizzes;

const { actions, reducer } = quizzesSlice;
export const { addQuiz } = actions;

export default reducer;
