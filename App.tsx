import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const Region = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  // const mapRef = useRef(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={Region}
        // ref={mapRef}
      >
        {/* <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex:1
  },

});

export default App;


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import MapView, { Marker, Callout } from 'react-native-maps';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 40.4093,
//           longitude: 49.8671,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//         <Marker
//           coordinate={{ latitude: 40.4093, longitude: 49.8671 }}
//           title="Baku"
//           description="The capital of Azerbaijan"
//         >
//           <Callout>
//             <View style={styles.callout}>
//               <Text style={styles.title}>Baku</Text>
//               <Text style={styles.description}>
//                 Baku is the largest city and the cultural, industrial and
//                 political center of Azerbaijan. It is located on the southern
//                 shore of the Absheron Peninsula, which projects into the Caspian
//                 Sea.
//               </Text>
//             </View>
//           </Callout>
//         </Marker>
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//     ...StyleSheet.absoluteFillObject,
//   },
//   callout: {
//     width: 200,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   description: {
//     fontSize: 14,
//   },
// });
