import React, { memo, useState } from "react";
import { Text, View, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { colors, Icons } from "@src/common/theme";
import { tabItemsStyles } from "@src/common/styles";
import { ScrollView } from "react-native-gesture-handler";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const MorePage: React.FC = memo(() => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleProfile = () => {
    navigation.navigate(RootStackElements.PROFILE_PAGE);
  };

  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: RootStackElements.AUTHENTICATION_STACK }],
    });
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.common}>
          <Text style={styles.commontext}> Common </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <Icons.Globe fill={colors.black} style={styles.icon} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingStart: 10,
            }}
          >
            Language
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingEnd: 10,
            }}
          >
            English
          </Text>
          <Icons.ChevronRight fill={colors.black} style={styles.icon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <Icons.Cloud fill={colors.black} style={styles.icon} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingStart: 10,
            }}
          >
            Enviroment
          </Text>
          <View style={{ flex: 1 }} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingEnd: 10,
            }}
          >
            Production
          </Text>
          <Icons.ChevronRight fill={colors.black} style={styles.icon} />
        </View>
        <View style={styles.common}>
          <TouchableOpacity onPress={handleProfile}>
            <Text style={styles.commontext}> Account </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <Icons.Phone fill={colors.black} style={styles.icon} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingStart: 10,
            }}
          >
            Phone Number
          </Text>
          <View style={{ flex: 1 }} />
          <Icons.ChevronRight fill={colors.black} style={styles.icon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <Icons.Email fill={colors.black} style={styles.icon} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingStart: 10,
            }}
          >
            Email
          </Text>
          <View style={{ flex: 1 }} />
          <Icons.ChevronRight fill={colors.black} style={styles.icon} />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
          }}
        >
          <Icons.Logout fill={colors.black} style={styles.icon} />
          <TouchableOpacity onPress={handleLogout}>
            <Text
              style={{
                color: "black",
                fontSize: 14,
                paddingStart: 10,
              }}
            >
              Sign out
            </Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <Icons.ChevronRight fill={colors.black} style={styles.icon} />
        </View>
        <View style={styles.common}>
          <Text style={styles.commontext}> Security </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 10,
            alignItems: "center",
          }}
        >
          <Icons.Lock fill={colors.black} style={styles.icon} />
          <Text
            style={{
              color: "black",
              fontSize: 14,
              paddingStart: 10,
            }}
          >
            Lock app in background{" "}
          </Text>
          <View style={{ flex: 1 }} />
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginEnd: 10, paddingEnd: 5 }}
          />
        </View>
      </View>
    </ScrollView>
  );
});
const styles = StyleSheet.create({
  common: {
    height: 45,
    backgroundColor: "rgba(0,0,0,0.2)",
    justifyContent: "center",
  },
  commontext: {
    color: "red",
    fontSize: 14,
    paddingStart: 8,
  },
  icon: {
    paddingStart: 10,
    height: 20,
    width: 20,
  },
});
export default MorePage;
