import { Composition } from "remotion";
import { BoyWave } from "./BoyWave";

export const Root = () => {
  return (
    <>
      <Composition
        id="BoyWave"
        component={BoyWave}
        durationInFrames={60}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          language: "en",
        }}
      />
    </>
  );
};