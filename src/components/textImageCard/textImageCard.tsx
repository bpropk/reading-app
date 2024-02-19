import React, { useMemo } from "react";
import {
  DimensionValue,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import FastImage, { Source } from "react-native-fast-image";

import { CommonStyles, colors } from "@src/common/theme";
import Image from "../Image/image";

export enum TextImageCardSize {
  large = "large",
  small = "small",
  custom = "custom",
}

export interface TextImageCardProps {
  url?: string;
  text?: string | null;
  imageDimension?: { width: number; height: number };
  containerStyle?: StyleProp<ViewStyle>;
  size?: TextImageCardSize;
  reduceWidthValue?: number;
  width?: DimensionValue;
  height?: DimensionValue;
  textFont?: { fontSize?: number; lineHeight?: number; fontFamily?: string };
  isLocalImage?: boolean;
  source?: Source;
  textContainer?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  disabledShadow?: boolean;
}

export default function TextImageCard({
  url,
  text,
  containerStyle,
  imageDimension,
  size,
  reduceWidthValue,
  width: imageWidthProps,
  height: imageHeightProps,
  textFont: textFontProps,
  isLocalImage,
  source,
  textContainer,
  onPress,
  disabled,
  disabledShadow,
}: TextImageCardProps) {
  const { width } = useWindowDimensions();

  const { imageWidth, imageHeight, textFont } = useMemo(() => {
    const result: {
      imageWidth?: DimensionValue;
      imageHeight?: DimensionValue;
      textFont?: {
        fontSize?: number;
        lineHeight?: number;
        fontFamily?: string;
      };
    } = {
      imageWidth: imageDimension?.width,
      imageHeight: imageDimension?.height,
    };

    const adjustWidth = width - (reduceWidthValue || 0);

    switch (size) {
      case TextImageCardSize.large:
        if (!imageDimension) {
          result.imageWidth = adjustWidth;
          result.imageHeight = adjustWidth * 0.85;
        }
        break;

      case TextImageCardSize.small:
        if (!imageDimension) {
          result.imageWidth = adjustWidth / 2;
          result.imageHeight = (adjustWidth / 2) * 1.25;
        }
        break;

      case TextImageCardSize.custom:
        // textFontProps && (result.textFont = textFontProps);
        // imageWidthProps && (result.imageWidth = imageWidthProps);
        // imageHeightProps && (result.imageHeight = imageHeightProps);
        break;

      default:
        break;
    }

    return result;
  }, [
    imageDimension,
    imageHeightProps,
    imageWidthProps,
    reduceWidthValue,
    size,
    textFontProps,
    width,
  ]);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.container,
        containerStyle,
        { width: imageWidth, height: imageHeight },
      ]}
    >
      <View style={[!disabledShadow && CommonStyles.boxShadow, styles.image]}>
        <Image
          style={[styles.image, { width: "100%", height: "100%" }]}
          source={
            isLocalImage
              ? source
              : { uri: url, priority: FastImage.priority.normal }
          }
          resizeMode={FastImage.resizeMode.cover}
        >
          <View style={[styles.textContainer, textContainer]}>
            <Text style={[styles.text, textFont]}>{text}</Text>
          </View>
        </Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
  },
  textContainer: {
    position: "absolute",
    bottom: 19,
    left: 19,
    width: "80%",
  },
  text: {
    color: colors.white,
  },
});
