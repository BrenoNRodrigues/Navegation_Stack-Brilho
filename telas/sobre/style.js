import { StyleSheet } from 'react-native';
import cores from '../cores';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 36,
  },
  title: {
    color: cores.profundo,
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 6,
  },
  description: {
    width: '100%',
    maxWidth: 560,
    color: cores.profundo,
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 12,
  },
  card: {
    width: '100%',
    maxWidth: 560,
    padding: 22,
    marginTop: 14,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderColor: 'rgba(243, 248, 232, 0.18)',
    shadowColor: cores.profundo,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 4,
  },
  subtitle: {
    color: cores.amarelo,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    color: cores.profundo,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    marginTop: 8,
  },
  versao: {
    fontSize: 12,
    color: '#164B3C',
    marginTop: 24,
  },
  cabecalho: {
    alignItems: 'center',
    marginBottom: 4,
  },
  highlightLine: {
    width: 72,
    height: 4,
    borderRadius: 2,
    backgroundColor: cores.azulBrilho,
    marginTop: 14,
    shadowColor: cores.azulBrilho,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 8,
  },
  logo: {
    color: cores.textoClaro,
    fontSize: 34,
    fontWeight: '800',
  },
});

export default styles;