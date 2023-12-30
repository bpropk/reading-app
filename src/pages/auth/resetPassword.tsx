import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@src/components/button/button";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const ResetPasswordPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatePassword] = useState("");

  const handleResetPassword = () => {
    // Xử lý đăng ký ở đây, có thể gửi dữ liệu đến server hoặc thực hiện các bước cần thiết.
    if (token && password && repeatPassword) {
      navigation.reset({
        index: 0,
        routes: [{ name: RootStackElements.IN_APP_STACK }],
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Reset Password</Text>
      </View>
      <View>
        <Text style={styles.label}>Token</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={token}
          onChangeText={setToken}
          secureTextEntry={true}
        />
        <Text style={styles.label}>New password</Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Repeat new password</Text>
        <TextInput
          style={styles.input}
          placeholder="Repeat new password"
          value={repeatPassword}
          onChangeText={setRepeatePassword}
          secureTextEntry={true}
        />
        <View style={styles.buttons}>
          <CustomButton title="Reset Password" onPress={handleResetPassword} />
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

export default ResetPasswordPage;
