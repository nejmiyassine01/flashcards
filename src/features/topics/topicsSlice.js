import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {
    1: {
      id: 1,
      name: "topic name",
      icon: "icon",
      quizIds: ["11", "10"]
    }
  }
};

const topicsOptions = {
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const topic = {
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.name,
          icon: action.payload.icon,
          quizIds: []
        }
      };
      Object.assign(state.topics, topic);
    }
  }
};

const topicsSlice = createSlice(topicsOptions);

export const selectAllTopics = (state) => state.topics.topics;

export const { actions, reducer } = topicsSlice;
export const { addTopic } = actions;

export default reducer;
