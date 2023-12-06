import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.4093,
          longitude: 49.8671,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 40.4093, longitude: 49.8671 }}
          title="Baku"
          description="The capital of Azerbaijan"
        >
          <Callout>
            <View style={styles.callout}>
              <Text style={styles.title}>Baku</Text>
              <Text style={styles.description}>
                Baku is the largest city and the cultural, industrial and
                political center of Azerbaijan. It is located on the southern
                shore of the Absheron Peninsula, which projects into the Caspian
                Sea.
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  callout: {
    width: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 14,
  },
});
