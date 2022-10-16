import React, { useEffect, useState, Component } from "react"
import { StyleSheet, View, Text, PROVIDER_GOOGLE } from "react-native";
import MapView, { AnimatedRegion } from 'react-native-maps';

import * as TaskManager from "expo-task-manager"
import * as Location from "expo-location"

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME"
let foregroundSubscription = null

export default function Map() {
    return(
    <View style={styles.container}>
        <MapView style={{height: '100%', width:'100%'}} initialRegion={{
            latitude: 42.4440,
            longitude: -76.5019,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            mapType: "standard",
            zoomEnabled: true,
            scrollEnabled: true,
            showsScale: true
        }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        />
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 8,
  },
})