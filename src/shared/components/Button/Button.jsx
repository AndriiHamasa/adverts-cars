import css from "./Button.module.css"

// eslint-disable-next-line react/prop-types
const Button = ({ text, type, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Вызываем переданный обработчик события клика, если он был предоставлен
    }
  };
  return <button onClick={handleClick} className={`${[css[type]]}`}>{text}</button>
};

export default Button