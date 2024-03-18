import { NavigationProp, useNavigation } from "@react-navigation/native";
import { userLibrary } from "@src/api/user";
import { colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import { useFocus } from "@src/utils";
import React, { memo, useEffect, useMemo, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

enum TabSelect {
  all = "ALL",
  download = "DOWNLOAD",
}

const LibraryPage: React.FC = memo(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { focusCount, isFocused } = useFocus();

  const [searchValue, setSearchValue] = useState("");
  const [tab, setTab] = useState<string>(TabSelect.all);
  const [library, setLibrary] = useState<any>();

  const handleNavigateDisplayBook = (id: string) => {
    navigation.navigate(RootStackElements.DISPLAY_BOOK, {
      _id: id,
    });
  };

  const getData = async () => {
    await userLibrary()
      .then((result) => {
        setLibrary(result.data.books);
      })
      .catch((err) => {
        console.log("-----err----");
        console.log(err.response);
      });
  };

  useEffect(() => {
    if (focusCount === 1 && isFocused) {
      getData();
    }
  });

  useEffect(() => {
    if (focusCount > 1 && isFocused) {
      getData();
    }
  });

  const renderLibray = useMemo(() => {
    return (
      <View style={styles.bookDisplay}>
        {library &&
          library.map((item: any, index: number) => (
            <Pressable
              style={styles.bookDisplay}
              key={index}
              onPress={() => handleNavigateDisplayBook(item._id)}
            >
              <Image
                style={{ width: 150, height: 180 }}
                source={{
                  uri: item.illustration,
                }}
              />
            </Pressable>
          ))}
      </View>
    );
  }, [library]);

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
      {renderLibray}
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
    justifyContent: "space-between",
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
