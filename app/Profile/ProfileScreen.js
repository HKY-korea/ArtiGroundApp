import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Profile from './Profile';
import Introduction from './Introduction';
import ProfileSocialTab from './ProfileSocialTab';
import ProfileTabBar from './ProfileTabBar';
import PostPhoto from './PostPhoto';

class ProfileScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <Profile />
                    <Introduction />
                    <ProfileSocialTab />
                    <ProfileTabBar />
                </View>
                <View style={styles.representativePhotoContainer}>
                    <PostPhoto />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    profileContainer: {
        flex: 1.1,
        marginTop: 40,
        marginLeft: 32,
        marginRight: 32,
        justifyContent: 'space-between'
    },
    representativePhotoContainer: {
        flex: 1,
        marginTop: 50,
        marginLeft: 32,
        marginRight: 32
    }
});

export default ProfileScreen;