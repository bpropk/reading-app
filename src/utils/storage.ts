import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreToken = async (token: string) => {
  AsyncStorage.setItem("userData", token);
};

export const GetToken = async (key: string) => {
  return await AsyncStorage.getItem("userData");
};

export const RemoveAllStorage = () => {
  AsyncStorage.clear();
};
