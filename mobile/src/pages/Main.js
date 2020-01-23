import React, { useEffect, useState } from "react";

import { StyleSheet, Image } from "react-native";

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import MapView, { Marker } from "react-native-maps";

function Main() {
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
        <Image style = {styles.avatar}
          source={{
            uri: "https://avatars3.githubusercontent.com/u/18177236?s=460&v=4"
          }}
        />
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
    borderColor: '#FFF' 
  }
});

export default Main;
