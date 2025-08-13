import React from 'react';
import casual_dog from '../assets/casual_dog.png';
import Google from '../assets/Google.png'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {


    return (
        
        <View style={styles.container}>
            <Image
            source={casual_dog}
        />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtext}>Como deseja entrar?</Text>
            <TouchableOpacity style={styles.button}>
                <View>
                    <Image
                    source={Google}
                    style={{alignContent: "left", }}
                    />
                    <Text style={styles.buttonText}>Como deseja acessar?</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity styles={styles.button}>
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
    alignContent: "center",
    textAlign: "center",
},
button: {
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
        borderColor: '#14c871',
        borderWidth: 20,
},
buttonText: {
    color: "#fff",
    fontSize: 10,
},
buttonText2: {
    color: "#000",
    fontSize: 10,
},
});