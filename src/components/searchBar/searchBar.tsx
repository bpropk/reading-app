import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { colors } from "@src/common/theme";

interface SearchBarProps {
  getSearchValue: (value: string) => void;
}

const SearchBar = ({ getSearchValue }: SearchBarProps) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    getSearchValue(searchPhrase);
  }, [searchPhrase]);

  return (
    <View style={styles.container}>
      {/* search Icon */}
      <Feather name="search" size={20} color={colors.grey} />
      {/* Input field */}
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchPhrase}
        onChangeText={setSearchPhrase}
      />
      {/* cross Icon, depending on whether the search bar is clicked or not */}

      {searchPhrase && (
        <Entypo
          name="cross"
          size={20}
          color={colors.lightGrey}
          onPress={() => {
            setSearchPhrase("");
          }}
        />
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    padding: 10,
    flexDirection: "row",
    width: "auto",
    backgroundColor: colors.lightGrey,
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    marginHorizontal: 10,
    flexGrow: 1,
  },
});
