import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.image} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10
    }
});

export default ResultsDetail;