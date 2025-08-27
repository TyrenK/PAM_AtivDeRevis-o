import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconButton}>
        <Icon
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={20}
          color="#888"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#f3f3f8',
    borderRadius: 8,
  },
  input: {
    width: '100%',
    padding: 12,
    paddingRight: 40, 
  },
  iconButton: {
    position: 'absolute',
    right: 10,
    top: 12, // 
  },
});

export default PasswordInput;

 