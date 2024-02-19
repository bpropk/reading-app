import SearchBar from "@src/components/searchBar/searchBar";
import { SCREEN_WIDTH } from "@src/constants/screen";
import React, { memo, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/QY0glKP.jpeg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://i.imgur.com/bU4ipng_d.webp?maxwidth=1520&fidelity=grand",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/9sayMDx.png",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/LGqx90D.jpeg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/sFrO0LE.jpeg",
  },
];

const ENTRIES2 = ["BEST SELLER", "ROMANCE", "HISTORY", "BUSINESS"];

const HomePage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView>
      <ScrollView style={styles.root}>
        <SearchBar getSearchValue={(value) => setSearchValue(value)} />
        <View style={styles.lineBreak} />
        {/* Library */}
        <Text style={styles.library}>From Your Library</Text>
        <View style={{ paddingBottom: 10 }}>
          <Carousel
            data={ENTRIES1}
            renderItem={({ item }) => (
              <Image
                style={{ width: 150, height: 180 }}
                source={{
                  uri: item.illustration,
                }}
              />
            )}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={155}
            activeSlideAlignment={"start"}
            enableSnap={false}
            contentContainerCustomStyle={{ paddingRight: 10, paddingTop: 10 }}
          />
        </View>
        {/* Discover */}
        <View style={styles.lineBreak} />

        <View>
          <Text>Discover Books</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {ENTRIES2.map((item) => (
              <View
                style={{
                  borderRadius: 20,
                  padding: 20,
                  maxWidth: 120,
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text>{item}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 10,
  },
  lineBreak: {
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
  library: {
    fontWeight: "700",
    fontSize: 20,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
});

export default HomePage;
