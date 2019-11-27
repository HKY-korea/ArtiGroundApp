import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import BackButton from './BackButton';
import SignUp from './SignUp';
import Inputs from './Inputs';
import SocialLoginBar from './SocialLoginBar';
import Login from './Login';

class App extends Component {
    constructor() {
        super();
        this.state = {
            profileValue: '',
            mailValue: '',
            passwordValue: ''
        }
        this.backWard = this.backWard.bind(this);
        this.signUp = this.signUp.bind(this);
        this.faceBookLogin = this.faceBookLogin.bind(this);
        this.twitterLogin = this.twitterLogin.bind(this);
        this.googleLogin = this.googleLogin.bind(this);
        this.login = this.login.bind(this);
        this.profileChange = this.profileChange.bind(this);
        this.mailChange = this.mailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    backWard() {
        console.log('Successful BackWard');
    }

    signUp() {
        console.log('Successful Signup');
    }

    faceBookLogin() {
        console.log('Successful Login');
    }

    twitterLogin() {
        console.log('Successful Login');
    }

    googleLogin() {
        console.log('Successful Login');
    }

    login() {
        console.log('Successful Login');
    }

    profileChange(profileValue) {
        console.log('Profile Value: ', profileValue);
        this.setState({ profileValue });
    }

    mailChange(mailValue) {
        console.log('Mail Value: ', mailValue);
        this.setState({ mailValue });
    }

    passwordChange(passwordValue) {
        console.log('Password Value: ', passwordValue);
        this.setState({ passwordValue });
    }

    render() {
        const { profileValue, mailValue, passwordValue } = this.state;

        return (
            <View style={styles.container}>
                <View>
                    <BackButton backWard={this.backWard} />
                </View>
                {/* <Header /> 작은 아티그라운드 로고 */} 
                <View style={styles.inputContainer}>
                    <Inputs
                        profileValue={profileValue}
                        mailValue={mailValue}
                        passwordValue={passwordValue}
                        profileChange={(text) => this.profileChange(text)}
                        mailChange={(text) => this.mailChange(text)}
                        passwordChange={(text) => this.passwordChange(text)}/>
                    <SignUp signUp={this.signUp} />
                </View>
                <View style={styles.socialLoginContainer}>
                    <SocialLoginBar 
                        faceBookLogin={this.faceBookLogin} 
                        twitterLogin={this.twitterLogin} 
                        googleLogin={this.googleLogin} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle} >Already have an acount?</Text>
                </View>
                <View style={styles.footer}>
                    <Login login={this.login} />
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
    backButtonContainer: {
        width: '100%',
        height: '6.2%'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    socialLoginContainer: {
        width: '100%',
        height: '25%',
        justifyContent: 'flex-end'
    },
    textContainer: {
        width: '100%',
        height: '12.5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    footer: {
        width: '100%',
        justifyContent: 'flex-end'
    },
    textStyle: {
        fontFamily: 'Arial',
        fontSize: 10,
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: 22,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#f8a600'
    }
});

export default App;