import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import { Boy } from "./assets/Boy";

import {
  translations,
  Language,
} from "./translations";

type Props = {
  language: Language;
};

export const BoyWave = ({
  language,
}: Props) => {
  const frame = useCurrentFrame();

  const rotation = interpolate(
    frame,
    [0, 15, 30, 45, 60],
    [-20, 30, -20, 30, -20]
  );

  const t = translations[language];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#87CEEB",

        justifyContent: "center",
        alignItems: "center",

        fontFamily: "Arial",
      }}
    >
      <Boy
        shirtColor="#2563EB"
        skinTone="#FFD6B0"
        armRotation={rotation}
      />

      <div
        style={{
          position: "absolute",

          bottom: 80,

          fontSize: 72,
          fontWeight: "bold",

          color: "white",

          textShadow:
            "0 4px 10px rgba(0,0,0,0.25)",
        }}
      >
        {t.greeting}
      </div>
    </AbsoluteFill>
  );
};