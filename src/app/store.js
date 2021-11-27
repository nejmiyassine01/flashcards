import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '../features/topics/TopicsSlice';
import quizzesReducer from '../features/quizzes/QuizzesSlice';
import cardsReducer from '../features/cards/CardSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer,
  },
});
