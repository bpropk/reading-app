import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@src/components/button/button";
import validate from "validate.js";
import { Input } from "@src/components/input/input";
import { ScrollView } from "react-native-gesture-handler";

type RegisterFormStateValues = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  username?: string;
  password?: string;
  repeatPassword?: string;
};

type RegisterFormStateErrors = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  address?: string;
  username?: string;
  password?: string;
  repeatPassword?: string;
};

type RegisterFromStateTouches = {
  name?: boolean;
  email?: boolean;
  phoneNumber?: boolean;
  address?: boolean;
  username?: boolean;
  password?: boolean;
  repeatPassword?: boolean;
  submit?: boolean;
};

type RegisterStateFormValue = {
  values: RegisterFormStateValues;
  errors: RegisterFormStateErrors;
  touched: RegisterFromStateTouches;
};

const RegistrationPage = () => {
  const [formState, setFormState] = useState<RegisterStateFormValue>({
    values: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      username: "",
      password: "",
      repeatPassword: "",
    },
    touched: {
      submit: false,
    },
    errors: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      username: "",
      password: "",
      repeatPassword: "",
    },
  });

  const schema = {
    name: {
      presence: { allowEmpty: false, message: "Name is required" },
    },
    email: {
      presence: { allowEmpty: false, message: "Email is required" },
    },
    phoneNumber: {
      presence: { allowEmpty: false, message: "Phone number is required" },
      format: {
        pattern: "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$",
        flags: "i",
        message: "Phone number is wrong format",
      },
    },
    address: {
      presence: { allowEmpty: false, message: "Address is required" },
    },
    username: {
      presence: { allowEmpty: false, message: "Username is required" },
    },
    password: {
      presence: { allowEmpty: false, message: "Password is required" },
    },
    repeatPassword: {
      presence: { allowEmpty: false, message: "Repeat password is required" },
      equality: {
        attribute: "password",
        message: "Confirm password is not equal to password",
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

  const handleRegistration = () => {
    const errors =
      validate(formState.values, schema, { fullMessages: false }) || null;
    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: errors,
    }));
    setTouched("submit");

    // Match API

    if (!errors) {
      // TO DO match API
      console.log("reset ");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.title}>Register</Text>
        </View>
        <Input
          label="Name"
          value={formState.values.name}
          onChangeText={(value) => handleChangeInput(value, "name")}
          onSubmitEditing={() => setTouched("name")}
          errText={
            formState.touched.name || formState.touched.submit
              ? formState?.errors?.name?.[0]
              : undefined
          }
        />
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
        <Input
          label="Username"
          value={formState.values.username}
          onChangeText={(value) => handleChangeInput(value, "username")}
          onSubmitEditing={() => setTouched("username")}
          errText={
            formState.touched.username || formState.touched.submit
              ? formState?.errors?.username?.[0]
              : undefined
          }
        />
        <Input
          label="Phone number"
          value={formState.values.phoneNumber}
          onChangeText={(value) => handleChangeInput(value, "phoneNumber")}
          onSubmitEditing={() => setTouched("phoneNumber")}
          errText={
            formState.touched.phoneNumber || formState.touched.submit
              ? formState?.errors?.phoneNumber?.[0]
              : undefined
          }
        />
        <Input
          label="Address"
          value={formState.values.address}
          onChangeText={(value) => handleChangeInput(value, "address")}
          onSubmitEditing={() => setTouched("address")}
          errText={
            formState.touched.address || formState.touched.submit
              ? formState?.errors?.address?.[0]
              : undefined
          }
        />

        <Input
          label="Password"
          value={formState.values.password}
          onChangeText={(value) => handleChangeInput(value, "password")}
          onSubmitEditing={() => setTouched("password")}
          secureTextEntry={true}
          errText={
            formState.touched.password || formState.touched.submit
              ? formState?.errors?.password?.[0]
              : undefined
          }
        />
        <Input
          label="Repeat Password"
          value={formState.values.repeatPassword}
          onChangeText={(value) => handleChangeInput(value, "repeatPassword")}
          onSubmitEditing={() => setTouched("repeatPassword")}
          secureTextEntry={true}
          errText={
            formState.touched.repeatPassword || formState.touched.submit
              ? formState?.errors?.repeatPassword?.[0]
              : undefined
          }
        />
        <View style={styles.buttons}>
          <CustomButton title="Register" onPress={handleRegistration} />
        </View>
      </ScrollView>
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

export default RegistrationPage;
