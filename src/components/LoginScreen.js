import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Facebook from '../assets/Facebook.png';
import Google from '../assets/Google.png';
import PasswordInput from './PasswordInput';

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState(''); 
    const [lembrar, setLembrar] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={26} color="#6fc099ff" />
            </TouchableOpacity>

            <Text style={styles.title}>Acesse</Text>
            <Text style={styles.subtext}>Com E-mail e senha</Text>

            <Text style={styles.label}>E-mail</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu E-mail"
                keyboardType="text"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>Senha</Text>
            <PasswordInput
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
            />

            <View style={styles.optionsRow}>
                <TouchableOpacity style={styles.rememberRow} onPress={() => setLembrar(!lembrar)}>
                    <View style={[styles.checkbox, lembrar && styles.checkboxSelected]}>
                        {lembrar && <Ionicons name="checkmark" size={16} color="#fff" />}
                    </View>
                    <Text style={styles.rememberText}>Lembrar senha</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.forgotText}>Esqueci minha senha</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.accessButton}>
                    <Text style={styles.accessButtonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.dividerRow}>
                <View style={styles.line}></View>
                <Text style={styles.dividerText}>Ou continue com</Text>
                <View style={styles.line}></View>
            </View>

            <View style={styles.socialRow}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={Google} style={styles.socialIcon} resizeMode="contain" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={Facebook} style={styles.socialIcon} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",
    },
    goBackButton: {
        position: "absolute",
        top: 40,
        left: 20,
        zIndex: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 80,
        color: "#1c1c1c",
    },
    subtext: {
        fontSize: 14,
        color: "#666",
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: "#333",
        marginBottom: 5,
        fontWeight: "500",
    },
    input: {
        width: "100%",
        backgroundColor: "#f3f3f8",
        padding: 12,
        borderRadius: 8,
        marginBottom: 15,
    },
    optionsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    rememberRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1.5,
        borderColor: "#6fc099ff",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
    },
    checkboxSelected: {
        backgroundColor: "#6fc099ff",
    },
    rememberText: {
        color: "#333",
        fontSize: 12,
    },
    forgotText: {
        color: "#666",
        fontSize: 12,
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
    },
    accessButton: {
        flex: 1,
        backgroundColor: '#14c871',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginRight: 5,
    },
    accessButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    registerButton: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#14c871',
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginLeft: 5,
    },
    registerButtonText: {
        color: '#14c871',
        fontWeight: "bold",
    },
    dividerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },
    dividerText: {
        marginHorizontal: 10,
        color: "#555",
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "center",
    },
    socialButton: {
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        marginHorizontal: 10,
    },
    socialIcon: {
        width: 30,
        height: 30,
    },
});
