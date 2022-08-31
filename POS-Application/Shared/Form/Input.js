import React from 'react';
import { TextInput, StyleSheet } from 'react-native'

import colors from '../../theme/colors';

const Input = (props) => {
    return (
        <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        >
        </TextInput>
    );
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        margin: 5,
        color:colors.thickGrey,
        borderRadius: 12.5,
        padding: 10,
        borderWidth: 1,
        borderColor: colors.grey,
        

    },
});

export default Input;