import { h } from "preact";

export const App = () => {
  return (
    <div id="preact_root">
      <div>
        <embed
          src="https://didley.dev"
          style="width: 100vw; height: 100vw; z-index: auto; position: absolute"
        />
        <div
          style="
          z-index: 5;
          width: 100px;
          height: 100px;
          background-color: burlywood;
          position: relative;
        "
        >
          tokens
        </div>
      </div>
    </div>
  );
};

export default App;
