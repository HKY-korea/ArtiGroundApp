import React from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import images from '../assets/images/image';

const NewDesigner = () => (
    <View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Art Work Sales</Text>
        </View>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.photoContainer} >
            <Image source={images['Ex_Sale1']} style={styles.photoMargin} />
            <Image source={images['Ex_Sale2']} style={styles.photoMargin} />
            <Image source={images['Ex_Sale3']} style={styles.photoMargin} />
            <Image source={images['Ex_Sale1']} style={styles.photoMargin} />
            <Image source={images['Ex_Sale2']} style={styles.photoMargin} />
            <Image source={images['Ex_Sale3']} style={styles.photoMargin} />
        </ScrollView>
        <View style={styles.scrollBarStyle}>
            <Image source={images['ScrollBar']} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    photoContainer: {
        alignItems: 'center',
        paddingStart: 15,
        paddingEnd: 15,
        marginTop: 25
    },
    photoMargin: {
        marginHorizontal: 15
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'normal',
        letterSpacing: 1.1,
        textAlign: 'left',
        color: '#1a1311',
        marginTop: 30
    },
    titleContainer: {
        paddingStart: 30,
        flexDirection: 'row',
    },
    scrollBarStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    }
});

export default NewDesigner;