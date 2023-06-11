import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { useFeedback } from './components/feedbackContext/feedbackContext';

function App() {
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = useFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positive={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
}

export default App