import { Icons, colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import Star from "@src/components/star/star";
import React, { memo, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    illustration: "https://i.imgur.com/QY0glKP.jpeg",
    author: "Alexandre Potter",
    star: 4,
    review: 5121,
    price: "2.99",
  },
  {
    title: "Earlier this morning, NYC",
    illustration:
      "https://i.imgur.com/bU4ipng_d.webp?maxwidth=1520&fidelity=grand",
    author: "Alexandre",
    star: 4,
    review: 5121,
    price: "3.99",
  },
  {
    title: "White Pocket Sunset",
    illustration: "https://i.imgur.com/9sayMDx.png",
    author: "Alexandre",
    star: 1,
    review: 5121,
    price: "1.99",
  },
  {
    title: "Acrocorinth, Greece",
    illustration: "https://i.imgur.com/LGqx90D.jpeg",
    author: "Alexandre",
    star: 2,
    review: 5121,
    price: "4.99",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    illustration: "https://i.imgur.com/sFrO0LE.jpeg",
    author: "Alexandre",
    star: 3,
    review: 5121,
    price: "3.99",
  },
];

const DiscoverPage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <View style={styles.root}>
      <View style={{ paddingVertical: 20 }}>
        <Text>DISCOVER NEW BOOK</Text>
      </View>

      <LineBreak customStyle={{ marginHorizontal: -10 }} />
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
      <ScrollView>
        <View>
          {ENTRIES1.map((item, index) => (
            <View style={styles.bookContainer} key={index}>
              <View style={styles.bookDisplay}>
                <Image
                  style={{ width: 100, height: 120 }}
                  source={{
                    uri: item.illustration,
                  }}
                />
              </View>
              <View style={styles.bookDetail}>
                <Text ellipsizeMode="clip" style={styles.bookTitle}>
                  {item.title}
                </Text>
                <Text ellipsizeMode="clip" style={styles.bookAuthor}>
                  {item.author}
                </Text>
                <View style={styles.bookReview}>
                  <Star numberOfStar={item.star} />
                  <Text style={styles.numberReview}>
                    &#40;{item.review}&#41;
                  </Text>
                </View>
                <Text style={styles.bookPrice}>&#36;{item.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  bookContainer: {
    display: "flex",
    flexDirection: "row",
  },
  bookDisplay: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    marginVertical: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  bookDetail: {
    width: 250,
    height: 120,
    backgroundColor: colors.white,
    marginVertical: 12,
    paddingVertical: 5,
  },
  bookTitle: {
    ...Typography.h4,
    lineHeight: 20,
  },
  bookPrice: {
    ...Typography.h4,
    lineHeight: 20,
  },
  bookAuthor: {
    ...Typography.h4,
    lineHeight: 20,
    color: colors.darkGrey,
  },
  bookReview: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberReview: {
    color: colors.grey,
    ...Typography.h4,
  },
});

export default DiscoverPage;
