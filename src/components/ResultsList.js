import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ header, results, navigation }) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>{header}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => 
                                navigation.navigate('Results', { id: item.id })
                            }
                        >
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 5
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 20,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);