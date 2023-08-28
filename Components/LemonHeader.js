import * as React from 'react'
import { View, Text,  StyleSheet } from 'react-native'

export default function LemonHeader() {
    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.text}>
                Little Lemon
            </Text>
        </View>
    );
}

const headerStyles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#EE9972'
    },
    text: {
        padding:40, 
        fontSize: 30,
        color: 'black',
        textAlign:'center'
    }
})