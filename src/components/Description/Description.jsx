import PropTypes from 'prop-types';
import style from './Description.module.css';

export default function Description({ title, note = '', children }) {
  return (
    <div className={style.container}>
      <h1 className={style.title}>{title}</h1>
      {note && <p className={style.paragraph}>{note}</p>}
      {children}
    </div>
  );
}

Description.propTypes = {
  title: PropTypes.string.isRequired,
  noye: PropTypes.string,
  children: PropTypes.node,
};
