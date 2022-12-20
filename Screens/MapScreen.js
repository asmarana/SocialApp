import React, { Component } from 'react'
import { View, StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

export default class MapScreen extends Component {
    state = {
        region: {
            latitude: 33.874549,
            longitude: 72.8162761,
            latitudeDelta: 0.22,
            longitudeDelta: 0.2
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1, marginBottom: this.state.marginBottom }}
                    region={this.state.region}
                    zoomControlEnabled={true}>
                </MapView>
            </View>
        )
    }
}


// import React from 'react';
// import { View } from 'react-native';
// import MapView from 'react-native-maps'
// const ApiKey = 'AIzaSyCY1oDgXTf55jiJBGLsiTsCgf9DyrlU66E';

// const MapScreen = () => {
//     return (
//         <View style={{ flex: 1 , height:100, width:100}}>
//             <MapView
//                 initialRegion={{
//                     latitude: 33.874549,
//                     longitude: 72.8162761,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//             />
//         </View >
//     );
// };

// export default MapScreen;