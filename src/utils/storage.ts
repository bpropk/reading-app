import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async (token: string) => {
  AsyncStorage.setItem("userData", token);
};

export const getToken = async (key: string) => {
  return await AsyncStorage.getItem("userData");
};
