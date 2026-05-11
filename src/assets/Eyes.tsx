type Props = {
  expression: "happy" | "normal";
};

export const Eyes = ({
  expression,
}: Props) => {
  if (expression === "happy") {
    return (
      <>
        <div
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            backgroundColor: "black",
            borderRadius: "50%",
            top: 85,
            left: 145,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 14,
            height: 14,
            backgroundColor: "black",
            borderRadius: "50%",
            top: 85,
            left: 205,
          }}
        />
      </>
    );
  }

  return null;
};