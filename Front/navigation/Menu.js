import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './screens/Home';
// import Employee from './screens/Employee';
// import Contact from './screens/Contact';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import Employee from '../screens/Employee';

const Tab = createBottomTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarLabelPosition: "below-icon",
        tabBarShowLabel: true,
        tabBarActiveTintColor: "purple",
      }}
      >
        <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: "Acceuil",
          tabBarIcon:()=><Ionicons name = "home" size={20}/>
        }}
        />

        <Tab.Screen 
        name="Employée" 
        component={Employee} 
        options={{
          tabBarLabel: "Employée",
          tabBarBadge: 3,
          tabBarIcon:()=><Ionicons name = "person" size={20}/>
        }}
        
        />


        <Tab.Screen  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          name="Contact"
          component={Contact}
          options={{
          tabBarLabel: "Contact",
          tabBarIcon:()=><Ionicons name = "person-circle-outline" size={20}/>
        }}
          />

          
      </Tab.Navigator>
    </NavigationContainer>
  );
}