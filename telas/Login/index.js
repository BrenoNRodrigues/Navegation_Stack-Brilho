import { LinearGradient } from 'expo-linear-gradient';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import cores from '../cores';
import styles from './styles';

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function validar() {
    if (!user) {
      Alert.alert("Informe o usuário.");
      return;
    }

    if (!pass) {
      Alert.alert("Informe a senha.");
      return;
    }

    if (user === "aluno" && pass === "123456") {
      navigation.replace("Home");
    } else {
      Alert.alert("Usuário ou senha inválidos");
    }
  }

  return (
    <LinearGradient
      colors={[cores.azul, cores.azulClaro]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.eyebrow}>BRILHANTE</Text>
        <Text style={styles.title}>Entre para começar</Text>
        <View style={styles.espacoInput}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            placeholderTextColor={cores.azulEscuro}
            autoComplete="username"
            autoCapitalize="none"
            value={user}
            onChangeText={setUser}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor={cores.azulEscuro}
            secureTextEntry
            value={pass}
            onChangeText={setPass}
            onSubmitEditing={validar}
          />
        </View>
        <Pressable
          accessibilityRole="button"
          onPress={validar}
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}
