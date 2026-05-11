type Props = {
  side: "left" | "right";
  skinTone: string;
  rotation?: number;
};

export const Arm = ({
  side,
  skinTone,
  rotation = 0,
}: Props) => {
  const isLeft = side === "left";

  // braço esquerdo parado
  if (isLeft) {
    return (
      <div
        style={{
          position: "absolute",

          width: 24,
          height: 110,

          backgroundColor: skinTone,

          borderRadius: 20,

          top: 150,
          left: 85,
        }}
      />
    );
  }

  // braço direito acenando
  return (
    <div
      style={{
        position: "absolute",

        width: 24,
        height: 110,

        backgroundColor: skinTone,

        borderRadius: 20,

        top: 120,
        left: 265,

        // braço já começa levantado
        transform: `
          rotate(-55deg)
          rotate(${rotation}deg)
        `,

        transformOrigin: "top center",
      }}
    />
  );
};