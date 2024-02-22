import { Icons, colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import PartBreak from "@src/components/partBreak/partBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import { SCREEN_WIDTH } from "@src/constants/screen";
import React, { memo, useState } from "react";
import {
  Image,
  Platform,
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

const ENTRIES2 = [
  "BEST SELLER",
  "ROMANCE",
  "HISTORY",
  "BUSINESS",
  "BIOGRAPHIES",
  "HEALTH, MIND & BODY",
];

const HomePage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <ScrollView style={styles.root}>
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
      {/* Library */}
      <PartBreak />
      <Text style={styles.library}>From Your Library</Text>
      <View style={{ paddingBottom: 20 }}>
        <Carousel
          vertical={false}
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
      <PartBreak />
      <View>
        <Text style={styles.discover}>Discover Books</Text>
        <Text style={styles.categoryTitle}>
          Tap on a category or cover below
        </Text>
        <LineBreak />
        <View style={styles.categoryContainer}>
          {ENTRIES2.map((item, index) => (
            <View style={styles.categoryItem} key={index}>
              <View style={styles.categoryWrapper}>
                <Text
                  style={{ color: colors.white }}
                  numberOfLines={2}
                  ellipsizeMode={"clip"}
                >
                  {item}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <Carousel
          vertical={false}
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
          contentContainerCustomStyle={{ paddingRight: 10, paddingBottom: 15 }}
        />

        <LineBreak />
        <View style={styles.moveCategoryContainer}>
          <Text style={{ color: colors.lightBlue }}>
            Move From This Category
          </Text>
          <Icons.ChevronRight
            fill={colors.lightBlue}
            style={{ height: 15, width: 10 }}
          />
        </View>
        <PartBreak />
      </View>
      {/* Recents Books */}
      <Text style={styles.discover}>More Like Your Recent Books</Text>
      <Text style={styles.categoryTitle}>Based your activites</Text>
      <LineBreak />
      <Carousel
        vertical={false}
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
        contentContainerCustomStyle={{ paddingRight: 10, paddingVertical: 15 }}
      />
      <LineBreak />
      <View style={styles.moveCategoryContainer}>
        <Text style={{ color: colors.lightBlue }}>More</Text>
        <Icons.ChevronRight
          fill={colors.lightBlue}
          style={{ height: 15, width: 10 }}
        />
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  library: {
    ...Typography.h3,
  },
  discover: {
    ...Typography.h4,
  },
  categoryTitle: {
    ...Typography.label,
    paddingBottom: 10,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingVertical: 10,
  },
  categoryItem: {
    maxWidth: 120,
    justifyContent: "center",
    padding: 5,
  },
  categoryWrapper: {
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  moveCategoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
});

export default HomePage;
