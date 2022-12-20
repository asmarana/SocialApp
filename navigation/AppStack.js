import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AddPostScreen from '../Screens/AddPostScreen';
import { NOT_INITIALIZED_ERROR } from '@react-navigation/core/lib/typescript/src/createNavigationContainerRef';
import MapScreen from '../Screens/MapScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({ navigation }) => (
  <Stack.Navigator >
    <Stack.Screen
      name="VFind"
      component={HomeScreen}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <Feather
              name="plus"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('AddPost')}
            />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#2e64e515',
          shadowColor: '#2e64e515',
          elevation: 0,
        },
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="arrow-back" size={25} color="#2e64e5" />
          </View>
        ),
      }}
    />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: '',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        }
      }}
    />
  </Stack.Navigator>
);

const MessageStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Chat"
      component={ChatScreen}
    />
  </Stack.Navigator>
);

const ProfileStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const AppStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Home"
        component={FeedStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-home-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-chatbox-ellipses-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="md-location-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather
              name="user"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};



// import React from 'react';
// import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from '../Screens/HomeScreen';

// const Stack = createStackNavigator();

// const AppStack = ({navigation}) => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         headerTitleAlign: 'center',
//         headerTitleStyle: {
//           color: '#2e64e5',
//           fontFamily: 'Kufam-SemiBoldItalic',
//           fontSize: 18,
//         },
//         headerStyle: {
//           shadowColor: '#fff',
//           elevation: 0,
//         }
//       }}
//     />
//   </Stack.Navigator>
// )

export default AppStack;