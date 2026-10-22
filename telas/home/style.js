import { StyleSheet } from 'react-native';
import cores from '../cores';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    paddingVertical: 40,
  },
  welcome: {
    width: '100%',
    maxWidth: 560,
    alignItems: 'center',
    padding: 28,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(243, 248, 255, 0.18)',
    shadowColor: cores.azulEscuro,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  eyebrow: {
    color: cores.azulClaro,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
  },
  title: {
    color: cores.textoClaro,
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 12,
  },
  description: {
    color: '#E2F0FC',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 14,
  },
  highlight: {
    alignItems: 'center',
    marginTop: 26,
  },
  subtitle: {
    color: cores.textoClaro,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  highlightLine: {
    width: 96,
    height: 4,
    borderRadius: 2,
    backgroundColor: cores.azulBrilho,
    marginTop: 10,
    shadowColor: cores.azulBrilho,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 8,
  },
  actions: {
    width: '100%',
    maxWidth: 560,
    marginTop: 24,
    gap: 14,
  },
  button: {
    minHeight: 54,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  aboutButton: {
    backgroundColor: cores.azulClaro,
  },
  contactButton: {
    backgroundColor: cores.azulMedio,
    borderWidth: 1,
    borderColor: 'rgba(243, 248, 255, 0.45)',
  },
  aboutButtonText: {
    color: cores.azulEscuro,
    fontSize: 16,
    fontWeight: '700',
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
});

export default styles;