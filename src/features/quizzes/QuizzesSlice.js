import { createSlice } from "@reduxjs/toolkit";
import { addQuizIds } from "../topics/TopicsSlice";

const initialState = {
  quizzes: {}
};

const quizzesOptions = {
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
};

const quizzesSlice = createSlice(quizzesOptions);

export const addQuizForTopicId = (quiz) => {
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizIds({ topicId: topicId, quizId: id }));
  };
};

export const selectAllQuizzes = (state) => state.quizzes.quizzes;

const { actions, reducer } = quizzesSlice;
export const { addQuiz } = actions;

export default reducer;
