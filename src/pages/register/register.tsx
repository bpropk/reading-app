import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@src/components/button/button";

const RegistrationForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatePassword] = useState("");

  const handleRegistration = () => {
    // Xử lý đăng ký ở đây, có thể gửi dữ liệu đến server hoặc thực hiện các bước cần thiết.
    console.log(email, name, password, repeatPassword);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Register</Text>
      </View>
      <View>
        <Text style={styles.label}>Your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full name"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Your email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Create Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Repeat Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.buttons}>
          <CustomButton title="Register" onPress={handleRegistration} />
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

export default RegistrationForm;
