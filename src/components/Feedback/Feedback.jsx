import PropTypes from 'prop-types';

export default function Feedback({ options, values, total, positiveFeedback }) {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          {option}: {values[option.toLowerCase()]}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}</li>
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
