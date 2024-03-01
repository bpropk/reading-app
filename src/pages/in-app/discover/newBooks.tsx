import { colors } from "@src/common/theme";
import React from "react";
import { memo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const fakeData = {
  title:
    "Beautiful and dramatic Antelope Canyon Lorem ipsum dolor sit amet et nuncat mergitur",
  illustration: "https://i.imgur.com/QY0glKP.jpeg",
  star: 4.6,
  author: "Douglas R Brown",
  price: 64.32,
};

const NewBookPage: React.FC = memo(() => {
  return (
    <ScrollView style={styles.root}>
      {/* Book Information */}
      <View style={styles.bookingInfoContainer}>
        <View style={{ paddingLeft: 15, flexShrink: 0 }}>
          <Image
            style={styles.bookingImage}
            source={{
              uri: fakeData.illustration,
            }}
          />
        </View>

        <View style={styles.bookingContent}>
          <Text>{fakeData.title}</Text>
          <Text>{fakeData.author}</Text>
          <View>
            <Text>start</Text>
          </View>
          <Text>{fakeData.price}</Text>
        </View>
      </View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  bookingInfoContainer: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "row",
  },
  bookingImage: {
    width: 150,
    height: 200,
  },
  bookingContent: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bookingTitle: {},
  bookingAuthor: {},
  bookingRate: {},
  bookingPrice: {},
});

export default NewBookPage;
