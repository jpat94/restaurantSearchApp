import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, FlatList, ScrollView, Linking } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    const link = result.url;
    const open = result.hours[0].is_open_now;
    var isOpen;

        // Testing purposes only
    //console.log(result);
    //console.log(link);
    //console.log(open);

    if (!open) {
        isOpen = 'Currently closed.';
    } else {
        isOpen = 'Open now!';
    }

    return(
        <>
            <ScrollView>
                <Text 
                    style={styles.name}
                    onPress={() => Linking.openURL(`${link}`)}
                >
                    {result.name} Website
                </Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({ item }) => {
                        return <Image source={{ uri: item }} style={styles.image} />
                    }}
                />
                <Text style={[styles.status, !open ? styles.closed : styles.open]}>{isOpen}</Text>
                <Text style={styles.info}>Phone Number: {result.display_phone}</Text>
                <Text style={styles.info}>Address: {result.location.display_address[0]}</Text>
                <Text style={styles.info}>                {result.location.display_address[1]}</Text>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginVertical: 10,
        color: 'rgb(0, 125, 200)',
        textDecorationLine: 'underline'
    },
    image: {
        height: 250,
        width: 300,
        borderRadius: 5,
        marginLeft: 20,
        flex: 1
    },
    status: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 20,
    },
    open: {
        color: 'rgb(0, 150, 0)'
    },
    closed: {
        color: 'rgb(150, 0, 0))'
    },
    info: {
        fontSize: 18,
        marginLeft: 20
    }
});

export default ResultsShowScreen;