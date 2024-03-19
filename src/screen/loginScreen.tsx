import React from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ButtonCustom from "../component/buttonComponent";
const styles = StyleSheet.create({
  container: {
    flex: 1, // Sử dụng flex để fill full màn hình
    backgroundColor: "#013088",
    width: "100%",
  },
  formLogin: {
    backgroundColor: "#fff",
    width: "100%",
    // height: "100%",
    borderTopLeftRadius: 50,
    alignItems: "center",
  },
  formLoginContainer:{
    width: "100%",
    paddingHorizontal:26,
    alignItems: "center",
  },
  formInputContainer: {
    width: "100%",
    marginBottom: 20,
    padding: 0,
  },
  formInputDesign: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(1, 48, 136, 0.40)",
    borderStyle: "solid",
    height: 50,
    paddingLeft: 20,
    marginTop: 5,
  },
  circle: {
    width: 64, // Chiều rộng của hình tròn
    height: 64, // Chiều cao của hình tròn
    borderRadius: 50, // Đặt giá trị của borderRadius là một nửa của chiều cao để tạo thành hình dạng là hình tròn
    backgroundColor: "#FFFFFF", // Màu nền của hình tròn
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 45,
    elevation: 5, // Đối với Android, thêm thuộc tính elevation để hiển thị bóng đổ
  },
  layoutFotter: {
    marginTop:26,
    width: "100%",
    backgroundColor: "#013088",
    borderTopRightRadius: 50,
    justifyContent: "center", // Căn giữa theo chiều dọc
    alignItems: "center", // Căn giữa theo chiều ngang
    
  },
});
const onPress = () => {};
function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={{ height: 44 }}>
        <StatusBar backgroundColor="#4718AD" />
      </View>
      <SafeAreaView>
        <View>
          <Image
            style={{ alignSelf: "center", marginBottom: 49, marginTop: 24 }}
            source={require("../../assets/login/Logo.png")}
          ></Image>
        </View>
        <View style={styles.formLogin}>
          <View style={styles.formLoginContainer}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                paddingTop: 46,
                paddingBottom: 46,
                textAlign:"center"
              }}
            >
              Log In to your Account.
            </Text>
            <View style={styles.formInputContainer}>
              <Text>Email</Text>
              <TextInput
                style={styles.formInputDesign}
                placeholder="Enter your email"
              />
            </View>
            <View style={styles.formInputContainer}>
              <Text>Password</Text>
              <TextInput
                style={styles.formInputDesign}
                placeholder="Enter your password"
              />
            </View>

            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                width: "100%",
                textAlign: "right",
                marginBottom: 16,
              }}
            >
              Forgot Password?
            </Text>
            <ButtonCustom onPress={onPress} title="Login" />
            <View style={{ flexDirection: "row", gap: 24, marginTop: 30 }}>
              <View style={[styles.circle, styles.shadow]}>
                <Image
                  source={require("../../assets/login/icon_gogle.png")}
                ></Image>
              </View>
              <View style={[styles.circle, styles.shadow]}>
                <Image
                  source={require("../../assets/login/icon_gogle.png")}
                ></Image>
              </View>
              <View style={[styles.circle, styles.shadow]}>
                <Image
                  source={require("../../assets/login/icon_gogle.png")}
                ></Image>
              </View>
            </View>
          </View>

          <View style={styles.layoutFotter}>
            <Text style={{justifyContent:"center",alignContent:"center", height:"100%", marginTop:50, color:"#fff"}}>Newbie? Create Account</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default LoginScreen;
