import { colors } from "@src/common/theme";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import React, { memo, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const DiscoverPage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <ScrollView style={styles.root}>
      <View style={{ paddingVertical: 20 }}>
        <Text>DISCOVER NEW BOOK</Text>
      </View>

      <LineBreak customStyle={{ marginHorizontal: -10 }} />
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
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

export default DiscoverPage;
