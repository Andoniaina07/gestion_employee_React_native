// import * as React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import Home from './screens/Contact'
// import Contact from './screens/Contact';
// import Employee from './screens/Employee';

// const Tab = createBottomTabNavigator();

// export default function Menu() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={{
//         tabBarLabelPosition: "below-icon",
//         tabBarShowLabel: true,
//         tabBarActiveTintColor: "purple",
//       }}
//       >
//         <Tab.Screen 
//         name="Home" 
//         component={Home} 
//         options={{
//           tabBarLabel: "Acceuil",
//           tabBarIcon:()=><Ionicons name = "home" size={20}/>
//         }}
//         />

//         <Tab.Screen 
//         name="Employée" 
//         component={Employee} 
//         options={{
//           tabBarLabel: "Employée",
//           tabBarBadge: 3,
//           tabBarIcon:()=><Ionicons name = "person" size={20}/>
//         }}
        
//         />

//         <Tab.Screen  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//           name="Contact"
//           component={Contact}
//           options={{
//           tabBarLabel: "Contact",
//           tabBarIcon:()=><Ionicons name = "person-circle-outline" size={20}/>
//         }}
//           />

          
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

import React, { Component } from 'react'; 
import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity,FlatList, ActivityIndicator } from 'react-native';7
// import { StackNavigator } from 'react-navigation'; 
// import 'react-native-gesture-handler' from 'react-native';


class App extends Component {     
    static navigationOptions =   {      
        title: 'MainActivity',   
      };  
 constructor(props) {      
 super(props)      
    this.state = {  
      numero:'',
      nom:'',
      salary:'',      
      // TextInput_numProduit: '',
      // TextInput_design: '',
      // TextInput_prix: '',      
      // TextInput_quantite: '',      
    }    
}    
// InsertProduitRecordsToServer = () =>{         
//         fetch('https://reactnativecode.000webhostapp.com/poduit/InsertProduitData.php',
//       {       method: 'POST',
//         headers: {
//                  'Accept': 'application/json',
//                  'Content-Type': 'application/json',       
//                  },
//                  body: JSON.stringify({           
//                  numProduit : this.state.TextInput_numProduit,           
//                  design : this.state.TextInput_design,           
//                  prix : this.state.TextInput_prix,           
//                  quantite: this.state.TextInput_quantite         
//                  })         
//                  }).then((response) => response.json()).then((responseJson) => {               
//                  // Showing response message coming from server after inserting records.             
//                  Alert.alert(responseJson);             
//                }).catch((error) => {             
//                 console.error(error);           
//               });   
//              }    
// GoTo_Show_ProduitList_Activity_Function = () =>  {     
//   this.props.navigation.navigate('Second');        
// }    
render() {    
  return (   
        <View >            
            <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Fiche Employee</Text>
            <TextInput
        placeholder="Numero d'employee"
        // value={numero}
        // onChangeText={setNumero}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Nom d'employee"
        // value={nom}
        // onChangeText={setNom}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Salaire d'employee"
        // value={salary}
        // onChangeText={setSalary}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      {/* <Button title="AJOUTER" onPress={handleSubmit} /> */}
                <TouchableOpacity activeOpacity = { .4 }  onPress={this.InsertStudentRecordsToServer} >           
                    <Text > INSERT Employee </Text>         
                </TouchableOpacity>         
                <TouchableOpacity activeOpacity = { .4 } onPress={this.GoTo_Show_StudentList_Activity_Function} >           
                    <Text > Voir toute la liste  </Text>         
                </TouchableOpacity>     
        </View>                
    );  
  } 
} 

export default App;