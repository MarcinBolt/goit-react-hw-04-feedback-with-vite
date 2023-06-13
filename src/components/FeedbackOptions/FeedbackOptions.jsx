import { useFeedback } from '../FeedbackContext/FeedbackContext';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export const FeedbackOptions = () => {
  const { options, incrementTargetFeedbackCounter } = useFeedback();

  return (
    <div className={css.feedbackButtonsDiv}>
      {options.map(btn => (
        <button
          key={nanoid()}
          className={css.feedbackButton}
          type="button"
          name={btn}
          onClick={incrementTargetFeedbackCounter}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};
