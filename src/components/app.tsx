import { h, FunctionComponent } from "preact";
import { createPortal } from "preact/compat";
import { TokenApp } from "./TokenApp";

export const App: FunctionComponent = () => {
  const tokenAppContainer = document.getElementById("tokenApp");

  //   const styles: Record<string, h.JSX.CSSProperties> = {
  //     tokensContainer: {
  //       zIndex: 5,
  //       width: "100px",
  //       height: "100px",
  //       backgroundColor: "red",
  //       position: "relative",
  //       top: 0,
  //       left: 0,
  //     },
  //   };

  return tokenAppContainer ? (
    <div id="preact_root">
      {/* <div
        style={{
          backgroundColor: "gray",
          height: "100%",
          width: "100%",
        }}
      /> */}
      {/* <embed
        src="https://didley.dev"
        style="width: 100vw; height: 100vw; z-index: auto; position: absolute"
      /> */}
      {createPortal(<TokenApp />, tokenAppContainer)}
    </div>
  ) : null;
};
