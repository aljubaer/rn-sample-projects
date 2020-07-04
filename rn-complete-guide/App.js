import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

    const [isMode, setIsMode] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        if (goalTitle.length === 0)
            return;
        setCourseGoals(currentGoals => {
            return [...courseGoals, {
                id: Math.random().toString(),
                value: goalTitle
            }];
        });
        setIsMode(false);
    }

    const removeGoalHandler = (goalId) => {

        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => {
                return goal.id !== goalId;
            });
        });
    }

    const cancelAddGoalHandler = () => {
        setIsMode(false);
    }

    return (
        <View style={styles.screen}>
            <Button
                title="Add Goal"
                onPress={() => setIsMode(true)}
            />
            <GoalInput
                visible={isMode}
                onAddGoal={addGoalHandler}
                onCancel={cancelAddGoalHandler}
            />
            <FlatList
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                data={courseGoals}
                renderItem={itemData => {
                    return <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={removeGoalHandler}
                    />;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
