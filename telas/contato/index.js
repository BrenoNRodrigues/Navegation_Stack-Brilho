import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, View } from 'react-native';
import cores from '../cores';
import styles from './style';

export default function Contato() {
  return (
    <LinearGradient
      colors={[cores.verde, cores.amarelo]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Fale conosco</Text>
        <Text style={styles.description}>
          Estamos à disposição para conversar.
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>TELEFONE</Text>
          <Text style={styles.valor}>(11) 4000-1234</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>E-MAIL</Text>
          <Text style={styles.valor}>contato@brilhante.example</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>ENDEREÇO</Text>
          <Text style={styles.valor}>Rua das Luzes, 120 — São Paulo/SP</Text>
        </View>

        <View style={styles.hours}>
          <Text style={styles.hoursTitle}>Atendimento</Text>
          <Text style={styles.hoursText}>Segunda a sexta, das 9h às 17h.</Text>
        </View>
        
      </ScrollView>
    </LinearGradient>
  );
}