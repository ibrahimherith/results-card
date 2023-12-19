const Subject = ({ imgSrc, imgAlt, name, score, color, bgColor }) => {
  return (
    <div className="subject-container" style={{ backgroundColor: bgColor }}>
      <div className="subject" style={{ color: color }}>
        <img src={imgSrc} alt={imgAlt} />
        <p>{name}</p>
      </div>
      <p style={{ color: "hsl(241, 100%, 89%)" }}>
        <span style={{ color: "hsl(224, 30%, 27%)" }}>{score}</span> / 100
      </p>
    </div>
  );
};

export default Subject;
