import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TodayWork from './TodayWork';
import NewDesigner from './NewDesigner';
import WorkSale from './WorkSale';

class HomeScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <TodayWork />
                <NewDesigner />
                <WorkSale />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingBottom: 50
    }
});

export default HomeScreen;