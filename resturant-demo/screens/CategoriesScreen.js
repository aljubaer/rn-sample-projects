import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { CATEGORIES } from "../data/data";
import Colors from "../constants/Colors";



const CategoriesScreen = (props) => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            cid: itemData.item.id
                        }
                    })
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            style={styles.screen}
            keyExtractor={ (item, index) => item.id }
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categories'
}

const styles = StyleSheet.create({
    screen: {
        margin: '2%'
    },
    gridItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '46%',
        height: 200,
        borderRadius: 10,
        backgroundColor: 'red',
        marginTop: 8,
        marginHorizontal: '2%',
    }
})

export default CategoriesScreen;