import * as React from 'react'
import { View, Text } from 'react-native'

export default function LemonHeader() {
    return (
        <View style={{ height: 80, backgroundColor: '#F4CE14' }}>
            <Text style={{ padding:40, fontSize: 30, color: 'black', textAlign:'center'}}>
                Little Lemon
            </Text>
        </View>
    );
}