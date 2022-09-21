import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <div style={{ fontSize: "60px" }} className="screen" mode="single" max={10}>
      {value}
    </div>
  );
};

export default Screen;
