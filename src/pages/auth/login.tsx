import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  RootStackParamList,
  RootStackElements,
} from "@src/navigations/rootStack";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@src/components/button/button";
import { login } from "@src/api/authentication";
import { CustomToast, ToastType } from "@src/components/toast/toast";
import { StoreToken } from "@src/utils/storage";
import validate from "validate.js";
import { Input } from "@src/components/input/input";

type LoginFormStateValues = {
  username?: string;
  password?: string;
};

type LoginFormStateErrors = {
  username?: string;
  password?: string;
};

type LoginFromStateTouches = {
  username?: boolean;
  password?: boolean;
  submit?: boolean;
};

type LoginStateFormValue = {
  values: LoginFormStateValues;
  errors: LoginFormStateErrors;
  touched: LoginFromStateTouches;
};

const LoginPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [formState, setFormState] = useState<LoginStateFormValue>({
    values: {
      username: "",
      password: "",
    },
    touched: {
      submit: false,
    },
    errors: {
      username: "",
      password: "",
    },
  });

  const schema = {
    username: {
      presence: { allowEmpty: false, message: "Username is required" },
    },
    password: {
      presence: { allowEmpty: false, message: "Password is required" },
    },
  };

  useEffect(() => {
    const errors =
      validate(formState.values, schema, { fullMessages: false }) || null;

    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: errors,
    }));

    console.log(errors);
    console.log("--------------");
    console.log(formState.touched.submit ? formState.errors.username?.[0] : "");
  }, [formState.values]);

  const handleChangeInput = (value: any, name: string) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      values: {
        ...formState.values,
        [name]: value,
      },
    }));
  };

  const setTouched = (name: string) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      touched: {
        ...formState.touched,
        [name]: true,
      },
    }));
  };

  const handleLogin = async () => {
    const errors =
      validate(formState.values, schema, { fullMessages: false }) || null;
    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: errors,
    }));
    setTouched("submit");

    if (!errors) {
      await login(formState.values)
        .then((result) => {
          StoreToken(result.data.accessToken);
          navigation.reset({
            index: 0,
            routes: [{ name: RootStackElements.IN_APP_STACK }],
          });
        })
        .catch((err) => {
          CustomToast({
            type: ToastType.Error,
            message: err.response.data.message,
          });
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
        <Text style={styles.label}>Username</Text>
        {/* First character always Uppercase character (Need fix) */}
        <Input
          value={formState.values.username}
          onChangeText={(value) => handleChangeInput(value, "username")}
          onSubmitEditing={() => setTouched("username")}
          secureTextEntry={false}
          errText={
            formState.touched.username || formState.touched.submit
              ? formState?.errors?.username?.[0]
              : undefined
          }
        />
        <Text style={styles.label}>Password</Text>
        <Input
          value={formState.values.password}
          onChangeText={(value: any) => handleChangeInput(value, "password")}
          onSubmitEditing={() => setTouched("password")}
          secureTextEntry={true}
          errText={
            formState.touched.password || formState.touched.submit
              ? formState?.errors?.password?.[0]
              : undefined
          }
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
