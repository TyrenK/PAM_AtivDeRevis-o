
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
            style={styles.image}
        />
            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtext}>Como deseja entrar?</Text>
            <TouchableOpacity style={styles.button}>
                <View style={styles.iconContainer}>
                    <Image source={Google} style={styles.icon} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.buttonText}>Como deseja acessar?</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button2}>
                <Text style={styles.buttonText2}>Outras Opções</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
},
image: {
    width: windowWidth * 0.7,
    height: windowWidth * 0.7,
    resizeMode: "contain",
    marginBottom: 20,
},
title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
},
subtext: {
    fontSize: 14,
    color: "#555",
    marginBottom: 30,
},
button: {
    flexDirection: "row",
    backgroundColor: '#14c871',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: windowWidth * 0.7,
    marginBottom: 15,
},
iconContainer: {
    backgroundColor: "#fff",
    width: 32,
    height: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,  
},
icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
},
textContainer: {
    flex: 1,              
    alignItems: "center", 
},
buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
},
button2: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    width: windowWidth * 0.7,
    borderWidth: 2,
    height: 50,
    borderColor: "#14c871",
},
buttonText2: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
},
});
