const CardHeader = () => {
  return (
    <div className="card-header">
      <p className="result-header">Your Result</p>
      <div className="score-card">
        <h1 className="average-score">76</h1>
        <p className="average-total">of 100</p>
      </div>

      <h2 className="comment-header">Great</h2>
      <p className="comment-text">
        You scored higher than 65% of the people who have taken this tests.
      </p>
    </div>
  );
};

export default CardHeader;
