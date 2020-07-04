import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Button,
    Modal
} from 'react-native';

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const onCancelHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    }

    return (
        <Modal
            style={styles.modal}
            visible={props.visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button
                    title="Cancel"
                    onPress={onCancelHandler}
                />
                <Button
                    title="Add"
                    onPress={addGoalHandler}
                />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    modal: {
        padding: 20
    }
})

export default GoalInput;