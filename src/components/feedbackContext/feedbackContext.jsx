import { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const incrementTargetFeedbackCounter = e => {
    const buttonName = e.target.name;

    if (buttonName === 'good') setGood(good + 1);
    if (buttonName === 'neutral') setNeutral(neutral + 1);
    if (buttonName === 'bad') setBad(bad + 1);
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (good || neutral || bad) {
      const totalPositiveFeedbackPercentageCounter = Math.round(
        (100 * good) / (good + neutral + bad)
      );
      return `${totalPositiveFeedbackPercentageCounter}%`;
    }
    return 0;
  };

  return (
    <FeedbackContext.Provider
      value={{
        good,
        neutral,
        bad,
        options,
        incrementTargetFeedbackCounter,
        countTotalFeedback,
        countPositiveFeedbackPercentage,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
