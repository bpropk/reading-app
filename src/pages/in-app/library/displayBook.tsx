import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  Location,
  Reader,
  ReaderProvider,
  useReader,
} from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system";
import { colors, Icons } from "@src/common/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/navigations/rootStack";
import CustomButton from "@src/components/button/button";

function Inner() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { width } = useWindowDimensions();
  const [heightBtn, setHeightBtn] = useState<number>(0);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [totalLocation, setTotalLocation] = useState(0);

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
          src="http://localhost:3200/book/detail.epub"
          width={width}
          height={heightBtn}
          fileSystem={useFileSystem}
          onLocationChange={(
            totalLocations: number,
            currentLocation: Location,
            progress: number
          ) => {
            setTotalLocation(totalLocations);
            setCurrentLocation(currentLocation.end.location);
          }}
          onDisplayError={(reason) => {
            console.log("reason", reason);
          }}
          onStarted={() => {
            console.log("start");
          }}
          onReady={() => {
            console.log("ready");
          }}
        />
      </View>

      <View style={styles.options}>
        <CustomButton
          style={{ marginHorizontal: 10 }}
          title={"Go Previous"}
          onPress={goPrevious}
        />
        <View style={{ marginHorizontal: 10 }}>
          <Text>
            {currentLocation}&#47;{totalLocation}
          </Text>
        </View>
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
    alignItems: "center",
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
