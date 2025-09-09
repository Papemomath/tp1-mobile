import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import german from "../../assets/dog/german.png";
import chihuahua from "../../assets/dog/chihuahua.png";
import poodle from "../../assets/dog/poodle.png";

export default function DetailsScreen() {

  const [chien, setChien] = useState("Votre chien");

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{chien}</Text>

        <View style={styles.containerGrid}> 
          <Image style={styles.image} source={german} />

          <TouchableOpacity onPress={() => setChien("German Shepherds")} style={styles.button}>
            <Text style={styles.text} TouchableOpacity>German</Text>
          </TouchableOpacity>

          <Image style={styles.image} source={chihuahua} />

            <TouchableOpacity onPress={() => setChien("Chihuahuas")} style={styles.button}>
              <Text style={styles.text}>Chihuahuas</Text>
            </TouchableOpacity>

          <Image style={styles.image} source={poodle} />

            <TouchableOpacity onPress={() => setChien("Poodles")} style={styles.button}>
              <Text style={styles.text}>Poodles</Text>
            </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 16 
  },
  title: { 
    fontSize: 22, 
    fontWeight: '600', 
    marginBottom: 8 
  },
  image: {
    width:200,
    height:200,
    position:"relative",
    right:75
  },
  button: {
    borderRadius:10, 
    borderWidth:2,
    position: "relative",
    left: 150,
    width: 100,
    bottom: 100,
    padding: 10
  }, 
  text: {
    textAlign: "center"
  }
});
