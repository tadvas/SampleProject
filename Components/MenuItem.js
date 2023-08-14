import React from 'react'
import { View, Text, ScrollView,  StyleSheet } from 'react-native'

const menuItemsToDisplay = [
    'Hummus \nPipa \nKarat \nPipi \nLala'
]
const MenuItem = () => {
    return (
        <View style={menuStyles.container}>
            <ScrollView>
                <Text style={{color:'white', fontSize:40, textAlign:'center', flexWrap:'wrap'}}>
                    View Menu
                </Text>
                <Text style={{fontSize: 32, color: 'yellow'}}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    );
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    }
})
export default MenuItem;