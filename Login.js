import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [oneTimePassword, setOneTimePassword] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="801-555-1212"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  margin:{
    marginTop:100
  }
});

export default UselessTextInput;