import { colors } from "@src/common/theme";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import React, { memo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const LibraryPage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <ScrollView style={styles.root}>
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
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
});

export default LibraryPage;
