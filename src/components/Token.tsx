import { FunctionComponent, h } from "preact";

export const Token: FunctionComponent = () => {
  return (
    <div
      style={{
        width: "30vw",
        paddingTop: "15%",
        paddingBottom: "15%",
        position: "absolute",
        zIndex: 3,
        top: `${20}%`,
        left: `${20}%`,
        backgroundColor: "blue",
      }}
    >
      token
    </div>
  );
};
