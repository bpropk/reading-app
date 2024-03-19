import React, { useState, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tittle from "@src/components/Content/tittle";
import CustomButton from "@src/components/button/button";
import Avatar from "@src/components/avatar/Avatar";
import Caption from "@src/components/Content/caption";
import { colors, Icons } from "@src/common/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";

const ProfilePage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const EditProfile = () => {
    navigation.navigate(RootStackElements.EDIT_PROFILE_PAGE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar
            source={{
              uri: "/Users/dangpham/Desktop/APP/reading-app/assets/images/alient.avif",
            }}
            size={100}
          />
          <View style={{ marginLeft: 20 }}>
            <Tittle style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              Pham Minh Dang
            </Tittle>
            <Caption>@pmdang2699</Caption>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.userInFoContainer}>
            <Icons.MapLocation fill={colors.black} style={styles.icon} />
            <Text style={{ marginLeft: 20 }}>Dong Nai, Viet Nam</Text>
          </View>
          <View style={styles.userInFoContainer}>
            <Icons.Phone fill={colors.black} style={styles.icon} />
            <Text style={{ marginLeft: 20 }}>0971066236</Text>
          </View>
          <View style={styles.userInFoContainer}>
            <Icons.Email fill={colors.black} style={styles.icon} />
            <Text style={{ marginLeft: 20 }}>pmdang2699@gmail.com</Text>
          </View>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: "#dddddd",
                borderRightWidth: 1,
              },
            ]}
          >
            <Tittle>$140</Tittle>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Tittle>12</Tittle>
            <Caption>Orders</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icons.Heart fill={colors.red} style={styles.icon} />
              <Text style={styles.menuItemText}>My List</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icons.CreditCard fill={colors.red} style={styles.icon} />
              <Text style={styles.menuItemText}>Payment</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <CustomButton title="Edit Profile" onPress={EditProfile} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  userInfoSection: {},
  label: {
    marginVertical: 10,
  },
  buttons: {
    marginTop: 30,
  },
  icon: {
    paddingStart: 10,
    height: 20,
    width: 20,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
  userInFoContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});

export default ProfilePage;
