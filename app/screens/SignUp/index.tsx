import { ACCOUNT } from "@/app/constants/account";
import { STORAGE_KEY } from "@/app/constants/StorageKey";
import { getData, setData } from "@/app/service/storeData";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
  },
  title: {
    fontSize: 48,
    fontWeight: "600",
  },
  titleDes: {
    fontSize: 30,
    fontWeight: "600",
  },
  btn: {
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: 130,
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  btnCreate: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 130,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 12,
  },
});

export const SignUp = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const TypeScreen = route?.params?.type;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    const user = await getData(STORAGE_KEY.USER);
    if (user.userName === userName && user.password === password) {
      navigation.navigate("Profile");
    }
  };

  const handleRegister = () => {
    if (userName !== "" && password !== "") {
      setData({ userName: userName, password: password });
      navigation.navigate("SignUp", { type: "SIGNIN" });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.titleDes}>Welcome</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <View style={styles.btn}>
          <Image
            source={require("../../../assets/images/google_icon.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Login with Google</Text>
        </View>

        <View style={styles.btn}>
          <Image
            source={require("../../../assets/images/ios_icon.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Login with Apple</Text>
        </View>
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#ccc",
          marginBottom: 20,
          marginTop: 30,
        }}
      />

      <View>
        <TextInput
          onChangeText={setUserName}
          value={userName}
          style={styles.input}
          placeholder="Enter a name or username"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter a password"
        />
        {TypeScreen !== "SIGNIN" && (
          <TextInput
            value={confirmPassword}
            style={styles.input}
            onChangeText={setConfirmPassword}
            placeholder="Confirm password"
          />
        )}
      </View>

      <TouchableOpacity
        style={{
          ...styles.btnCreate,
          marginTop: 20,
          backgroundColor: "#FFF",
          borderColor: "#ddd",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            color: "#0098FF",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
          onPress={() => {
            TypeScreen !== "SIGNIN" ? handleRegister() : handleLogin();
          }}
        >
          {TypeScreen !== "SIGNIN" ? "Register" : "Login"}
        </Text>
      </TouchableOpacity>

      <View style={{ margin: "auto" }}>
        <Text>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </Text>
      </View>
    </View>
  );
};
