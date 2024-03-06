import { colors } from "@src/common/theme";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import React, { memo, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    illustration: "https://i.imgur.com/QY0glKP.jpeg",
    price: "2.99$",
  },
  {
    title: "Earlier this morning, NYC",
    illustration:
      "https://i.imgur.com/bU4ipng_d.webp?maxwidth=1520&fidelity=grand",
    price: "3.99$",
  },
  {
    title: "White Pocket Sunset",
    illustration: "https://i.imgur.com/9sayMDx.png",
    price: "1.99$",
  },
  {
    title: "Acrocorinth, Greece",
    illustration: "https://i.imgur.com/LGqx90D.jpeg",
    price: "4.99$",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    illustration: "https://i.imgur.com/sFrO0LE.jpeg",
    price: "3.99$",
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
                <View style={styles.textDisplay}>
                  <Text ellipsizeMode='clip'style={styles.textTitle}> 
                    {item.title}
                  </Text>
                  <Text ellipsizeMode='clip'style={styles.textTitle}> 
                    {item.price} to buy
                  </Text>
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
  textDisplay: {
    width: 250,
    height: 120,
    backgroundColor: colors.white,
    marginVertical: 12,
    paddingVertical: 5,
    // paddingHorizontal: 10,
    
  },
  textTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DiscoverPage;
