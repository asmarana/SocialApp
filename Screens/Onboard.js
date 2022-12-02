import React from 'react';
import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Onboard = ({ navigation }) => {
    return (
        <Onboarding
            onSkip ={ ()=> navigation.replace("Login")}
            onDone  ={ ()=> navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/Onboarding1.jpg')} />,
                    title: 'Onboarding 1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#a6d4d0',
                    image: <Image source={require('../assets/Onboarding2.jpg')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }, 
                {
                    backgroundColor: '#a9bcbd',
                    image: <Image source={require('../assets/Onboarding3.png')} />,
                    title: 'Onboarding 3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                }
            ]}/>
    );
};

export default Onboard;