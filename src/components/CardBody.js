import Subject from "./Subject";
import Button from "./Button";

const CardBody = () => {
  return (
    <div className="card-body">
      <strong style={{ color: "hsl(224, 30%, 27%)" }}> Summary </strong>
      <Subject
        imgSrc={"../images/icon-reaction.svg"}
        imgAlt={"reaction icon"}
        name={"Reaction"}
        score={80}
        color={"hsl(0, 100%, 67%)"}
        bgColor={"hsl(0, 100%, 98%)"}
      />
      <Subject
        imgSrc={"../images/icon-memory.svg"}
        imgAlt={"memory icon"}
        name={"Memory"}
        score={92}
        color={"hsl(39, 100%, 56%)"}
        bgColor={"hsl(39, 100%, 98%)"}
      />
      <Subject
        imgSrc={"../images/icon-verbal.svg"}
        imgAlt={"verbal icon"}
        name={"Verbal"}
        score={61}
        color={"hsl(166, 100%, 37%)"}
        bgColor={"hsl(166, 100%, 98%)"}
      />
      <Subject
        imgSrc={"../images/icon-visual.svg"}
        imgAlt={"visual icon"}
        name={"Visual"}
        score={72}
        color={"hsl(234, 85%, 45%)"}
        bgColor={"hsl(234, 85%, 98%)"}
      />
      <Button link={"#"} btnName={"Continue"} />
    </div>
  );
};

export default CardBody;
