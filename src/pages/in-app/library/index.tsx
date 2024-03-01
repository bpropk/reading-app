import { colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import PartBreak from "@src/components/partBreak/partBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import React, { memo, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

enum TabSelect {
  all = "ALL",
  download = "DOWNLOAD",
}

const ENTRIES1 = [
  {
    illustration: "https://i.imgur.com/QY0glKP.jpeg",
  },
  {
    illustration:
      "https://i.imgur.com/bU4ipng_d.webp?maxwidth=1520&fidelity=grand",
  },
  {
    illustration: "https://i.imgur.com/9sayMDx.png",
  },
  {
    illustration: "https://i.imgur.com/LGqx90D.jpeg",
  },
  {
    illustration: "https://i.imgur.com/sFrO0LE.jpeg",
  },
];

const LibraryPage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState<string>(TabSelect.all);

  return (
    <ScrollView style={styles.root}>
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
      <LineBreak customStyle={{ marginHorizontal: -10 }} />
      <View style={styles.yourBookingContainer}>
        <Pressable
          style={[styles.tab, tab === TabSelect.all && styles.tabSelected]}
          onPress={() => setTab(TabSelect.all)}
        > 
          <Text style={tab === TabSelect.all && { color: colors.lightBlue }}>
            {TabSelect.all}
          </Text>
        </Pressable>
        <Pressable
          style={[styles.tab, tab === TabSelect.download && styles.tabSelected]}
          onPress={() => setTab(TabSelect.download)}
        >
          <Text
            style={tab === TabSelect.download && { color: colors.lightBlue }}
          >
            {TabSelect.download}
          </Text>
        </Pressable>
      </View>
      <LineBreak customStyle={{ marginHorizontal: -10 }} />
      <View style={styles.bookDisplay}>
        {ENTRIES1.map((item, index) => (
            <View style={styles.bookDisplay} key={index}>
                <Image
                  style={{ width: 150, height: 180 }}
                  source={{
                  uri: item.illustration,
              }}
            />
            </View>
          ))}
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
  yourBookingContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 1,
  },
  bookDisplay: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItem: "center",
    marginVertical: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  tabSelected: {
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 1,
    color: colors.lightBlue,
  },
  tab: {
    paddingTop: 20,
    paddingBottom: 15,
    ...Typography.h5,
    paddingHorizontal: 15,
  },
});

export default LibraryPage;
