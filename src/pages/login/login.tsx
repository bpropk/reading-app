import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import CustomBottomTab from "@src/components/customNavTab/customBottomTab";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootParamsList, RootStackElements } from "@src/navigations/root-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<RootParamsList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Đăng Nhập</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.group}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
            //mode="outlined"
          />
        </View>
        <View style={styles.group}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry={true}
            //mode="outlined"
          />
        </View>
        <View style={styles.group1}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Lưu mật khẩu</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert("sau này làm")}
            >
              <Text style={{ color: "blue" }}>Quên mật khẩu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Button title=" Đăng nhập " onPress={handleLogin} />
        <Button
          title=" Đăng ký "
          onPress={() => navigation.navigate(RootStackElements.REGISTER_PAGE)}
        />
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
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    marginBottom: 50,
    padding: 15,
    borderColor: "gray",
  },
  button: {},
  form: {
    margin: 20,
  },
  group: {},
  checkboxContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  group1: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default LoginForm;
