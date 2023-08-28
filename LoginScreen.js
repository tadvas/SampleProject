import React, {useState} from "react";
import { ScrollView, Text, TextInput, StyleSheet, Alert, Pressable } from "react-native"

export default function LoginScreen({navigation}) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [isLoggedIn, onLogin] = useState(false);
    return (
        <ScrollView keyboardDismissMode="interactive" style={styles.container}> 
            <Text 
                style={styles.title}>
                Welcome to Little Lemon
            </Text>
            {isLoggedIn && (
                <Text style={styles.title}>You ARE in!</Text>
            )}
            {!isLoggedIn && (
                <>
            <Text 
                style={styles.loginTitle}>
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
            <Pressable
                style={styles.button}
                onPress={() => {
                    onLogin(!isLoggedIn)
                    navigation.navigate("Welcome")
                }}
            >
                <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
            </>
            )}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#333333',
    },
    title:{
        textAlign: 'center',
        fontSize: 32,
        color: 'white',
        marginTop: 100
    },
    loginTitle:{
        textAlign: 'center',
        fontSize: 22,
        color: 'white',
        marginTop: 100,
        marginBottom:20,
    },
    input: {
        backgroundColor:'white',
        margin:10,
        height:40,
        marginTop:20,
        padding:5
    },
    button: {
        backgroundColor: '#EE9972',
        height: 50,
        marginHorizontal: 100,
        marginTop: 20,
        borderColor: '#EE9972',
        borderWidth: 1,
        borderRadius: 30
    },
    buttonText: {
        textAlign: "center",
        fontSize: 22,
        padding: 10
    }
})
