import {
  NavigationProp,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { ListBooksAPI } from "@src/api/book";
import { BookUserLibraryAPI } from "@src/api/user";
import { Icons, colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import PartBreak from "@src/components/partBreak/partBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import { SCREEN_WIDTH } from "@src/constants/screen";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import React, { memo, useEffect, useMemo, useState } from "react";
import { Pressable } from "react-native";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const ENTRIES1 = [
  {
    title: "Beautiful and dramatic Antelope Canyon",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/QY0glKP.jpeg",
  },
  {
    title: "Earlier this morning, NYC",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration:
      "https://i.imgur.com/bU4ipng_d.webp?maxwidth=1520&fidelity=grand",
  },
  {
    title: "White Pocket Sunset",
    subtitle: "Lorem ipsum dolor sit amet et nuncat ",
    illustration: "https://i.imgur.com/9sayMDx.png",
  },
  {
    title: "Acrocorinth, Greece",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/LGqx90D.jpeg",
  },
  {
    title: "The lone tree, majestic landscape of New Zealand",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/sFrO0LE.jpeg",
  },
];
enum EnumCategory {
  BEST_SELLER = "BEST SELLER",
  ROMANCE = "ROMANCE",
  HISTORY = "HISTORY",
  ADVENTURE = "ADVENTURE",
  BIOGRAPHY = "BIOGRAPHY",
  FANTASY = "FANTASY",
}

const ENTRIES2 = [
  EnumCategory.BEST_SELLER,
  EnumCategory.ROMANCE,
  EnumCategory.HISTORY,
  EnumCategory.ADVENTURE,
  EnumCategory.BIOGRAPHY,
  EnumCategory.FANTASY,
];

const HomePage: React.FC = memo(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [searchValue, setSearchValue] = useState("");
  const [checked, setChecked] = useState<EnumCategory>(EnumCategory.ROMANCE);
  const [discoverBook, setDiscoverBook] = useState();
  const [userLibray, setUserLibrary] = useState<any>();
  const isFocused = useIsFocused();

  const handleNavigateDiscoverNewBook = (id: string) => {
    navigation.navigate(RootStackElements.DISCOVER_NEW_PAGE, {
      _id: id,
    });
  };

  const handleNavigateDiscoverCategory = () => {
    navigation.navigate(RootStackElements.DISCOVER_PAGE, {
      discover: checked,
    });
  };

  const handleNavigateDisplayBook = (id: string) => {
    navigation.navigate(RootStackElements.DISPLAY_BOOK, {
      _id: id,
    });
  };

  const getBooksInfo = async (subject?: string) => {
    await ListBooksAPI(subject)
      .then((result) => {
        setDiscoverBook(result.data.books);
      })
      .catch((err) => {
        console.log("------err-------");
        console.log(err.response);
      });
  };

  const getBooksBookUserLibraryAPI = async () => {
    await BookUserLibraryAPI()
      .then((result) => {
        setUserLibrary(result.data.books);
      })
      .catch((err) => {
        console.log("-----err----");
        console.log(err.response);
      });
  };

  const changeDiscorverCategory = async (item: EnumCategory) => {
    setChecked(item);
    if (item !== EnumCategory.BEST_SELLER) {
      await getBooksInfo(item);
    } else {
      await getBooksInfo();
    }
  };

  const renderCurrentLibrary = useMemo(() => {
    return (
      <>
        {userLibray && (
          <View>
            <PartBreak />
            <Text style={styles.library}>From Your Library</Text>
            <View style={{ paddingBottom: 20 }}>
              <Carousel
                vertical={false}
                data={userLibray as any}
                renderItem={({ item }: any) => (
                  <Pressable
                    onPress={() => handleNavigateDisplayBook(item?._id)}
                  >
                    <Image
                      style={{ width: 150, height: 180 }}
                      source={{
                        uri: item?.illustration,
                      }}
                    />
                  </Pressable>
                )}
                sliderWidth={SCREEN_WIDTH}
                itemWidth={155}
                activeSlideAlignment={"start"}
                enableSnap={false}
                contentContainerCustomStyle={{
                  paddingRight: 10,
                  paddingTop: 10,
                }}
              />
            </View>
          </View>
        )}
      </>
    );
  }, [userLibray]);

  const renderListCategory = useMemo(() => {
    return (
      <Carousel
        vertical={false}
        data={discoverBook as any}
        renderItem={({ item }: any) => {
          return (
            <Pressable onPress={() => handleNavigateDiscoverNewBook(item._id)}>
              <Image
                style={{ width: 150, height: 180 }}
                source={{
                  uri: item.illustration,
                }}
              />
            </Pressable>
          );
        }}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={155}
        activeSlideAlignment={"start"}
        enableSnap={false}
        contentContainerCustomStyle={{
          paddingRight: 10,
          paddingBottom: 15,
        }}
      />
    );
  }, [discoverBook]);

  useEffect(() => {
    getBooksInfo(EnumCategory.ROMANCE);
  }, []);

  useEffect(() => {
    if (isFocused) {
      // Perform actions you want when the screen is focused.
      // This could be fetching data, re-rendering components, or any other refresh logic.
      getBooksBookUserLibraryAPI();
    }
  }, [isFocused]);

  return (
    <ScrollView style={styles.root}>
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
      {/* Library */}
      {renderCurrentLibrary}
      {/* Discover */}
      <PartBreak />
      <View>
        <Text style={styles.discover}>Discover Books</Text>
        <Text style={styles.categoryTitle}>
          Tap on a category or cover below
        </Text>
        <LineBreak />
        <View style={styles.categoryContainer}>
          {ENTRIES2.map((item, index) => (
            <View style={styles.categoryItem} key={index}>
              <Pressable onPress={() => changeDiscorverCategory(item)}>
                <View
                  style={[
                    styles.categoryWrapper,
                    checked === item && styles.categoryunWrapper,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      checked === item && styles.categoryClickOnText,
                    ]}
                  >
                    {item}
                  </Text>
                </View>
              </Pressable>
            </View>
          ))}
        </View>
        {discoverBook && renderListCategory}

        <LineBreak />
        <Pressable
          style={styles.moveCategoryContainer}
          onPress={handleNavigateDiscoverCategory}
        >
          <Text style={{ color: colors.lightBlue }}>
            Move From This Category
          </Text>
          <Icons.ChevronRight
            fill={colors.lightBlue}
            style={{ height: 15, width: 10 }}
          />
        </Pressable>
        <PartBreak />
      </View>
      {/* Recents Books */}
      <Text style={styles.discover}>More Like Your Recent Books</Text>
      <Text style={styles.categoryTitle}>Based your activites</Text>
      <LineBreak />
      <Carousel
        vertical={false}
        data={ENTRIES1}
        renderItem={({ item }) => (
          <Image
            style={{ width: 150, height: 180 }}
            source={{
              uri: item.illustration,
            }}
          />
        )}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={155}
        activeSlideAlignment={"start"}
        enableSnap={false}
        contentContainerCustomStyle={{ paddingRight: 10, paddingVertical: 15 }}
      />
      <LineBreak />
      <View style={styles.moveCategoryContainer}>
        <Text style={{ color: colors.lightBlue }}>More</Text>
        <Icons.ChevronRight
          fill={colors.lightBlue}
          style={{ height: 15, width: 10 }}
        />
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
  library: {
    ...Typography.h3,
  },
  discover: {
    ...Typography.h4,
  },
  categoryTitle: {
    ...Typography.label,
    paddingBottom: 10,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  categoryItem: {
    width: 120,
    justifyContent: "space-around",
    padding: 5,
  },
  categoryWrapper: {
    height: 60,
    borderRadius: 120,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: "center",
    justifyContent: "center",
    borderColor: colors.lightBlue,
    borderWidth: 1,
  },
  categoryunWrapper: {
    backgroundColor: colors.lightBlue,
  },
  categoryText: {
    color: colors.lightBlue,
    fontWeight: "700",
    fontSize: 10,
    textAlign: "center",
    textAlignVertical: "center",
  },
  categoryClickOnText: {
    color: colors.white,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: "white",
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover",
  },
  moveCategoryContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
});

export default HomePage;
