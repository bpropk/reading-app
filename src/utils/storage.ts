import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("userData", token);
  } catch (err) {
    console.log("storage error", err);
  }
};

export const GetToken = async () => {
  try {
    const token = await AsyncStorage.getItem("userData");
    return token;
  } catch (err) {
    console.log("token error", err);
  }
};

export const RemoveAllStorage = () => {
  AsyncStorage.clear();
};
