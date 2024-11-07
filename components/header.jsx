import { View, Text, StyleSheet } from 'react-native';

export function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blog App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',  
    height: 60,
    borderBottomWidth: 1,  
    borderBottomColor: 'rgba(209, 178, 255, 0.1)',  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,  
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#D1B2FF', 
    letterSpacing: 0.5,  
  },
});