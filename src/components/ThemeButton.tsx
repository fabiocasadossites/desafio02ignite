import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

const ThemeButton = ({ ...rest }) => {
    
    return (
        <TouchableOpacity style={styles.button} {...rest}>
            <Text style={styles.text}>TEMA</Text>
        </TouchableOpacity>
    );

}

export default ThemeButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#04d361',
        padding: 15,
        marginBottom: 15,
        alignSelf: 'center',
        width: 75,
        borderRadius: 5,
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});