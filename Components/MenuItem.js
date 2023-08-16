
import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Item = ({name, price}) => (
    <View style={menuStyles.innerContainer}>
        <Text style={menuStyles.menuItem}>
            {name}
        </Text>
        <Text style={menuStyles.menuItem}>
            {price}
        </Text>
    </View>
)
const renderSectionHeader = ({section: {title}}) => (
    <View style={menuStyles.sectionHeader}>
        <Text style={menuStyles.sectionHeaderText}>
            {title}
        </Text>
    </View>
)
const Footer = () => (
    <Text style={menuStyles.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  );
const MenuItem = () => {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price}/>
    return (
        <SectionList
            sections={menuItemsToDisplay}    
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={renderSectionHeader}
            ListFooterComponent={Footer}
        >
        </SectionList>
    );
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    menuItem: {
        color: 'yellow',
        fontSize: 20
    },
    innerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    sectionHeader: {
        height:40,
        backgroundColor:'yellow',
        justifyContent:'center',
        textAlign:'center'  
    },
    sectionHeaderText: {
        textAlign:'center',
        fontSize:30,
        color:'black'
    },
    footerText: {
        color: '#EDEFEE',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
})
export default MenuItem;