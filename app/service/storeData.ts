import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../constants/StorageKey";

export const setData = async (value: any) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY.USER, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) return JSON.parse(value);
  } catch (error) {
    console.log(error);
  }
};
