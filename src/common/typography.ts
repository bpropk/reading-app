import { TextStyle } from "react-native";

const Typography: { [key: string]: TextStyle } = {
  h1: {
    fontSize: 32,
    lineHeight: 58,
  },
  h2: {
    fontSize: 26,
    lineHeight: 48,
  },
  h3: {
    fontSize: 20,
    lineHeight: 36,
    fontWeight: "700",
  },
  h4: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  h5: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
  label: {
    fontSize: 12,
    lineHeight: 18,
  },
};

export default Typography;
