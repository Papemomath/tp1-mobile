import React, { use, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

import german from "../../assets/dog/german.png";
import chihuahua from "../../assets/dog/chihuahua.png";
import poodle from "../../assets/dog/poodle.png";

export default function DetailsScreen() {

  const [chien, setChien] = useState("Votre chien");

  const [age, seAge] = useState(0);
  const [poids, setPoids] = useState(0);
  const [couleur, setCouleur] = useState("");

  useEffect(() => {
    if (chien === "German Shepherds") {
      seAge(3);
      setPoids(30);
      setCouleur("Noir et feu");
    } else if (chien === "Chihuahuas") {
      seAge(2);
      setPoids(3);
      setCouleur("Beige");
    } else if (chien === "Poodles") {
      seAge(4);
      setPoids(10);
      setCouleur("Blanc");
    } else {
      seAge(0);
      setPoids(0);
      setCouleur("");
    }
  }, [chien]);


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

      <View/>

      <Text style={styles.caca}> {"Detaille du Chien !!!"}</Text>
      <Text style={styles.caca}>{"nom du chien sale:  "}{chien}</Text>
      <Text style={styles.caca}>{"age du chien:  "}{age}{" ans"}</Text>
      <Text style={styles.caca}>{"poids du chien:  "}{poids}{" kg"}</Text>
      <Text style={styles.caca}>{"couleur du chien:  "}{couleur}</Text>
      
  
      <View/>


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
  },
  caca: {
    left: 30,
    height: 32,
    fontSize: 22, 
    fontWeight: '600', 
    marginBottom: 8 
  }
});
