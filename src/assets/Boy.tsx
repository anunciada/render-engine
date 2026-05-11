import { Arm } from "./Arm";
import { Body } from "./Body";
import { Head } from "./Head";

type Props = {
  shirtColor: string;
  skinTone: string;
  armRotation: number;
};

export const Boy = ({
  shirtColor,
  skinTone,
  armRotation,
}: Props) => {
  return (
    <div
      style={{
        position: "relative",
        width: 400,
        height: 400,
      }}
    >
      <Body shirtColor={shirtColor} />

      <Arm
        side="left"
        skinTone={skinTone}
      />

      <Arm
        side="right"
        skinTone={skinTone}
        rotation={armRotation}
      />

      <Head skinTone={skinTone} />
    </div>
  );
};