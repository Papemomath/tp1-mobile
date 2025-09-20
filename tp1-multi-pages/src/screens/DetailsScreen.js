import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
} from "react-native";

import { LineChart } from "react-native-chart-kit";

import german from "../../assets/dog/german.png";
import chihuahua from "../../assets/dog/chihuahua.png";
import poodle from "../../assets/dog/poodle.png";

export default function DetailsScreen() {
  const screenWidth = Dimensions.get("window").width;

  const [theme, setTheme] = useState("rose"); 


  const poidsParAge = {
    "German Shepherds": [10, 15, 20, 25, 35],
    Chihuahuas: [1, 1.5, 2, 2.5, 3],
    Poodles: [5, 6, 8, 9, 10],
  };

  const ageLabels = ["1 an", "2 ans", "3 ans", "4 ans", "5 ans"];

  const [chien, setChien] = useState("Choisissez un chien");
  const [age, setAge] = useState(0);
  const [poids, setPoids] = useState(0);
  const [couleur, setCouleur] = useState("");
  const [likesGerman, setLikesGerman] = useState(0);
  const [likesChihuahua, setLikesChihuahua] = useState(0);
  const [likesPoodle, setLikesPoodle] = useState(0);
  const [likes, setLikes] = useState(0);

  const [chartData, setChartData] = useState([]);

  const [scaleGerman] = useState(new Animated.Value(1));
  const [scaleChihuahua] = useState(new Animated.Value(1));
  const [scalePoodle] = useState(new Animated.Value(1));

  const animateLike = (scale) => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  useEffect(() => {
    if (chien === "German Shepherds") {
      setAge(3);
      setPoids(30);
      setCouleur("Noir et feu");
      setLikes(likesGerman);
    } else if (chien === "Chihuahuas") {
      setAge(2);
      setPoids(3);
      setCouleur("Beige");
      setLikes(likesChihuahua);
    } else if (chien === "Poodles") {
      setAge(4);
      setPoids(10);
      setCouleur("Blanc");
      setLikes(likesPoodle);
    } else {
      setAge(0);
      setPoids(0);
      setCouleur("");
      setLikes(0);
    }

    if (poidsParAge[chien]) {
      setChartData(poidsParAge[chien]);
    } else {
      setChartData([0]);
    }
  }, [chien, likesGerman, likesChihuahua, likesPoodle]);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>



     {/* 26x BOUTONN PR CHAN?GER? DE THEME */}
     <TouchableOpacity
  onPress={() => setTheme(theme === "rose" ? "bleu" : "rose")}
  style={{ alignSelf: "center",
    paddingHorizontal: 16,
    backgroundColor: "#eec2f6ff",
  }} >
  <Text>
    thème: {theme === "rose" ? "rose" : "bleu"}
  </Text>
</TouchableOpacity>


      <Text style={styles.title}>{chien}</Text>
      {/* 26x theme ------- */}
      <View style={[styles.chienContainer, { backgroundColor: themee[theme] }]}>
        {/* German Shepherd */}
        <Image style={styles.image} source={german} />
        <TouchableOpacity
          onPress={() => setChien("German Shepherds")}
          style={styles.button}
        >
          <Text style={styles.text}>German</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setLikesGerman((prev) => prev + 1);
            animateLike(scaleGerman);
          }}
          style={styles.buttonLike}
        >
          <Animated.Text
            style={[styles.likeText, { transform: [{ scale: scaleGerman }] }]}
          >
            ❤️ {likesGerman}
          </Animated.Text>
        </TouchableOpacity>

        {/* Chihuahua */}
        <Image style={styles.image} source={chihuahua} />
        <TouchableOpacity
          onPress={() => setChien("Chihuahuas")}
          style={styles.button}
        >
          <Text style={styles.text}>Chihuahuas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setLikesChihuahua((prev) => prev + 1);
            animateLike(scaleChihuahua);
          }}
          style={styles.buttonLike}
        >
          <Animated.Text
            style={[
              styles.likeText,
              { transform: [{ scale: scaleChihuahua }] },
            ]}
          >
            ❤️ {likesChihuahua}
          </Animated.Text>
        </TouchableOpacity>

        {/* Poodle */}
        <Image style={styles.image} source={poodle} />
        <TouchableOpacity
          onPress={() => setChien("Poodles")}
          style={styles.button}
        >
          <Text style={styles.text}>Poodles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setLikesPoodle((prev) => prev + 1);
            animateLike(scalePoodle);
          }}
          style={styles.buttonLike}
        >
          <Animated.Text
            style={[styles.likeText, { transform: [{ scale: scalePoodle }] }]}
          >
            ❤️ {likesPoodle}
          </Animated.Text>
        </TouchableOpacity>
      </View>

      {/* Détails du chien */}
      <View style={styles.detailContainer}>
        <Text style={styles.textChienTitre}>{"Détails du Chien"}</Text>
        <Text style={styles.textChien}>
          {"Nom: "}
          {chien}
        </Text>
        <Text style={styles.textChien}>
          {"Âge: "}
          {age} ans
        </Text>
        <Text style={styles.textChien}>
          {"Poids: "}
          {poids} kg
        </Text>
        <Text style={styles.textChien}>
          {"Couleur: "}
          {couleur}
        </Text>
        <Text style={styles.textChien}>
          {"Likes: "}
          {likes}
        </Text>
      </View>

      {/* Graphique */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Évolution du poids du chien</Text>

        <LineChart
          data={{
            labels: ageLabels,
            datasets: [{ data: chartData }],
          }}
          width={screenWidth - 32}
          height={220}
          yAxisSuffix=" kg"
          chartConfig={{
            backgroundColor: "#fce4ec",
            backgroundGradientFrom: "#fce4ec",
            backgroundGradientTo: "#f8bbd0",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(136, 14, 79, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(74, 20, 140, ${opacity})`,
            style: { borderRadius: 16 },
            propsForDots: { r: "6", strokeWidth: "2", stroke: "#880e4f" },
          }}
          bezier
          style={{ marginVertical: 8, borderRadius: 16 }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#880e4f",
  },
  chienContainer: {
    backgroundColor: "#e4f1fcff",
    padding: 20,
    marginBottom: 20,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginVertical: 10,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#f8bbd0",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#f48fb1",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#880e4f",
    fontWeight: "600",
  },
  buttonLike: {
    backgroundColor: "#f48fb1",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  likeText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  detailContainer: {
    backgroundColor: "#fce4ec",
    padding: 20,
    width: "90%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
  },
  textChienTitre: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 12,
    textAlign: "center",
    color: "#880e4f",
  },
  textChien: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 6,
    color: "#4a148c",
  },
  chartContainer: {
    margin: 0,
    backgroundColor: "#fce4ec",
    padding: 10,
    borderRadius: 15,
  },
  chartTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#880e4f",
  },
});
// 26x theme -------
const themee = {
  rose: "#fce4ec",  
  bleu: "#e4f1fc",   
};
