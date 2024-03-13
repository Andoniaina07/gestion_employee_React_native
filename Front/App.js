import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    //ipconfig
    const URL = "http://192.168.201.202:3000/employee/";

    //variable 
    const [numero, setNumero] = useState("");
    const [nom, setNom] = useState("");
    const [salaire, setSalaire] = useState(null);
    const [min, setMin] = useState('');
    const [max, setMax] = useState('');
    const [sum, setSum]= useState('');
    const [id, setId] = useState(null);
    // -----------------------------------------------
  
    useEffect(() => {
        fetchData();
        getMinMax();
    }, []);
  
    //get data 
    const fetchData = async () => {
        try {
            const response = await axios.get(URL, );
            setData(response.data.data);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };
    //-----------------------------------------
    
    //suppression 
        const handleRemove = async (id) => {
            try {
                await axios.delete(URL+id, );
                fetchData();
                getMinMax();
                
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        }
    //----------------------------------------------*

    // ajout formulaire
    const handleSave = async () => {
        if (id == null) {
            try {
                const data_to_send = { 'numero': numero, 'nom': nom, 'salaire': salaire };
                await axios.post(URL, data_to_send);
                vider_champs();
                fetchData();
                getMinMax();
            } catch (e) {
                setError(e);
                setLoading(false);
            }            
        } else {
            try {
                const data_to_send = {'numero': numero, 'nom': nom, 'salaire': salaire };
                await axios.put(URL+id, data_to_send);
                vider_champs();
                fetchData();
                getMinMax();
            } catch (e) {
                setError(e);
                setLoading(false);
            } 
        }
    }

    const getMinMax = async () => {
        try {
            const response = await axios.get(URL+'getMinMax/', );
            setMin(response.data.data[0]['salaire_min']); 
            setMax(response.data.data[0]['salaire_max']); 
            setSum(response.data.data[0]['montant_tot']);
            console.log(response.data.data[0]['montant_tot']);  
        } catch (e) {
            setError(e);
            setLoading(false);
        } 
    }
    

    //----------------------------------

    //VIDER Champs de saisi
    const vider_champs = () => {
        setNom('');
        setSalaire(0);
        setId(null);

    }
    ///---------------------------

    // editer
    const handleEdit = (item) => {
        setNumero(item.numero);
        setNom(item.nom);
        setSalaire((item.salaire).toString());
        setId(item.id);
    }
    ///---------------------------

    if (loading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator/>
            </View>
        );
    }

    // if (error) {
    //     return (
    //         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //             <Text>Erreur</Text>
    //         </View>
    //     );
    // }

    //------- composant item ------
    const renderItem = ({item}) => {
        return (
            <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderRadius: 10,

                        justifyContent: "space-between",
                        padding: 10,
                        marginVertical: 10,
                        marginHorizontal: 10,
                        backgroundColor: '#f9c2ff',
                    }}>
                    <View>
                        <Text style={{fontSize: 14}}>Numero d'employee : {item.numero}</Text>
                        <Text style={{fontSize: 14}}>Nom d'employee : {item.nom}</Text>
                        <Text style={{fontSize: 14}}>Salaire d'employee : {item.salaire} Ar</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{marginVertical: 18}} onPress={() => handleRemove(item.id)}>
                            <Text style={{color:'red'}}>Supprimer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleEdit(item)}>
                            <Text>Modifier</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        );
    };
    //---------------------------------------------

  return (
    <SafeAreaView
        style={{justifyContent: 'center'}}>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerText}>FICHE</Text>
        </View>
        {/* Task Input */}
        <View style={{flexDirection:'row'}}>
                <Text>Numero d'employee : </Text>
                <TextInput style={styles.input} 
                    placeholder="Numero d'employee" 
                    value={numero} 
                    onChangeText={(text) => {
                        setNumero(text)
                    }} />
            </View>
        <View style={styles.inputContainer}>
            <View style={{flexDirection:'row'}}>
                <Text>Nom d'employee : </Text>
                <TextInput style={styles.input} 
                    placeholder="Nom d'employee..." 
                    value={nom} 
                    onChangeText={(text) => {
                        setNom(text)
                    }} />
            </View>
            <View style={{flexDirection:'row'}}>
                <Text>Salaire d'employee : </Text>
                <TextInput style={styles.input} 
                    placeholder="Salaire d'employee" 
                    keyboardType='numeric'
                    value={salaire} 
                    onChangeText={(text) => {
                        setSalaire(text)
                    }} />
            </View>

            <Button onPress={handleSave} style={{width: 200,}} color="blue"
                title="Ajouter" />
        </View>
        <View style={{marginHorizontal: 10}}>
            <Text>Salaire Minimal : {min} Ar</Text>
            <Text>Salaire Maximum : {max} Ar</Text>
            <Text>Montant Total : {sum} Ar</Text>
        </View>

            <FlatList style={styles.tasks}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 20,
       marginTop: 20,
    },
    header: {
       marginTop: 20,
       marginBottom: 20,
       alignItems: "center",
    },
    headerText: {
       fontSize: 36,
       fontWeight: "bold",
    },
    inputContainer: {
        margin: 5,
    },
    input: {
       flex: 1,
       borderWidth: 1,
       borderColor: "#777",
       borderRadius: 10,
       padding: 10,
       margin: 5,
    },
    tasks: {
       marginTop: 10,
       marginBottom: 50,
    },
  });

export default App;