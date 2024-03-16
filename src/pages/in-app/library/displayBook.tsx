import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Reader, ReaderProvider, useReader } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system";
import { colors, Icons } from "@src/common/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/navigations/rootStack";
import CustomButton from "@src/components/button/button";

function Inner() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { width, height } = useWindowDimensions();
  const [heightBtn, setHeightBtn] = useState<number>(0);
  const { goNext, goPrevious } = useReader();

  const handleBack = () => {
    navigation.goBack();
  };

  const getLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setHeightBtn(height);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.wrapperIcon} onPress={handleBack}>
        <Icons.ChevronLeft fill={colors.black} style={styles.icon} />
      </Pressable>
      <View style={{ height: "100%" }} onLayout={getLayout}>
        <Reader
          src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
          width={width}
          height={heightBtn}
          fileSystem={useFileSystem}
        />
      </View>

      <View style={styles.options}>
        <CustomButton
          style={{ marginHorizontal: 10 }}
          title={"Go Previous"}
          onPress={goPrevious}
        />
        <CustomButton
          style={{ marginHorizontal: 10 }}
          title={"Go Next"}
          onPress={goNext}
        />
      </View>
    </SafeAreaView>
  );
}

export const DisplayBookPage: React.FC = () => {
  return (
    <ReaderProvider>
      <Inner />
    </ReaderProvider>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 70,
  },
  options: {
    paddingTop: 10,
    flexDirection: "row",
    flexShrink: 0,
  },
  currentFormat: {
    textAlign: "center",
  },
  wrapperIcon: {
    position: "absolute",
    left: 10,
    zIndex: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
