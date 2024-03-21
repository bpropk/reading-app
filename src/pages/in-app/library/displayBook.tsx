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
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import CustomButton from "@src/components/button/button";

function Inner() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const { width } = useWindowDimensions();
  const [heightBtn, setHeightBtn] = useState<number>(0);
  const [currentLocation, setCurrentLocation] = useState(0);
  const [totalLocation, setTotalLocation] = useState(0);
  const [src, setSrc] = useState<any>("");

  const { goNext, goPrevious, goToLocation } = useReader();

  const route =
    useRoute<RouteProp<RootStackParamList, RootStackElements.DISPLAY_BOOK>>();

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setSrc(`http://localhost:3200/book/detail.epub?id=${route?.params?._id}`);
  }, [route]);

  const getLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setHeightBtn(height);
  };

  const handleNavigateMenu = () => {
    goToLocation("bk01-toc.xhtml");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconsContainer}>
        <Pressable onPress={handleBack}>
          <Icons.ChevronLeft fill={colors.black} style={styles.icon} />
        </Pressable>
        <Pressable onPress={handleNavigateMenu}>
          <Icons.MorePage fill={colors.black} style={styles.icon} />
        </Pressable>
      </View>

      <View style={{ height: "100%" }} onLayout={getLayout}>
        <Reader
          src={src}
          width={width}
          height={heightBtn}
          fileSystem={useFileSystem}
          enableSelection={true}
          onLocationChange={(
            totalLocations: number,
            currentLocation: Location,
            progress: number
          ) => {
            setTotalLocation(totalLocations);
            setCurrentLocation(currentLocation.end.location);
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
  iconsContainer: {
    position: "absolute",
    top: 10,
    zIndex: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
