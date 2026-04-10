import PropTypes from 'prop-types';

export default function Description({ title, note = '', children }) {
  return (
    <div>
      <h1>{title}</h1>
      {note && <p>{note}</p>}
      {children}
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  noye: PropTypes.string,
  children: PropTypes.node,
};
