import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { CATEGORIES } from "../data/data";
import Colors from "../constants/Colors";

const CategoryMealScreen = (props) => {
    const categoryId = props.navigation.getParam('cid');

    const category = CATEGORIES.find(
        category => category.id === categoryId
    )

    return (
        <View style={styles.screen}>
            <Text>{category.title}</Text>
            <Button
                title="Go to details"
                onPress={() => {
                    props.navigation.navigate({routeName: 'MealDetails'})
                }}
            />
        </View>

    );
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('cid');

    const category = CATEGORIES.find(
        category => category.id === categoryId
    );

    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealScreen;