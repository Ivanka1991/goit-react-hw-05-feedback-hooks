import PropTypes from 'prop-types';
import Notification from '../notification/notification';
import css from './statistic.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <>
    {total ? (
      <ul className={css.statistic__info}>
        <li className={css.info__item__good}>Good : {good}</li>
        <li className={css.info__item__neutral}>Neutral : {neutral}</li>
        <li className={css.info__item__bad}>Bad : {bad}</li>
        <li className={css.info__item}>Total : {total}</li>
        <li className={css.info__item}>
          Positive feedback : {positiveFeedbackPercentage} %
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given" />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;
