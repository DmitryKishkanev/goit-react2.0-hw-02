import PropTypes from 'prop-types';
import style from './Notification.module.css';

export default function Notification({ text }) {
  return <p className={style.paragraph}>{text}</p>;
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
