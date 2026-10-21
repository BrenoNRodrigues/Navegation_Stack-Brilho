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
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  description: {
    width: '100%',
    maxWidth: 520,
    color: '#164B3C',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  card: {
    width: '100%',
    maxWidth: 560,
    alignItems: 'center',
    padding: 20,
    marginTop: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'rgba(20, 91, 73, 0.12)',
    shadowColor: cores.profundo,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 3,
  },
  label: {
    color: cores.aqua,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
  },
  valor: {
    color: cores.profundo,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    marginTop: 7,
  },
  hours: {
    alignItems: 'center',
    marginTop: 28,
  },
  hoursTitle: {
    color: cores.profundo,
    fontSize: 17,
    fontWeight: '700',
  },
  hoursText: {
    color: '#164B3C',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 6,
  },
});

export default styles;