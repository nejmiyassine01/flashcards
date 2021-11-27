import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const topicsOptions = {
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name,
        icon,
        quizIds: []
      };
    },
    addQuizIds: (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
};

const topicsSlice = createSlice(topicsOptions);

export const selectAllTopics = (state) => state.topics.topics;

const { actions, reducer } = topicsSlice;
export const { addTopic, addQuizIds } = actions;

export default reducer;
