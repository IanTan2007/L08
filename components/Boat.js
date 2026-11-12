
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        margin: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#CCDDE8',
        overflow: 'hidden',
    },
    boatName: {
        backgroundColor: 'darkblue',
        color: 'white',
        fontSize: 17,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        paddingTop: 12,
        textAlign: 'center',

    },
    description: {
        fontSize: 14,
        color: 'white',
        padding: 12,
        lineHeight: 20,
        fontFamily: 'serif',
        backgroundColor: 'darkgreen',
    },
    picture: {
        width: '100%',
        height: 250,
    },

    nameRow: {
        backgroundColor: 'darkblue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        gap: 8,
    },
});

const Boat = ({name, description, picture}) => {
    return (
        <View style={styles.card}>
            <View style={styles.nameRow}>
                <FontAwesome6 name="anchor" size={22} color="cyan" />
                <Text style={styles.boatName}>
                    {name}
                </Text>
            </View>

            <Text style={styles.description}>
                {description}
            </Text>

            <Image
                source={picture}
                style={styles.picture}
            />


        </View>
    );
};

export default Boat;
