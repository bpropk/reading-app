// import React from "react";
// import { memo } from "react";
// import {
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   useWindowDimensions,
// } from "react-native";
// import {
//   Reader,
//   ReaderProvider,
//   Theme,
//   useReader,
// } from "@epubjs-react-native/core";
// import { useFileSystem } from "@epubjs-react-native/expo-file-system"; // for Expo project
// import { dark, light, sepia } from "@src/utils/theme";

// export const DisplayBookPage: React.FC = memo(() => {
//   const { width, height } = useWindowDimensions();
//   const { changeTheme, changeFontSize, goNext } = useReader();

//   const handleTheme = (value: Theme) => {
//     goNext();
//   };

//   return (
//     <ReaderProvider>
//       <SafeAreaView style={styles.container}>
//         <View style={styles.options}>
//           <TouchableOpacity onPress={() => handleTheme(light)}>
//             <Text>Light Theme</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => handleTheme(dark)}>
//             <Text>Dark Theme</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => handleTheme(sepia)}>
//             <Text>Sepia Theme</Text>
//           </TouchableOpacity>
//         </View>

//         <Reader
//           src="https://epubjs-react-native.s3.amazonaws.com/failing-forward.epub"
//           width={width}
//           height={height * 0.7}
//           fileSystem={useFileSystem}
//           onPress={() => {
//             console.log("Press");
//           }}
//           onLayout={() => {
//             console.log("changeLayout");
//           }}
//         />
//       </SafeAreaView>
//     </ReaderProvider>
//   );
// });

import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Reader, ReaderProvider, useReader } from "@epubjs-react-native/core";
import { useFileSystem } from "@epubjs-react-native/expo-file-system";
import { dark, light, sepia } from "@src/utils/theme";

function Inner() {
  const { width, height } = useWindowDimensions();
  const { changeTheme, goNext } = useReader();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.options}>
        <TouchableOpacity onPress={() => changeTheme(light)}>
          <Text>Light Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeTheme(dark)}>
          <Text>Dark Theme</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeTheme(sepia)}>
          <Text>Sepia Theme</Text>
        </TouchableOpacity>
      </View>

      <Reader
        src="https://s3.amazonaws.com/moby-dick/OPS/package.opf"
        width={width}
        height={height * 0.7}
        fileSystem={useFileSystem}
      />
      <View style={styles.options}>
        <TouchableOpacity onPress={goNext}>
          <Text>Go next</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goNext}>
          <Text>Go next</Text>
        </TouchableOpacity>
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
    justifyContent: "space-around",
    alignItems: "center",
  },
  options: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  currentFormat: {
    textAlign: "center",
  },
});
