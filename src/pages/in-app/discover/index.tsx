import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ListBooksAPI } from "@src/api/book";
import { Icons, colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import LineBreak from "@src/components/lineBreak/lineBreak";
import SearchBar from "@src/components/searchBar/searchBar";
import Star from "@src/components/star/star";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import React, { memo, useEffect, useMemo, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DiscoverPage: React.FC = memo(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const route =
    useRoute<RouteProp<RootStackParamList, RootStackElements.DISCOVER_PAGE>>();

  const [searchValue, setSearchValue] = useState("");
  const [discoverBook, setDiscoverBook] = useState<any>();

  const handleNavigateNewBook = (id: string) => {
    navigation.navigate(RootStackElements.DISCOVER_NEW_PAGE, {
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

  const handleBack = () => {
    navigation.goBack();
  };

  const renderDiscover = useMemo(() => {
    {
      return (
        <>
          {discoverBook &&
            discoverBook.map((item: any, index: number) => (
              <Pressable
                style={styles.bookContainer}
                key={index}
                onPress={() => handleNavigateNewBook(item._id)}
              >
                <View style={styles.bookDisplay}>
                  <Image
                    style={{ width: 100, height: 120 }}
                    source={{
                      uri: item.illustration,
                    }}
                  />
                </View>
                <View style={styles.bookDetail}>
                  <Text ellipsizeMode="clip" style={styles.bookTitle}>
                    {item.title}
                  </Text>
                  <Text ellipsizeMode="clip" style={styles.bookAuthor}>
                    {item.author}
                  </Text>
                  <View style={styles.bookReview}>
                    <Star numberOfStar={item.numOfStar} />
                    <Text style={styles.numberReview}>
                      &#40;{item.numOfReview}&#41;
                    </Text>
                  </View>
                  <Text style={styles.bookPrice}>&#36;{item.price}</Text>
                </View>
              </Pressable>
            ))}
        </>
      );
    }
  }, [discoverBook]);

  useEffect(() => {
    getBooksInfo(route?.params?.discover);
    navigation.setOptions({
      title: route?.params?.discover
        ? route?.params?.discover
        : "DISCOVER NEW BOOK",
      headerBackTitle: "Back",
    });
  }, []);

  return (
    <View style={styles.root}>
      <LineBreak customStyle={{ marginHorizontal: -10 }} />
      <SearchBar getSearchValue={(value) => setSearchValue(value)} />
      <ScrollView>{discoverBook && renderDiscover}</ScrollView>
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
  bookDetail: {
    width: 250,
    height: 120,
    backgroundColor: colors.white,
    marginVertical: 12,
    paddingVertical: 5,
  },
  bookTitle: {
    ...Typography.h4,
    lineHeight: 20,
  },
  bookPrice: {
    ...Typography.h4,
    lineHeight: 20,
  },
  bookAuthor: {
    ...Typography.h4,
    lineHeight: 20,
    color: colors.darkGrey,
  },
  bookReview: {
    flexDirection: "row",
    alignItems: "center",
  },
  numberReview: {
    color: colors.grey,
    ...Typography.h4,
  },
  routeParamContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  wrapperIcon: {
    left: 10,
    paddingRight: 15,
  },
});

export default DiscoverPage;
