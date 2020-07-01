import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" color="black" style={styles.iconStyle} />
            <TextInput
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'rgb(220, 220, 220)',
        height: 40,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 15,
        flexDirection: 'row'
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: 'flex-start',
        margin: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    }
});

export default SearchBar;