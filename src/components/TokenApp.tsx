import { h, FunctionComponent } from "preact";
import { Token } from "./Token";
import { TokenSack } from "./TokenSack";

export const TokenApp: FunctionComponent = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <TokenSack />
      <Token />
    </div>
  );
};
