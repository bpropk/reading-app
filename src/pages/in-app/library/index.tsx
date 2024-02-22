import { colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import React, { memo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

enum TabSelect {
  all = "ALL",
  download = "DOWNLOAD",
}

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
