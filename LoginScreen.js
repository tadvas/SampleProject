import React, {useState} from "react";
import { ScrollView, Text, TextInput, StyleSheet, Alert } from "react-native"

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <ScrollView keyboardDismissMode="interactive" style={styles.container}> 
            <Text 
                style={styles.title}>
                Welcome to Little Lemon
            </Text>
            <Text 
                style={styles.title}>
                Login to continue
            </Text>
            <TextInput
                value = {email}
                onChangeText={onChangeEmail}
                style={styles.input}
                placeholder="email"
                keyboardType="email-address" 
                onFocus={() => {Alert.alert("First name is focussed")}} 
                onBlur={() => {Alert.alert("First name is now blurred")}}
            />
            <TextInput
                value= {password}
                onChangeText={onChangePassword}
                style={styles.input}
                placeholder="password"
                keyboardType="default"
                secureTextEntry={true}
                clearButtonMode={"always"} 
            />
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title:{
        textAlign: 'center',
        fontSize: 32,
        color: 'white',
        marginTop: 100
    },
    input: {
        backgroundColor:'white',
        margin:10,
        height:30,
        marginTop:20,
        padding:5
    }
})
