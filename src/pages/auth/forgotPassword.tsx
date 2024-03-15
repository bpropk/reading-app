import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@src/components/button/button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import validate from "validate.js";
import { Input } from "@src/components/input/input";
import { forgotPassword } from "@src/api/authentication";
import { CustomToast, ToastType } from "@src/components/toast/toast";

type ForgotPasswordStateValues = {
  email?: string;
};

type ForgotPasswordStateErrors = {
  email?: string;
};

type ForgotPasswordStateTouches = {
  email?: boolean;
  submit?: boolean;
};

type ForgotPasswordFormValue = {
  values: ForgotPasswordStateValues;
  errors: ForgotPasswordStateErrors;
  touched: ForgotPasswordStateTouches;
};

const ForgotPasswordPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [formState, setFormState] = useState<ForgotPasswordFormValue>({
    values: {
      email: "",
    },
    touched: {
      submit: false,
    },
    errors: {
      email: "",
    },
  });

  const schema = {
    email: {
      presence: { allowEmpty: false, message: "Email is required" },
    },
  };

  useEffect(() => {
    const errors =
      validate(formState.values, schema, { fullMessages: false }) || null;

    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: errors,
    }));
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

  const handleForgotPassword = () => {
    // Xử lý đăng ký ở đây, có thể gửi dữ liệu đến server hoặc thực hiện các bước cần thiết.
    const errors =
      validate(formState.values, schema, { fullMessages: false }) || null;
    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: errors,
    }));
    setTouched("submit");
    if (!errors) {
      forgotPassword(formState.values)
        .then((result) => {
          CustomToast({
            type: ToastType.Success,
            message: result.data.message,
          });
          navigation.navigate(RootStackElements.RESET_PASSWORD_PAGE, {
            email: formState.values.email,
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Reset your password</Text>
      </View>
      <View>
        <Input
          label="Email"
          value={formState.values.email}
          onChangeText={(value) => handleChangeInput(value, "email")}
          onSubmitEditing={() => setTouched("email")}
          errText={
            formState.touched.email || formState.touched.submit
              ? formState?.errors?.email?.[0]
              : undefined
          }
        />
        <View style={styles.buttons}>
          <CustomButton
            title="Forgot Password"
            onPress={handleForgotPassword}
          />
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

export default ForgotPasswordPage;
