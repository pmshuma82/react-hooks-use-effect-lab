// Question.js
import React, { useState, useEffect } from 'react';

function Question({ question, answers, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>Time remaining: {timeRemaining} seconds</p>
    </div>
  );
}

export default Question;

