import { Eyes } from "./Eyes";
import { Hair } from "./Hair";
import { Mouth } from "./Mouth";

type Props = {
  skinTone: string;
};

export const Head = ({
  skinTone,
}: Props) => {
  return (
    <>
      <div
        style={{
          position: "absolute",

          width: 120,
          height: 120,

          borderRadius: "50%",
          backgroundColor: skinTone,

          top: 40,
          left: 130,
        }}
      />

      <Hair />

      <Eyes expression="happy" />

      <Mouth />
    </>
  );
};