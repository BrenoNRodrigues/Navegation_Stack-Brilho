import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, Text, View } from 'react-native';
import cores from '../cores';
import styles from './style';

export default function Sobre() {
  return (
    <LinearGradient
      colors={[cores.azul, cores.azulClaro]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.logo}>Brilhante</Text>
          <Text style={styles.subtitle}>Brilhante Sustentabilidade</Text>
          <Text style={styles.title}>Cultivando escolhas melhores</Text>
          <View style={styles.highlightLine} />
        </View>

        <View style={styles.card}>
          <Text style={styles.description}>
            A Brilhante Sustentabilidade é uma empresa fictícia dedicada a
            inspirar escolhas conscientes e iniciativas que cuidam do meio
            ambiente e das comunidades.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Nossa missão</Text>
          <Text style={styles.text}>
            Incentivar hábitos sustentáveis por meio de informação, colaboração
            e ações simples que fazem diferença no dia a dia.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Nossa visão</Text>
          <Text style={styles.text}>
            Contribuir para um futuro em que comunidades e meio ambiente
            prosperem juntos.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Nossos valores</Text>
          <Text style={styles.text}>
            Sustentabilidade, colaboração, respeito e responsabilidade.
          </Text>
        </View>

        <Text style={styles.versao}>Brilhante · Versão 1.0 · Projeto acadêmico</Text>
      </ScrollView>
    </LinearGradient>
  );
}