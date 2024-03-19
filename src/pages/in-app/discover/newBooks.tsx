import {
  NavigationProp,
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  AddLibraryAPI,
  AllReviewAPI,
  BookDetailAPI,
  LikeReviewAPI,
} from "@src/api/book";
import { Icons, colors } from "@src/common/theme";
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
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState<any>();
  const [reviews, setReviews] = useState<any>();
  const isFocused = useIsFocused();

  const route =
    useRoute<
      RouteProp<RootStackParamList, RootStackElements.DISCOVER_NEW_PAGE>
    >();

  const getBookInfo = async (bookId?: string) => {
    await BookDetailAPI(bookId)
      .then((result) => {
        setData(result.data.book);
      })
      .catch((err) => {
        console.log("BookDetailAPI", err);
      });
  };

  const getBookReview = async (bookId?: string) => {
    await AllReviewAPI(bookId)
      .then((result) => {
        setReviews(result.data.reviews);
      })
      .catch((err) => {
        console.log("AllReviewAPI", err);
      });
  };

  const handleLibrary = async (bookId: string) => {
    await AddLibraryAPI({
      id: bookId,
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

  const handleLike = async (reviewId: string) => {
    await LikeReviewAPI({
      reviewId: reviewId,
    })
      .then(async (result) => {
        await CustomToast({
          type: ToastType.Success,
          message: result.data.message,
        });
        await getBookReview(route?.params?._id);
      })
      .catch((err) => {
        CustomToast({
          type: ToastType.Error,
          message: err.response.data.message,
        });
      });
  };

  const handleNavigationReview = () => {
    navigation.navigate(RootStackElements.DISCOVER_REVIEW_PAGE, {
      bookId: route?.params?._id,
    });
  };

  useEffect(() => {
    if (isFocused) {
      // Perform actions you want when the screen is focused.
      // This could be fetching data, re-rendering components, or any other refresh logic.
      getBookInfo(route?.params?._id);
      getBookReview(route?.params?._id);
    }
  }, [isFocused]);

  const renderInfo = useMemo(() => {
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
                  <Text style={{ paddingRight: 5 }}>{data.numOfStar | 0}</Text>
                  <Star numberOfStar={data.numOfStar} />
                  <Text style={{ paddingLeft: 5 }}>{data.numOfReview | 0}</Text>
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

  const renderReviews = useMemo(() => {
    return (
      reviews &&
      reviews.map((item: any, index: number) => (
        <View key={index}>
          <Text style={styles.commentName}>{item.user}</Text>
          <Star numberOfStar={item.star} />
          <Text style={styles.commentDetail}>{item.review}</Text>
          <Text
            style={styles.commentLike}
          >{`${item.like} people found this helpful`}</Text>
          <View style={{ paddingBottom: 20 }}>
            {item.isAlreadyLike ? (
              <View style={styles.feedbackContainer}>
                <Icons.CircleCheck style={styles.icon} fill={colors.green} />
                <Text style={styles.commentFeedback}>
                  Thank you for your feedback.
                </Text>
              </View>
            ) : (
              <CustomButton
                title="HELPFUL"
                onPress={() => handleLike(item._id)}
                style={{
                  backgroundColor: colors.grey,
                  width: 120,
                }}
              />
            )}
          </View>
        </View>
      ))
    );
  }, [reviews]);

  return (
    <ScrollView style={styles.root}>
      {/* Book Information */}
      {data && renderInfo}
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.bookOverview}>CUSTOMER REVIEW</Text>
      </View>

      {/* Comment & Reviews */}
      {reviews && renderReviews}
      <CustomButton
        title="WRITE A REVIEW"
        onPress={handleNavigationReview}
        style={{
          backgroundColor: colors.grey,
          marginBottom: 50,
        }}
      />
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
    flexDirection: "row",
    alignItems: "center",
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
  commentName: {
    ...Typography.h3,
    fontWeight: "normal",
  },
  commentTitle: {
    paddingTop: 5,
    ...Typography.h4,
  },
  commentDetail: {
    ...Typography.h4,
    fontWeight: "normal",
    lineHeight: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  commentLike: {
    ...Typography.h5,
    paddingBottom: 5,
    color: colors.darkgrey,
  },
  feedbackContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentFeedback: {
    ...Typography.h5,
    color: colors.green,
    paddingLeft: 5,
  },
  icon: {
    height: 20,
    width: 20,
  },
});

export default NewBookPage;
