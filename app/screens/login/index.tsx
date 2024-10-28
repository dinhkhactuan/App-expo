import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Type_Screens } from "@/app/constants/type-screen";

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
    paddingTop: 20,
    paddingBottom: 20,
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
});

export const Login = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Text style={styles.title}>Explore now</Text>
        <Text style={styles.titleDes}>Join SO today.</Text>
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
          <Text style={{ fontSize: 20 }}>Sign up with Google</Text>
        </View>
        <View style={styles.btn}>
          <Image
            source={require("../../../assets/images/ios_icon.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={{ fontSize: 20 }}>Sign up with Apple</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#ccc",
          marginBottom: 40,
          marginTop: 40,
        }}
      />
      <TouchableOpacity
        style={styles.btnCreate}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Create account
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Already have an account?
        </Text>
      </View>

      <TouchableOpacity
        style={{
          ...styles.btnCreate,
          marginTop: 20,
          backgroundColor: "#FFF",
          borderColor: "#ddd",
          borderWidth: 1,
        }}
        onPress={() => {
          navigation.navigate("SignUp", { type: "SIGNIN" });
        }}
      >
        <Text
          style={{
            color: "#0098FF",
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Sign in
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
