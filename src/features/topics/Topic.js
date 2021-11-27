import React from "react";
import { useSelector } from "react-redux";
import { selectAllTopics } from "./TopicsSlice";
import { selectAllQuizzes } from "../quizzes/QuizzesSlice";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Topic() {
  const topics = useSelector(selectAllTopics);
  const quizzes = useSelector(selectAllQuizzes);
  let { topicId } = useParams();
  const topic = topics[topicId];
  const quizzesForTopic = topic.quizIds.map((quizId) => quizzes[quizId]);

  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
