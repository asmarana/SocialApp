import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';

// const Done = ({ ...props }) => (
//     <TouchableOpacity
//         style={{
//             marginHorizontal : 8,
            // flex: 1,
            // height: 20,
            // radius:10,
            // borderRadius: 5,
            // backgroundColor: '#fff',
            // justifyContent: 'center',
            // alignItems: 'center'
//         }}
//         {...props}
//     >
//         <Text style={{ fontSize: 16 }}>Done</Text>
//     </TouchableOpacity>
// );

const Onboard = ({ navigation }) => {
    return (
        <Onboarding
            // DoneButtonComponent={Done}
            onSkip={() => navigation.replace("login")}
            onDone={() => navigation.navigate("login")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image:<Lottie source={require('../assets/schoolBus.json')} autoPlay speed={1} style={{ width: 350, height: 350 }} />,
                    title: 'Book Pre-scheduled Rides',
                    subtitle: 'Book pre-scheduled rides for students to and from schools',
                },
                {
                    backgroundColor: '#fff',
                    image: <Lottie source={require('../assets/Tracking.json')} autoPlay speed={1} style={{ width: 350, height: 350 }} />,
                    title: 'Live Tracking',
                    subtitle: 'Keep track of the ride with live map tracking ',
                    
                    
                    
                },
                {
                    backgroundColor: '#fff',
                    image: <Lottie source={require('../assets/Notifications.json')} autoPlay speed={1} style={{ width: 350, height: 350 }} />,
                    title: 'Get Notified',
                    subtitle: 'Stay in the loop with instant notifications, and alerts on any device',
                }
            ]} />
    );
};

export default Onboard;