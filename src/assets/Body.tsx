type Props = {
  shirtColor: string;
};

export const Body = ({
  shirtColor,
}: Props) => {
  return (
    <div
      style={{
        position: "absolute",
        width: 170,
        height: 220,
        backgroundColor: shirtColor,
        borderRadius: 30,

        top: 140,
        left: 110,
      }}
    />
  );
};