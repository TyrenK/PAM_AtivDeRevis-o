import React from 'react';
import Facebook from '../assets/Facebook.png';
import Google from '../assets/Google.png'
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {

    let email;
    let senha; 

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtext}>Com E-mail e senha</Text>
            <Text style={styles.subtext}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                keyboardType="text"
                value={email}
                />
            <Text style={styles.subtext}>Senha</Text>
            <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="Digite sua senha"
                keyboardType="text"
                value={senha}
                />  
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    textAlign: "center",
},
title: {
    fontSize: 24,
    marginBottom: 10,
},
subtext: {
    fontSize: 10,
    marginBottom: 25,
},
input: {
    paddingLeft: 10,
    width: windowWidth * 0.5,
    borderWidth: 1, 
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
},
});