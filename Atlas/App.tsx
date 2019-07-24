import * as React from 'react';
import { StyleSheet, Text, View, Button, NativeSyntheticEvent, NativeTouchEvent, Image, ScrollView } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, NavigationNavigatorProps } from 'react-navigation';
import Login from './Login';

// var express = require('express')
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

// // connecting to database using MongoDB
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://majesty_uwagerikpe:atlasadmin2019@cluster-atlas-2jaxm.azure.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// // database requirements
// var User = require('./models/User.tsx');

class App extends React.Component<NavigationNavigatorProps> {

  public onPress(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    console.log("");
  }

  public onLogInPress(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    console.log("");
    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ],
    }))
  }

  public onCreateAccountPress(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    console.log("");
  }

  public render() {
    const pic = {
      uri: "https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/27504080_124718758345149_4361505701094462680_o.jpg?_nc_cat=100&_nc_oc=AQk8hxUOuE9079dAajHyxXdNuTIeLbJpiGNSgVFS_aVtJ17pExVHgBUO22TZhl5WePg&_nc_ht=scontent-atl3-1.xx&oh=f84aa2a2a4560e3d82ddc56a1be594f8&oe=5DA790D5"
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    const majesty = (
      <Image source = {pic} style={{width: 400, height: 400}}/>
    );

    return(
    <View style={styles.container}>
      <Image source = {require('./assets/atlas_logo.png')} style={{width: 350, height: 150}}/>
      <Button title = "Log in" onPress = {this.onLogInPress.bind(this)} />
      <Button title = "Create account" onPress = {this.onCreateAccountPress.bind(this)}/>      
    </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Login: {
    screen: Login,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);