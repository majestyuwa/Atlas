import * as React from 'react';
import { StyleSheet, Text, View, Button, NativeSyntheticEvent, NativeTouchEvent, Image, ScrollView, TextInput } from 'react-native';

export default class Login extends React.Component {

    public render() {
        return (
            <View>
            <View style={styles.container}>
                <Image source = {require('./assets/atlas_logo.png')} style={{width: 350, height: 150}}/>
                <Text>Welcome back, log in below!</Text>
                <View style = {styles.inputs}>
                    <TextInput placeholder = "Enter email"></TextInput>
                </View>
                <View style = {styles.inputs}>    
                    <TextInput placeholder = "Enter password" secureTextEntry={true}></TextInput>
                </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputs: {
        height: 20,
        width: 350, 
        borderColor: 'gray', 
        borderWidth: 1,
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: "5%"
    //   justifyContent: 'center',
    },
  });
  