import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@src/components/button/button";
import {
  RootStackElements,
  RootStackParamList,
} from "@src/navigations/rootStack";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import validate from "validate.js";
import { Input } from "@src/components/input/input";
import { StoreToken } from "@src/utils/storage";
import { CustomToast, ToastType } from "@src/components/toast/toast";
import { VerifyForgotPasswordAPI } from "@src/api/authentication";

type ResetPasswordStateValues = {
  token?: string;
  newpwd?: string;
  repeatpwd?: string;
};

type ResetPasswordStateErrors = {
  token?: string;
  newpwd?: string;
  repeatpwd?: string;
};

type ResetPasswordStateTouches = {
  token?: boolean;
  newpwd?: boolean;
  repeatpwd?: boolean;
  submit?: boolean;
};

type ResetPasswordFormValue = {
  values: ResetPasswordStateValues;
  errors: ResetPasswordStateErrors;
  touched: ResetPasswordStateTouches;
};

const ResetPasswordPage = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route =
    useRoute<
      RouteProp<RootStackParamList, RootStackElements.RESET_PASSWORD_PAGE>
    >();

  const [formState, setFormState] = useState<ResetPasswordFormValue>({
    values: {
      token: "",
      newpwd: "",
      repeatpwd: "",
    },
    touched: {
      submit: false,
    },
    errors: {
      token: "",
      newpwd: "",
      repeatpwd: "",
    },
  });

  const schema = {
    token: {
      presence: { allowEmpty: false, message: "Token is required" },
    },
    newpwd: {
      presence: { allowEmpty: false, message: "New Password is required" },
    },
    repeatpwd: {
      presence: {
        allowEmpty: false,
        message: "Repeat new password is required",
      },
      equality: {
        attribute: "newpwd",
        message: "Repeat password is not equal to new password",
      },
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

  const handleResetPassword = async () => {
    const errors =
      validate(formState.values, schema, { fullMessages: false }) || null;
    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: errors,
    }));
    setTouched("submit");
    if (!errors) {
      await VerifyForgotPasswordAPI({
        otp: formState.values.token,
        newPassword: formState.values.newpwd,
        email: route.params.email,
      })
        .then((result) => {
          console.log(result);
          CustomToast({
            type: ToastType.Success,
            message: result.data.message,
          });
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 30 }}>
        <Text style={styles.title}>Reset Password</Text>
      </View>

      <Input
        label="Token"
        value={formState.values.token}
        onChangeText={(value) => handleChangeInput(value, "token")}
        onSubmitEditing={() => setTouched("token")}
        errText={
          formState.touched.token || formState.touched.submit
            ? formState?.errors?.token?.[0]
            : undefined
        }
      />
      <Input
        label="New password"
        value={formState.values.newpwd}
        onChangeText={(value) => handleChangeInput(value, "newpwd")}
        onSubmitEditing={() => setTouched("newpwd")}
        secureTextEntry={true}
        errText={
          formState.touched.newpwd || formState.touched.submit
            ? formState?.errors?.newpwd?.[0]
            : undefined
        }
      />
      <Input
        label="Repeat password"
        value={formState.values.repeatpwd}
        onChangeText={(value) => handleChangeInput(value, "repeatpwd")}
        onSubmitEditing={() => setTouched("repeatpwd")}
        secureTextEntry={true}
        errText={
          formState.touched.repeatpwd || formState.touched.submit
            ? formState?.errors?.repeatpwd?.[0]
            : undefined
        }
      />

      <View style={styles.buttons}>
        <CustomButton title="Reset Password" onPress={handleResetPassword} />
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
