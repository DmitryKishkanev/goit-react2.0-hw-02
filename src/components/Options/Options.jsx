import PropTypes from 'prop-types';

export default function Options({
  options,
  onLeaveFeedback,
  showReset,
  onReset,
}) {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </button>
      ))}
      {showReset && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  showReset: PropTypes.bool.isRequired,
  onReset: PropTypes.func.isRequired,
};
