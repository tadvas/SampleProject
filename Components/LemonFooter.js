import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function LemonFooter(){
    return (
        <View style={FooterStyles.Footer}>
            <Text style={FooterStyles.Text}>
                All rights reserved 2022{' '}
            </Text>
        </View>
    )
}

const FooterStyles = StyleSheet.create({
    Footer: {
        height: 20,
        marginBottom:20,
        backgroundColor: '#EE9972'
    },
    Text: {
        textAlign: 'center',
        fontStyle: 'italic'
    }
})