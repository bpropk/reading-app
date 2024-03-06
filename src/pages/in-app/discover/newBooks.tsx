import { colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import React from "react";
import { memo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const fakeData = {
  title:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan auctor nulla, et placerat magna consectetur in. Etiam neque metus.",
  illustration: "https://i.imgur.com/QY0glKP.jpeg",
  star: 4.6,
  numberReview: 2440,
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
          <Text style={styles.bookingTitle}>{fakeData.title}</Text>
          <Text style={styles.bookingAuthor}>{fakeData.author}</Text>
          <View style={styles.bookingRate}>
            <Text>{fakeData.star}</Text>
            <Text></Text>
            <Text></Text>
          </View>
          <Text style={styles.bookingPrice}>{`$ ${fakeData.price}`}</Text>
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
    width: 130,
    height: 170,
  },
  bookingContent: {
    paddingHorizontal: 15,
    flexDirection: "column",
    flexShrink: 1,
  },
  bookingTitle: {
    ...Typography.h2,
    fontWeight: "600",
  },
  bookingAuthor: {
    paddingTop: 10,
    ...Typography.h4,
    color: colors.navyBlue,
  },
  bookingRate: {
    paddingTop: 5,
    ...Typography.h4,
  },
  bookingPrice: {
    paddingTop: 10,
    ...Typography.h4,
    fontWeight: "600",
    color: colors.black,
  },
});

export default NewBookPage;
