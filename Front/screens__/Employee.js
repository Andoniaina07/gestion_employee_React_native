import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

//stockage donnees
import AsyncStorage from '@react-native-async-storage/async-storage';


const Employee = () => {
  // const [numero, setNumero] = useState('');
  // const [nom, setNom] = useState('');
  // const [salary, setSalary] = useState('');

  const numero_Employee = ()  =>{
    const [numero, setNumero] = useState(''); 
    const add_numero = async () => {
      try {
        await AsyncStorage.setItem(numero);
        console.log('Données sauvegardées avec succès');
      } catch (error) {
        console.error('Erreur lors de la sauvegarde des données: ', error);
      }
    };
  }
  // const handleSubmit = () => {
  //   // Here you can implement logic to submit the employee data
  //   const employeeData = {
  //     name: numero,
  //     position: nom,
  //     salary: salary
  //   };
  //   // For demonstration, we'll just display an alert with the form data
  //   Alert.alert('Employee Data', JSON.stringify(employeeData));
  // };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Numero d'employee"
        value={numero}
        onChangeText={setNumero}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Nom d'employee"
        value={nom}
        onChangeText={setNom}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Salaire d'employee"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric"
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="AJOUTER" onPress={handleSubmit} />
    </View>
  );
};

export default Employee;
