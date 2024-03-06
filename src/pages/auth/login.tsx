import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  RootStackParamList,
  RootStackElements,
} from "@src/navigations/rootStack";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@src/components/button/button";

const LoginPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);

    if (email && password) {
      navigation.reset({
        index: 0,
        routes: [{ name: RootStackElements.IN_APP_STACK }],
      });
    }
  };

  const handleRegister = () => {
    navigation.navigate(RootStackElements.REGISTER_PAGE);
  };

  const handleForgotPassword = () => {
    navigation.navigate(RootStackElements.FORGOT_PASSWORD_PAGE);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Login</Text>
      </View>
      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={{ color: "blue" }}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttons}>
          <CustomButton title="Login" onPress={handleLogin} />
        </View>
        <View style={styles.register}>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={{ color: "blue" }}>Register</Text>
          </TouchableOpacity>
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
    marginTop: 20,
  },
});

export default LoginPage;
