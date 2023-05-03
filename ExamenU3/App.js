import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

import Communications from "react-native-communications";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [Info, setInfo] = useState("");

  const obtenernumero = async () => {
    const a = Info;
    console.log(a);
    
    Communications.text(Info,"Hola");
  };
  
  const obtenercorreo = async () => {
    console.log(Info);
    const a = Info;
    Communications.email(
      [Info],
      null,
      null,
      "No reprobar el semestre.",
      "Abra kadabra"
    )
  };
  
  return (
    <View style={styles.container}>
      <Text>APP Mensajes</Text>

      <TextInput
        style={styles.input}
        placeholder="Ingresa un Numero de telefono o un correo"
        onChangeText={setInfo}
        value={Info}
      />

<TouchableOpacity onPress={() => obtenernumero()}>
        <Ionicons name="mail" size={30} color="green" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => obtenercorreo()}>
        <Ionicons name="logo-google" size={30} color="blue" />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imput: {
    padding: 100,
  },
});
