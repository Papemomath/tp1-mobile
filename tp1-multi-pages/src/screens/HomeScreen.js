import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <Button title="Aller aux Détails" onPress={() => navigation.navigate('Details')} />
      <View style={{ height: 12 }} />
      <Button title="Voir le Compteur" onPress={() => navigation.navigate('Counter')} />
      <View style={{ height: 12 }} />
      <Button title="Search dog" onPress={() => navigation.navigate('Search')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 22, 
    fontWeight: '600' 
  },
});
