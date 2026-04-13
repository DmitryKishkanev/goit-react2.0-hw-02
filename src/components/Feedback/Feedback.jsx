import PropTypes from 'prop-types';
import style from './Feedback.module.css';

export default function Feedback({ options, values, total, positiveFeedback }) {
  return (
    <ul className={style.feedbackList}>
      {options.map(option => (
        <li className={style.feedbackItem} key={option}>
          <span>{option}:</span> <span>{values[option.toLowerCase()]}</span>
        </li>
      ))}
      <li className={style.feedbackItem}>
        Total: <span>{total}</span>
      </li>
      <li className={style.feedbackItem}>
        Positive: <span>{positiveFeedback}</span>
      </li>
    </ul>
  );
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
