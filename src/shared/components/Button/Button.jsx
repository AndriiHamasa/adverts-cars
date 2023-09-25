import css from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ text, type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); 
    }
  };
  return (
    <button onClick={handleClick} className={`${[css[type]]}`}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
