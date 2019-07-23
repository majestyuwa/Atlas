import * as React from 'react';
import { StyleSheet, Text, View, Button, NativeSyntheticEvent, NativeTouchEvent, Image } from 'react-native';

<<<<<<< HEAD
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// connecting to database using MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://majesty_uwagerikpe:atlasadmin2019@cluster-atlas-2jaxm.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// database requirements
var User = require('./models/User.tsx');
export default function App() {
  return (
=======
export default class App1 extends React.Component {
  state = {showMajesty: false}; 

  public onPress(ev: NativeSyntheticEvent<NativeTouchEvent>) {
    console.log("");
    this.setState({showMajesty: !this.state.showMajesty});
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
>>>>>>> 3638de2a384e1fcb816da78aafbdefe9ede5e437
    <View style={styles.container}>
      <Button title = "Click for a surprise" onPress = {this.onPress.bind(this)}/>
      {this.state.showMajesty && majesty}
    </View>
    )
  };
}

let showPic: boolean = false;
function App() {
  
}


<<<<<<< HEAD
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======

>>>>>>> 3638de2a384e1fcb816da78aafbdefe9ede5e437
