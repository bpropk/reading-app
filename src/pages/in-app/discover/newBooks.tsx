import { RouteProp, useRoute } from "@react-navigation/native";
import { AddLibraryAPI, BookDetailAPI } from "@src/api/book";
import { colors } from "@src/common/theme";
import Typography from "@src/common/typography";
import CustomButton from "@src/components/button/button";
import Star from "@src/components/star/star";
import { CustomToast, ToastType } from "@src/components/toast/toast";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import React, { useEffect, useMemo, useState } from "react";
import { memo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const NewBookPage: React.FC = memo(() => {
  const [data, setData] = useState<any>();

  const route =
    useRoute<
      RouteProp<RootStackParamList, RootStackElements.DISCOVER_NEW_PAGE>
    >();

  const getBookInfo = async (id?: string) => {
    await BookDetailAPI(id)
      .then((result) => {
        setData(result.data.book);
      })
      .catch((err) => {});
  };

  const handleLibrary = async (id: string) => {
    await AddLibraryAPI({
      id,
    })
      .then((result) => {
        CustomToast({
          type: ToastType.Success,
          message: result.data.message,
        });
      })
      .catch((err) => {
        CustomToast({
          type: ToastType.Error,
          message: err.response.data.message,
        });
      });
  };

  useEffect(() => {
    getBookInfo(route?.params?._id);
  }, []);

  const Info = useMemo(() => {
    return (
      <View>
        {data && (
          <>
            <View style={styles.bookingInfoContainer}>
              <View style={{ paddingLeft: 15, flexShrink: 0 }}>
                <Image
                  style={styles.bookingImage}
                  source={{
                    uri: data.illustration,
                  }}
                />
              </View>

              <View style={styles.bookingContent}>
                <Text style={styles.bookingTitle}>{data.title}</Text>
                <Text style={styles.bookingAuthor}>{data.author}</Text>
                <View style={styles.bookingRate}>
                  <Star numberOfStar={data.star} />
                </View>
                <Text style={styles.bookingPrice}>{`$ ${data.price}`}</Text>
              </View>
            </View>
            <View style={{ paddingVertical: 15 }}>
              <CustomButton title={"BUY"} onPress={() => {}} />
            </View>
            <View style={{ paddingBottom: 15 }}>
              <CustomButton
                title={"ADD TO LIBRARY"}
                onPress={() => {
                  handleLibrary(data._id);
                }}
              />
            </View>
            <View style={{ paddingTop: 5 }}>
              <Text style={styles.bookOverview}>BOOK OVERVIEW</Text>
              <Text style={styles.bookDescription}>{data.description}</Text>
            </View>
          </>
        )}
      </View>
    );
  }, [data]);

  return (
    <ScrollView style={styles.root}>
      {/* Book Information */}
      {data && Info}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  bookingInfoContainer: {
    flex: 1,
    paddingTop: 20,
    flexDirection: "row",
  },
  bookingImage: {
    width: 130,
    height: 170,
  },
  bookingContent: {
    paddingHorizontal: 15,
    flexDirection: "column",
    flexShrink: 1,
  },
  bookingTitle: {
    ...Typography.h2,
    fontWeight: "600",
  },
  bookingAuthor: {
    paddingTop: 10,
    ...Typography.h4,
    color: colors.navyBlue,
  },
  bookingRate: {
    paddingTop: 5,
    ...Typography.h4,
  },
  bookingPrice: {
    paddingTop: 10,
    ...Typography.h4,
    fontWeight: "600",
    color: colors.black,
  },
  bookOverview: {
    ...Typography.h2,
    fontWeight: "700",
  },
  bookDescription: {
    ...Typography.h4,
    paddingTop: 5,
    fontWeight: "normal",
    lineHeight: 20,
  },
});

export default NewBookPage;
