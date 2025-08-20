import React from 'react';
import casual_dog from '../assets/casual_dog.png';
import Google from '../assets/Google.png'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function AcessScreen({ navigation }) {


    return (
        
        <View style={styles.container}>
            <Image
            source={casual_dog}
        />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtext}>Como deseja entrar?</Text>
            <TouchableOpacity style={styles.button}>
                    <Image
                    source={Google}
                    />
                    <Text style={styles.buttonText}>Como deseja acessar?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button2}>
                <Text style={styles.buttonText2}>Outras Opções</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
title: {
    fontSize: 24,
    marginBottom: 10,
},
subtext: {
    fontSize: 10,
    marginBottom: 25,
},
container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
},
button: {
    flexDirection: "row",
    backgroundColor: '#14c871',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: windowWidth * 0.5,
    margin: 10,
},
button2: {
    backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        width: windowWidth * 0.5,
        margin: 10,
        borderColor: "#14c871",
        borderWidth: 2,
},
buttonText: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
    paddingLeft: 200,
},
buttonText2: {
    color: "#000",
    fontSize: 10,
},
});