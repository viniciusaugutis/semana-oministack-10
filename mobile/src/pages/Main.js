import React, { useEffect, useState } from "react";

import { StyleSheet, Image, View, Text } from "react-native";

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import MapView, { Marker, Callout } from "react-native-maps";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: false //para isso funcionar o gps precisa estar habilitado, qualquer coisa passa false que ele pega via WIFI ou 3g
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04, //para obter o zoom do mapa
          longitudeDelta: 0.04
        });
      }
    }
    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView style={styles.map} initialRegion={currentRegion}>
      <Marker coordinate={{ latitude: -23.330642, longitude: -51.1899153 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars3.githubusercontent.com/u/18177236?s=460&v=4"
          }}
        />
        <Callout
          style={styles.callout}
          onPress={() => {
            //navegação
            navigation.navigate("Profile", ({ github_username: "diego3g"}));
          }}
        >
          <View>
            <Text style={styles.devName}>Vinícius Augutis</Text>
            <Text style={styles.devBio}>Amante de tecnologia</Text>
            <Text style={styles.devTechs}>NodeJS, Angular, Java</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#FFF"
  },
  callout: {
    width: 260
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 5
  }
});

export default Main;
