import React from "react";
import Toast from "react-native-toast-message";

export enum ToastType {
  Success = "success",
  Error = "error",
}

interface ToastProps {
  type: ToastType;
  message: string;
}

export const CustomToast = ({ type, message }: ToastProps) => {
  Toast.show({
    type,
    text1: "",
    text2: message,
  });
};
