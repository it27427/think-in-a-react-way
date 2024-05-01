const Button = ({ type, classes, text }) => {
  return (
    <button type={type} className={classes}>
      {text}
    </button>
  );
};

export default Button;
