const isCorrectAnswer = (userAnswer, correctAnswer, userName, correctAnswersCount) => {
  if (userAnswer === correctAnswer.toString()) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

export default isCorrectAnswer;