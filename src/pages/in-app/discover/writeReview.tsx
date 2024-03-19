import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Icons, colors } from "@src/common/theme";
import CustomButton from "@src/components/button/button";
import { RootStackParamList } from "@src/navigations/rootStack";
import React, { useState } from "react";
import { memo } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const WriteReviewPage: React.FC = memo(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");

  const handleChangeComment = (comment: string) => {
    setComment(comment);
  };

  const addReview = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.startContainer}>
        <Pressable
          onPress={() => {
            setStar(1);
          }}
        >
          <Icons.Star
            fill={star > 0 ? colors.vividYellow : colors.grey}
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setStar(2);
          }}
        >
          <Icons.Star
            fill={star > 1 ? colors.vividYellow : colors.grey}
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setStar(3);
          }}
        >
          <Icons.Star
            fill={star > 2 ? colors.vividYellow : colors.grey}
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setStar(4);
          }}
        >
          <Icons.Star
            fill={star > 3 ? colors.vividYellow : colors.grey}
            style={styles.icon}
          />
        </Pressable>
        <Pressable
          onPress={() => {
            setStar(5);
          }}
        >
          <Icons.Star
            fill={star > 4 ? colors.vividYellow : colors.grey}
            style={styles.icon}
          />
        </Pressable>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          multiline={true}
          numberOfLines={10}
          onChangeText={(text) => handleChangeComment(text)}
          value={comment}
          style={styles.textInputStyle}
        />
      </View>
      <CustomButton
        style={{ marginTop: 20 }}
        onPress={addReview}
        title="Add Review"
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
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  startContainer: {
    paddingTop: 10,
    flexDirection: "row",
  },
  inputContainer: {
    paddingTop: 10,
  },
  textInputStyle: {
    height: 200,
    backgroundColor: colors.white,
  },
});

export default WriteReviewPage;
