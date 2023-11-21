import { TextStyle, ViewStyle } from "react-native";

import colors from "./colors";

const CommonStyles: { [key: string]: ViewStyle | TextStyle } = {
  boxShadow: {
    shadowColor: colors.coolBlack,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  boxNoneShadow: {
    shadowColor: colors.transparent,
    shadowOpacity: 0,
    elevation: 0,
  },
};

export default CommonStyles;
