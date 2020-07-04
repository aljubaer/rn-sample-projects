import React from 'react';
import { Text } from 'react-native';

export default (props) => {
    const contactInfo = props.route.params.contact;

    return (
        <Text>
            { JSON.stringify(contactInfo, null, 2)}
        </Text>
    );
};
