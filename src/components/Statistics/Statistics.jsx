import { useFeedback } from '../FeedbackContext/FeedbackContext';
import css from '../Statistics/Statistics.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = () => {
  const { good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage } = useFeedback();

  return (
    <>
      {!countTotalFeedback() ? (
        <Notification />
      ) : (
        <ul className={css.list}>
          <li className={css.listItem}>
            <p className={css.listItemParagraph}>
              Good:
              <span className={css.listItemSpan}>{good}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.listItemParagraph}>
              Neutral:
              <span className={css.listItemSpan}>{neutral}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.listItemParagraph}>
              Bad:
              <span className={css.listItemSpan}>{bad}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.listItemParagraph}>
              Total:
              <span className={css.listItemSpan}>{countTotalFeedback()}</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p className={css.listItemParagraph}>
              Positive feedback:
              <span className={css.listItemSpan}>{countPositiveFeedbackPercentage()}</span>
            </p>
          </li>
        </ul>
      )}
    </>
  );
};
