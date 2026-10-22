import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, ScrollView, Text, View } from 'react-native';
import cores from '../cores';
import styles from './style';

export default function Home({ navigation }) {
  const nomeUsuario = 'aluno';

  return (
    <LinearGradient
      colors={[cores.azul, cores.azulClaro]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <LinearGradient
          colors={[cores.azulEscuro, cores.azulMedio]}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.welcome}
        >
          <Text style={styles.eyebrow}>BEM-VINDO(A)</Text>
          <Text style={styles.title}>Olá, {nomeUsuario}!</Text>
          <Text style={styles.description}>
            Que bom ter você por aqui. Pequenas escolhas ajudam a construir um
            futuro cheio de luz.
          </Text>
          <View style={styles.highlight}>
            <Text style={styles.subtitle}>Cultive um futuro mais brilhante</Text>
            <View style={styles.highlightLine} />
          </View>
        </LinearGradient>

        <View style={styles.actions}>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Sobre')}
            style={({ pressed }) => [styles.button, styles.aboutButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.aboutButtonText}>Sobre nós</Text>
          </Pressable>
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.navigate('Contato')}
            style={({ pressed }) => [styles.button, styles.contactButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.contactButtonText}>Entre em contato</Text>
          </Pressable>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}