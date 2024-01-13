import SearchBar from "@src/components/searchBar/searchBar";
import React, { memo, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomePage: React.FC = memo(() => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SafeAreaView>
      <View>
        <SearchBar getSearchValue={(value) => setSearchValue(value)} />
      </View>
    </SafeAreaView>
  );
});

const style = StyleSheet.create({});

export default HomePage;
