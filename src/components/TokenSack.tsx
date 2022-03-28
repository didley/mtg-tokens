import { h, FunctionComponent } from "preact";

export const TokenSack: FunctionComponent = () => {
  const styles: Record<string, h.JSX.CSSProperties> = {
    tokensContainer: {
      zIndex: 5,
      width: "10vw",
      height: "10vh",
      backgroundColor: "red",
      position: "absolute",
      top: 0,
      left: 0,
    },
  };
  return <div style={styles.tokensContainer}>tokens</div>;
};
