import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

const MealDetailsScreen = (props) => {
    return (
        <View style={styles}>
            <Text>Meal Details Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MealDetailsScreen;