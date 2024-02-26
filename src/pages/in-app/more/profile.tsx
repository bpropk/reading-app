import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Tittle from "@src/components/Content/tittle";
import CustomButton from "@src/components/button/button";
import Avatar from "@src/components/avatar/Avatar";
import Caption from "@src/components/Content/caption";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatePassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
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
  forgotPassword: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: 20,
  },
  register: {
    display: "flex",
    marginTop: 20,
    alignItems: "center",
  },
  label: {
    marginVertical: 10,
  },
  buttons: {
    marginTop: 30,
  },
});

export default ProfilePage;
