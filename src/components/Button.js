const Button = ({ link, btnName, btnColor }) => {
  return (
    <div className="Button">
      <a href={link} className="btn">
        {btnName}
      </a>
    </div>
  );
};

export default Button;
