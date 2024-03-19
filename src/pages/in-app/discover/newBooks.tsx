import {
  NavigationProp,
  RouteProp,
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

const fakeData = [
  {
    name: "Teisha",
    title: "Not a perfect book, but at good 1",
    comment:
      "All together they were the best books I've read in a while. Separately, they were not perfect but I'm okay with that. I read alot and tend to dislike books that show no character growth",
    numberOfStart: 4,
    numberOfLike: 2,
  },
  {
    name: "Teisha",
    title: "Not a perfect book, but at good 1",
    comment:
      "All together they were the best books I've read in a while. Separately, they were not perfect but I'm okay with that. I read alot and tend to dislike books that show no character growth",
    numberOfStart: 4,
    numberOfLike: 2,
  },
  {
    name: "Teisha",
    title: "Not a perfect book, but at good 1",
    comment:
      "All together they were the best books I've read in a while. Separately, they were not perfect but I'm okay with that. I read alot and tend to dislike books that show no character growth",
    numberOfStart: 4,
    numberOfLike: 2,
  },
];

const NewBookPage: React.FC = memo(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = useState<any>();
  const [reviews, setReviews] = useState<any>();

  const route =
    useRoute<
      RouteProp<RootStackParamList, RootStackElements.DISCOVER_NEW_PAGE>
    >();

  const getBookInfo = async (id?: string) => {
    await BookDetailAPI(id)
      .then((result) => {
        setData(result.data.book);
      })
      .catch((err) => {
        console.log("BookDetailAPI", err);
      });
  };

  const getBookReview = async (id?: string) => {
    await AllReviewAPI(id)
      .then((result) => {
        setReviews(result.data.reviews);
      })
      .catch((err) => {
        console.log("AllReviewAPI", err);
      });
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

  const handleLike = async (id: string) => {
    await LikeReviewAPI({
      reviewId: id,
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
    navigation.navigate(RootStackElements.DISCOVER_REVIEW_PAGE);
  };

  useEffect(() => {
    getBookInfo(route?.params?._id);
    getBookReview(route?.params?._id);
  }, []);

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
