import React from 'react';
import {ScrollView, Text, StyleSheet, View, ImageBackground} from 'react-native';
import Boat from './components/Boat';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    header: {
        backgroundColor: '#102A43',
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'cursive',
    },
    subtitle: {
        fontSize: 14,
        color: 'white',
        marginTop: 5,
        backgroundColor: 'teal',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'serif',
        textAlign: 'center',
    },
    background: {
        flex: 1,
    },
});

class AllBoats extends React.Component {
    render() {
        return (
            <ImageBackground
                source={require('./img/ocean.jpg')}
                style={styles.background}
                resizeMode="cover"
            >
                <ScrollView style={styles.container}>

                    <View style={styles.header}>
                        <Text style={styles.title}>
                            GetABoat
                        </Text>
                    </View>

                    <Text style={styles.subtitle}>
                        Find your next adventure
                    </Text>

                    <Boat
                        name="Four Winns Horizon 180"
                        description="A sporty look and refined details truly set the Horizon 180 above all others."
                        picture={require('./img/four_winns.jpg')}
                    />

                    <Boat
                        name="Flipper 640 ST"
                        description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                        picture={require('./img/flipper.jpg')}
                    />

                    <Boat
                        name="Princess V48"
                        description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                        picture={require('./img/princess.jpg')}
                    />

                    <Boat
                        name="Bayliner 175 Bowrider"
                        description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                        picture={require('./img/bayliner.jpg')}
                    />

                    <Boat
                        name="Fairline Targa 47"
                        description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                        picture={require('./img/fairline.jpg')}
                    />

                </ScrollView>
            </ImageBackground>
        );
    }
}

export default AllBoats;