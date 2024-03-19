import { Icons, colors } from "@src/common/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

interface StarProps {
  numberOfStar: number;
}

const Star: React.FC<StarProps> = ({ numberOfStar }) => {
  const displayStar = (star: number) => {
    const numberStar = Math.round(star);
    return Array.from(Array(5).keys()).map((value) => {
      return (
        <Icons.Star
          key={value}
          fill={numberStar > value ? colors.vividYellow : colors.grey}
          style={styles.icon}
        />
      );
    });
  };

  return <View style={styles.root}>{displayStar(numberOfStar)}</View>;
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});

export default Star;
