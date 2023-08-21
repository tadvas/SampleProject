import { KeyboardAvoidingView, Text, TextInput, StyleSheet, Platform } from "react-native";
import React, { useState } from 'react'; 

const FeedbackForm = () => {
    const [firstName, onChangeFirstName] = useState('');
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Text>
                How was your visit to Little Lemon?
            </Text>
            <TextInput
                style={styles.input}
                value={firstName}
                onChangeText={onChangeFirstName}
            ></TextInput>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 5, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'red', 
        backgroundColor: '#F4CE14', 
        textAlign: 'center', 
   }
})
export default FeedbackForm;