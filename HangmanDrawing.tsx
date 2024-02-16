// body create

const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid #000",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      position: "absolute",
      background: "#000",
      top: "118px",
      right: "-0px",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "#000",
      top: "140px",
      right: "-87px",
      rotate: "-30deg",
      transformOrigin: "left-bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "#000",
      top: "140px",
      right: "-2px",
      rotate: "30deg",
      transformOrigin: "right-bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "#000",
      // borderTopRightRadius: "50%",
      // borderTopLeftRadius: "50%",
      // borderEndEndRadius: "50%",
      top: "240px",
      right: "-80px",
      rotate: "45deg",
      transformOrigin: "left-bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      position: "absolute",
      background: "#000",
      // borderTopRightRadius: "50%",
      // borderTopLeftRadius: "50%",
      // borderEndEndRadius: "50%",
      top: "240px",
      right: "-5px",
      rotate: "-40deg",
      transformOrigin: "right-bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "#000",
          top: "0",
          right: "0",
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "#000",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "#000",
          marginLeft: "120px",
        }}
      ></div>
      <div style={{ height: "10px", width: "250px", background: "#000" }}></div>
    </div>
  );
}

export default HangmanDrawing;
