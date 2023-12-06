import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import CustomBottomTab from "@src/components/customNavTab/customBottomTab";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootParamsList, RootStackElements } from "@src/navigations/root-stack";

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<RootParamsList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        //label="Mật khẩu"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        secureTextEntry={true}
        //mode="outlined"
      />
      <Button title=" Đăng nhập " onPress={handleLogin} />
      <Button
        title=" Đăng ký "
        onPress={() => navigation.navigate(RootStackElements.REGISTER_PAGE)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});

export default LoginForm;
