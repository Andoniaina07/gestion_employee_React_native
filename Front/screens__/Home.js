import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animatable.Text animation="fadeInDown" duration={1500} style={{ fontSize: 24, marginBottom: 20 }}>
        Welcome to My App
      </Animatable.Text>
      <Animatable.View animation="fadeInUp" delay={500} duration={1500} style={{ marginBottom: 20 }}>
        <Text>This is your Home.</Text>
      </Animatable.View>
      <Animatable.View animation="fadeIn" delay={1000} duration={1500}>
        <TouchableOpacity style={{ padding: 10, backgroundColor: 'blue', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Get Started</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Home;
