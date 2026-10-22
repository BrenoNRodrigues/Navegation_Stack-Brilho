import { StyleSheet } from 'react-native';
import cores from '../cores';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 420,
    padding: 28,
    borderRadius: 24,
    backgroundColor: cores.azulEscuro,
    shadowColor: cores.azulEscuro,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.22,
    shadowRadius: 20,
    elevation: 8,
  },
  eyebrow: {
    color: cores.azulClaro,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    textAlign: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 26,
  },
  input: {
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: cores.azulEscuro,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  espacoInput: {
    marginBottom: 8,
  },
  button: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cores.azulClaro,
    borderRadius: 14,
  },
  buttonText: {
    color: cores.azulEscuro,
    fontSize: 16,
    fontWeight: '700',
  },
  buttonPressed: {
    opacity: 0.82,
  },
});

export default styles;