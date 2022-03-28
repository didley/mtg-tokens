import { FunctionComponent, h } from "preact";
import { useState } from "preact/hooks";

export const Token: FunctionComponent = () => {
  const [loc, setLoc] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const windowX = window.innerWidth;
    const windowY = window.innerHeight;

    const halfOfTokenWidthPercent = 15;

    const movedLocXPercent = (100 / windowX) * e.x;
    const movedLocYPercent = (100 / windowY) * e.y;

    const removedHalfOfTokenWidth = movedLocXPercent - halfOfTokenWidthPercent;
    const removedHalfOfTokenHeight = movedLocYPercent - halfOfTokenWidthPercent;

    console.log({
      e,
      movedLocXPercent,
      movedLocYPercent,
      removedHalfOfTokenWidth,
      removedHalfOfTokenHeight,
      x: e.x,
      y: e.y,
    });

    setLoc({ ...loc, x: removedHalfOfTokenWidth, y: removedHalfOfTokenHeight });
  };

  return (
    <div
      onMouseDown={handleMouseMove}
      style={{
        width: "30vw",
        paddingTop: "15%",
        paddingBottom: "15%",
        position: "absolute",
        zIndex: 3,
        top: `${loc.y}%`,
        left: `${loc.x}%`,
        backgroundColor: "blue",
      }}
    >
      token
    </div>
  );
};
