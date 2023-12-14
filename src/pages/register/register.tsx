import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    // Xử lý đăng ký ở đây, có thể gửi dữ liệu đến server hoặc thực hiện các bước cần thiết.
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Đăng ký</Text>
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
        <View style={styles.group}>
          <TextInput
            placeholder="Confirm Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry={true}
            //mode="outlined"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Lưu mật khẩu</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#ffffff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    marginBottom: 50,
    padding: 15,
    borderColor: "gray",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
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
});

export default RegistrationForm;
